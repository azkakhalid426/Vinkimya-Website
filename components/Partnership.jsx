'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Globe, Shield, Award, ArrowLeft } from 'lucide-react';

export default function Partnership() {

  const products = [
    "PVC Cables Stabilizers",
    "Polyethylene Wax Additives",
    "Metallic Stearates",
    "Calcium Oxide & Rubber Additives",
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Global Innovation",
      description: "Advanced Malaysian chemical technology with international standards.",
    },
    {
      icon: Shield,
      title: "Exclusive Distribution Rights",
      description: "VinKimya is the sole exclusive distributor in Pakistan & Afghanistan.",
    },
    {
      icon: Award,
      title: "Premium Industrial Quality",
      description: "High-performance additives designed for durability and excellence.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            TepeKimya Distribution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VinKimya (Private) Limited is the sole and exclusive distributor of 
            Tepe Kimya products in Pakistan and Afghanistan — delivering 
            premium chemical additives backed by global innovation and industrial excellence.
          </p>
        </div>

        {/* Partnership Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          <div>
            <Image
              src="/TepeKimya.jpeg"
              alt="Tepe Kimya Malaysia"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Exclusive Strategic Partnership
            </h2>
            <p className="text-gray-600 mb-5">
              Through our strategic partnership with Tepe Kimya,
              VinKimya ensures direct access to internationally recognized
              chemical technologies and high-performance industrial additives.
            </p>
            <p className="text-gray-600">
              Our exclusive rights allow us to provide consistent supply,
              technical expertise, and trusted solutions to manufacturers
              across multiple industries.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md 
                hover:shadow-xl hover:-translate-y-2 
                transition duration-500 flex items-center gap-4"
              >
                <CheckCircle size={28} className="text-green-600" />
                <span className="text-lg font-medium text-gray-800">
                  {product}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-md 
                hover:shadow-xl hover:-translate-y-3 
                transition duration-500 text-center"
              >
                <Icon size={40} className="text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-green-600 text-white rounded-3xl p-16 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Partner With Confidence
          </h2>
          <p className="mb-8 text-green-100 max-w-2xl mx-auto">
            Contact VinKimya to access Tepe Kimya’s premium additive solutions exclusively.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 
            px-10 py-4 rounded-xl font-bold 
            hover:scale-105 hover:bg-green-50 
            transition duration-300"
          >
            Contact Our Team
          </Link>
        </div>

      </div>
    </div>
  );
}