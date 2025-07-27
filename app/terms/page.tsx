export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-gray max-w-none">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Terms of Service</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">2. Use License</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Permission is granted to temporarily download one copy of the materials on Store&#39;s
              website for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">3. Product Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We strive to provide accurate product information, including descriptions, prices, and
              availability. However:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Product colors may vary due to monitor settings</li>
              <li>We reserve the right to correct any errors in pricing or product information</li>
              <li>Product availability is subject to change without notice</li>
              <li>We may limit quantities available for purchase</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">4. Orders and Payment</h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-medium text-gray-900">Order Acceptance</h3>
            <p>
              All orders are subject to acceptance by us. We reserve the right to refuse or cancel
              any order for any reason, including but not limited to product availability, errors in
              product or pricing information, or suspected fraudulent activity.
            </p>

            <h3 className="mt-6 text-xl font-medium text-gray-900">Payment Terms</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Payment is due at the time of order</li>
              <li>We accept major credit cards and PayPal</li>
              <li>All prices are in USD unless otherwise specified</li>
              <li>You are responsible for any applicable taxes</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">5. Shipping and Delivery</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Shipping times and costs vary based on your location and selected shipping method. We
              are not responsible for delays caused by shipping carriers or customs processing.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Standard shipping: 5-7 business days</li>
              <li>Express shipping: 2-3 business days</li>
              <li>Overnight shipping: 1 business day</li>
              <li>International shipping: 7-21 business days</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">6. Returns and Refunds</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Please see our{" "}
              <a href="/returns" className="text-primary hover:underline">
                Returns Policy
              </a>{" "}
              for detailed information about returns, exchanges, and refunds.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">7. User Accounts</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              When you create an account with us, you must provide accurate and complete
              information. You are responsible for:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your account information remains current</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">8. Prohibited Uses</h2>
          <div className="space-y-4 text-gray-700">
            <p>You may not use our service:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>
                To violate any international, federal, provincial, or state regulations, rules,
                laws, or local ordinances
              </li>
              <li>
                To infringe upon or violate our intellectual property rights or the intellectual
                property rights of others
              </li>
              <li>
                To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or
                discriminate
              </li>
              <li>To submit false or misleading information</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">9. Limitation of Liability</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              In no event shall Store or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on Store&#39;s website, even
              if Store or a Store authorized representative has been notified orally or in writing
              of the possibility of such damage.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">10. Governing Law</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              These terms and conditions are governed by and construed in accordance with the laws
              of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction of
              the courts in that state or location.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">11. Changes to Terms</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We reserve the right to revise these terms of service at any time without notice. By
              using this website, you are agreeing to be bound by the then current version of these
              terms of service.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">12. Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div className="rounded-lg bg-gray-50 p-6">
              <p>
                <strong>Email:</strong> legal@store.com
              </p>
              <p>
                <strong>Phone:</strong> 1-800-STORE-01
              </p>
              <p>
                <strong>Address:</strong> 123 Commerce Street, Business City, BC 12345
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
