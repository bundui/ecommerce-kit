export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-gray max-w-none">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-medium text-gray-900">Personal Information</h3>
            <p>
              We collect information you provide directly to us, such as when you create an account,
              make a purchase, subscribe to our newsletter, or contact us. This may include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Account credentials (username, password)</li>
              <li>Purchase history and preferences</li>
              <li>Communications with us</li>
            </ul>

            <h3 className="mt-6 text-xl font-medium text-gray-900">
              Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we automatically collect certain information about your
              device and usage, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>IP address and location information</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            2. How We Use Your Information
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Process and fulfill your orders</li>
              <li>Provide customer service and support</li>
              <li>Send you updates about your orders and account</li>
              <li>Improve our products and services</li>
              <li>Personalize your shopping experience</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">3. Information Sharing</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information in the following circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Service Providers:</strong> With trusted third-party service providers who
                help us operate our business
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                sale of assets
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly agree to share your
                information
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">4. Data Security</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. These measures include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">5. Your Rights</h2>
          <div className="space-y-4 text-gray-700">
            <p>You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Object to processing of your personal information</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@store.com or use the contact
              information provided below.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">6. Cookies and Tracking</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience,
              analyze site traffic, and personalize content. You can control cookie settings through
              your browser preferences.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">7. Changes to This Policy</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              material changes by posting the new policy on this page and updating the &#34;Last
              updated&#34; date.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">8. Contact Us</h2>
          <div className="space-y-4 text-gray-700">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="rounded-lg bg-gray-50 p-6">
              <p>
                <strong>Email:</strong> privacy@store.com
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
