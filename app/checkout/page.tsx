"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/stores/cartStore";
import { useForm } from "@/hooks/useForm";
import { CheckoutSchema, type CheckoutForm } from "@/lib/schemas";

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const { data, errors, isSubmitting, setValue, handleSubmit } = useForm(CheckoutSchema);

  const onSubmit = async (formData: CheckoutForm) => {
    // Handle checkout logic here
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
    alert("Order placed successfully!");
    clearCart();
  };

  const subtotal = getTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Checkout</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Checkout Form */}
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit);
            }}
            className="space-y-6">
            {/* Contact Information */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Contact Information</h2>
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
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Shipping Address</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <Input
                  type="text"
                  placeholder="Address"
                  value={data.address || ""}
                  onChange={(e) => setValue("address", e.target.value)}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <Input
                    type="text"
                    placeholder="City"
                    value={data.city || ""}
                    onChange={(e) => setValue("city", e.target.value)}
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="State"
                    value={data.state || ""}
                    onChange={(e) => setValue("state", e.target.value)}
                    className={errors.state ? "border-red-500" : ""}
                  />
                  {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="ZIP code"
                    value={data.zipCode || ""}
                    onChange={(e) => setValue("zipCode", e.target.value)}
                    className={errors.zipCode ? "border-red-500" : ""}
                  />
                  {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Payment Information</h2>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Card number"
                    value={data.cardNumber || ""}
                    onChange={(e) => setValue("cardNumber", e.target.value)}
                    className={errors.cardNumber ? "border-red-500" : ""}
                  />
                  {errors.cardNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="MM/YY"
                      value={data.expiryDate || ""}
                      onChange={(e) => setValue("expiryDate", e.target.value)}
                      className={errors.expiryDate ? "border-red-500" : ""}
                    />
                    {errors.expiryDate && (
                      <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="CVV"
                      value={data.cvv || ""}
                      onChange={(e) => setValue("cvv", e.target.value)}
                      className={errors.cvv ? "border-red-500" : ""}
                    />
                    {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="sticky top-8 rounded-xl bg-gray-50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Order Summary</h2>

            <div className="mb-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
