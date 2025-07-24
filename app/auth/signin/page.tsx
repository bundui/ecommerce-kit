"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/authStore";
import { useForm } from "@/hooks/useForm";
import { SignInSchema, type SignInForm } from "@/lib/schemas";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const { login, isLoading } = useAuthStore();
  const { data, errors, isSubmitting, setValue, handleSubmit } = useForm(SignInSchema);

  const onSubmit = async (formData: SignInForm) => {
    await login(formData.email, formData.password);
    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Or{" "}
            <Link href="/auth/signup" className="text-primary hover:text-primary/80 font-medium">
              create a new account
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/auth/forgot-password"
                className="text-primary hover:text-primary/80 font-medium">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || isLoading}>
            {isSubmitting || isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}
