'use client';

import App from '@/components/App';

export default function TermsPage() {
  return (
    <App>
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold">Terms & Conditions</h1>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="mb-4 text-gray-700">
              These terms and conditions outline the rules and regulations for the use of Vinkimya's website.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">Intellectual Property Rights</h3>
            <p className="mb-4 text-gray-700">
              Unless otherwise stated, VinKimya owns the intellectual property rights for all material on the website.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">User Responsibilities</h3>
            <p className="mb-4 text-gray-700">
              Users agree not to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Disclaimer</h3>
            <p className="mb-4 text-gray-700">
              The information on this website is provided "as is" without any representations or warranties, express or implied.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700">
              In no event shall VinKimya, nor any of its officers, directors and employees, be held liable for anything arising
              out of or in any way connected with your use of this website.
            </p>
          </div>
        </section>
      </div>
    </App>
  );
}
