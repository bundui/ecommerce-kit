"use client";

import { useState } from "react";
import { z } from "zod";

export function useForm<T extends z.ZodType>(schema: T) {
  const [data, setData] = useState<Partial<z.infer<T>>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof z.infer<T>, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const validate = (): data is z.infer<T> => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
      }
      return false;
    }
  };

  const handleSubmit = async (onSubmit: (data: z.infer<T>) => Promise<void> | void) => {
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(data as z.infer<T>);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    data,
    errors,
    isSubmitting,
    setValue,
    validate,
    handleSubmit
  };
}
