import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Stay Updated</h2>
        <p className="text-primary-foreground/80 mb-8 text-xl">
          Subscribe to our newsletter and be the first to know about new products, exclusive offers,
          and special promotions.
        </p>

        <div className="mx-auto max-w-md">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          <p className="text-primary-foreground/60 mt-4 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
