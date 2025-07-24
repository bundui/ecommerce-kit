"use client"

import { useState } from "react"
import { z } from "zod"

export function useForm<T extends z.ZodType>(schema: T) {
  const [data, setData] = useState<Partial<z.infer<T>>>({})
  const [errors, setErrors] = useState<Partial<Record<keyof z.infer<T>, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const setValue = (field: keyof z.infer<T>, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = (): data is z.infer<T> => {
    try {
      schema.parse(data)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof z.infer<T>, string>> = {}
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            const field = err.path[0] as keyof z.infer<T>
            newErrors[field] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (onSubmit: (data: z.infer<T>) => Promise<void> | void) => {
    if (!validate()) return

    setIsSubmitting(true)
    try {
      await onSubmit(data as z.infer<T>)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    data,
    errors,
    isSubmitting,
    setValue,
    validate,
    handleSubmit,
  }
}
