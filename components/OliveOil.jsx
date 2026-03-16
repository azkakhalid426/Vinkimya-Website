"use client";

import Image from "next/image";
import Link from "next/link";

export default function OliveOilPage() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative h-[500px] w-full">
            <Image
              src="/Olive oil.jpeg"
              alt="Premium Olive Oil"
              fill
              className="object-contain hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Premium Quality <span className="text-green-600">Olive Oil</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Imported directly from the fertile olive regions of Turkey, our premium olive oil represents purity, tradition, and excellence.
               Produced under strict international standards, it delivers a naturally smooth taste, rich aroma, and superior nutritional benefits. 
               A true Mediterranean essential for refined cooking and healthy living.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold
                         hover:bg-green-700 hover:-translate-y-1
                         transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Contact for Purchase
            </Link>
          </div>
        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Why Choose Our Olive Oil?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Premium Grade",
                desc: "Extracted and processed with strict quality standards to ensure purity and freshness.",
              },
              {
                title: "Rich Flavor",
                desc: "A smooth and balanced taste perfect for cooking, frying, and salad dressing.",
              },
              {
                title: "Global Supply",
                desc: "Available for wholesale, retail, and deliver worldwide.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg
                           hover:-translate-y-3 hover:shadow-2xl
                           transition-all duration-500"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Health Benefits of Olive Oil
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Olive oil is widely known for its exceptional health benefits and
              is a key component of the Mediterranean diet.
            </p>

            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✔ Rich in healthy monounsaturated fats</li>
              <li>✔ High in antioxidants and Vitamin E</li>
              <li>✔ Supports heart health and reduces bad cholesterol</li>
              <li>✔ Anti-inflammatory properties</li>
              <li>✔ Promotes healthy digestion</li>
              <li>✔ Supports skin and hair nourishment</li>
            </ul>
          </div>

          {/* Image Side */}
          <div className="relative h-[450px] w-full">
            <Image
              src="/Oliveoil Benefits.jpeg"
              alt="Olive Oil Health Benefits"
              fill
              className="object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>


      {/* ================= CONTACT FOR PURCHASE ================= */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Contact for Purchase
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Interested in wholesale or bulk orders? Contact us today to discuss
            pricing, packaging, and distribution options.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold
                       hover:bg-green-700 hover:-translate-y-1
                       transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Purchase a Bottle
          </Link>
        </div>
      </section>

    </div>
  );
}