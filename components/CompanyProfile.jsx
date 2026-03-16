'use client';

import { Award, Users, Globe, TrendingUp, Zap, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CompanyProfile() {
  const sections = [
    {
      icon: TrendingUp,
      title: 'Growth & Expansion',
      content:
        'Since our inception in 2015, Vinkimya has expanded its presence internationally, providing reliable chemical sourcing to clients in Pakistan, Turkey, Dubai, and Saudi Arabia.',
    },
    {
      icon: Award,
      title: 'Certifications & Compliance',
      content:
        'We adhere to global quality standards. Our sourcing process ensures all products meet ISO and international certifications, giving our clients complete confidence.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      content:
        'Our team of experienced professionals leverages over 20 years of combined industry knowledge to provide solutions that match client needs.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      content:
        'With operations spanning multiple continents, Vinkimya guarantees timely delivery and excellent service for clients worldwide.',
    },
    {
      icon: Zap,
      title: 'Innovation & Quality',
      content:
        'Constantly improving processes and sourcing methods, we ensure every product meets the highest standards of quality and reliability.',
    },
    {
      icon: Target,
      title: 'Customer-Centric Approach',
      content:
        "Our clients are our priority. We offer personalized services, responsive support, and tailored solutions for unique business requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Company Profile</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how VinKimya (Private) Limited has become a trusted partner for global chemical sourcing.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg mb-12 animate-slide-in-up">
          <Image
            src="/company.jpeg" // wide hero image showing company or team
            alt="Vinkimya Team"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
              From Local Supplier to Global Partner in Premium Chemicals
            </h2>
          </div>
        </div>

        {/* About Vinkimya */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-12 mb-16 animate-slide-in-up">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-green-100 leading-relaxed mb-6">
            Founded in Lahore, Pakistan in 2015, VinKimya (Private) Limited has grown into a trusted supplier of premium chemical solutions. 
            We specialize in sourcing and distributing quality chemicals to clients across multiple countries, ensuring reliability, compliance, and excellence in every transaction.
          </p>
          <p className="text-lg text-green-100 leading-relaxed mb-6">
            Our mission goes beyond business—we aim to empower our clients with the best products, innovative sourcing strategies, and a partnership approach that ensures growth and sustainability.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-green-100">Products Supplied</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-green-100">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-green-100">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Learn More PDF */}
        <div className="text-center mb-16 animate-slide-in-up">
          <p className="text-lg text-gray-700 mb-4">Learn more about our company code of ethics:</p>
          <Link
            href="/Code of Ethics.pdf"
            target="_blank"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-all transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-lg transition-all animate-scale-up"
                style={{ animationDelay: `${(index % 2) * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Icon size={32} className="text-green-600 flex-shrink-0 mt-1" />
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-all animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Deliver premium quality chemical products and innovative solutions with excellence and integrity, supporting clients worldwide.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl border border-green-200 hover:shadow-lg transition-all animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Be the most trusted global supplier, recognized for quality, reliability, and customer-centric solutions.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Quality', desc: 'Excellence in every product and service' },
              { title: 'Integrity', desc: 'Honest and ethical business practices' },
              { title: 'Innovation', desc: 'Continuous improvement and development' },
              { title: 'Reliability', desc: 'Consistent and dependable service' },
            ].map((value, i) => (
              <div
                key={i}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h4 className="text-xl font-bold text-green-600 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With VinKimya</h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg text-green-100">
            Join our growing network of satisfied clients across the globe. Experience premium quality products 
            and exceptional service.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-all transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>

      </div>
    </div>
  );
}