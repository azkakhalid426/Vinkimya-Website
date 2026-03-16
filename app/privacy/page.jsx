'use client';

import App from '@/components/App';

export default function PrivacyPage() {
  return (
    <App>
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Privacy & Data Protection</h2>
            <p className="mb-4 text-gray-700">
              At VinKimya (Private) Limited, we take your privacy seriously. This privacy policy explains how we collect,
              use, and protect your personal information.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Information Collection</h3>
            <p className="mb-4 text-gray-700">
              We collect information you provide directly to us, such as when you contact us or request
              product information.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Information Use</h3>
            <p className="mb-4 text-gray-700">
              We use your information to respond to your inquiries, provide product information, and
              improve our services.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Data Protection</h3>
            <p className="mb-4 text-gray-700">
              We implement appropriate security measures to protect your personal information from
              unauthorized access or disclosure.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Contact Us</h3>
            <p className="text-gray-700">
              For any privacy concerns, please contact us at info@vinkimya.com
            </p>
          </div>
        </section>
      </div>
    </App>
  );
}
