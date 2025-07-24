"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/authStore";
import { useForm } from "@/hooks/useForm";
import { SignUpSchema, type SignUpForm } from "@/lib/schemas";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const { signup, isLoading } = useAuthStore();
  const { data, errors, isSubmitting, setValue, handleSubmit } = useForm(SignUpSchema);

  const onSubmit = async (formData: SignUpForm) => {
    await signup(formData.email, formData.password, formData.firstName, formData.lastName);
    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Or{" "}
            <Link href="/auth/signin" className="text-primary hover:text-primary/80 font-medium">
              sign in to your existing account
            </Link>
          </p>
        </div>

        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
          }}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  type="text"
                  placeholder="First name"
                  value={data.firstName || ""}
                  onChange={(e) => setValue("firstName", e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Last name"
                  value={data.lastName || ""}
                  onChange={(e) => setValue("lastName", e.target.value)}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={data.email || ""}
                onChange={(e) => setValue("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                value={data.password || ""}
                onChange={(e) => setValue("password", e.target.value)}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <Input
                type="password"
                placeholder="Confirm password"
                value={data.confirmPassword || ""}
                onChange={(e) => setValue("confirmPassword", e.target.value)}
                className={errors.confirmPassword ? "border-red-500" : ""}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="agree-terms"
              name="agree-terms"
              type="checkbox"
              required
              className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:text-primary/80">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || isLoading}>
            {isSubmitting || isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
      </div>
    </div>
  );
}
