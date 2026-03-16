'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are your main product categories?',
      answer: 'We offer a wide range of chemical products including industrial chemicals, pharmaceutical compounds, cosmetic ingredients, agricultural solutions, and our exclusive olive oil. Each product is carefully selected for quality and reliability.',
    },
    {
      question: 'How do I order or get pricing information?',
      answer: 'Please contact our sales team directly using the contact form on our website. We provide customized quotes based on your specific requirements and order quantities. Our team will respond promptly with detailed pricing.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes! We serve 50+ countries including Pakistan, Turkey, Dubai, Saudi Arabia, and beyond. We have established logistics partnerships to ensure safe and timely delivery of our products worldwide.',
    },
    {
      question: 'What is your minimum order quantity?',
      answer: 'Minimum order quantities vary depending on the product. Please contact our team with your specific requirements and we will provide details on MOQ and pricing for that particular product.',
    },
    {
      question: 'Are your products certified and tested?',
      answer: 'Yes, all our products meet international standards and are ISO certified. We maintain strict quality control measures and conduct regular testing to ensure the highest quality for our clients.',
    },
    {
      question: 'Can you provide custom chemical solutions?',
      answer: 'Absolutely! Our team can work with you to develop custom chemical solutions tailored to your specific needs. Contact us to discuss your requirements with our technical team.',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our products and services</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-all animate-slide-in-left"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-green-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-green-50 rounded-xl p-8 text-center border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
