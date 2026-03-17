'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Eye, Globe, Award, Users } from 'lucide-react';

export default function About() {

  const values = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading global provider of premium chemical solutions.',
    },
    {
      icon: CheckCircle,
      title: 'Our Mission',
      description: 'Deliver exceptional quality products with outstanding customer service.',
    },
    {
      icon: Zap,
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and customer satisfaction.',
    },
  ];

  const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "500+", label: "Premium Products" },
    { icon: Users, value: "20+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-green-600 mx-auto mb-4">
            About VinKimya
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A trusted name in premium chemical sourcing and global trade,
            delivering quality, reliability, and long-term partnerships worldwide.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          {/* Image */}
          <div className="group">
            <Image
              src="/About.jpeg"
              alt="VinKimya Company"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Founded in 2015 in Lahore, Pakistan, VinKimya (Private) Limited
              has established itself as a reliable sourcing partner in the chemical supply industry.
            </p>

            <p className="text-gray-600 mb-5 leading-relaxed">
              We specialize in supplying premium-grade chemical products across
              Pakistan, Turkey, UAE, and Saudi Arabia — building strong global trade relationships.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our expertise in sourcing, logistics, and trade compliance ensures
              efficiency, transparency, and consistent quality for our clients.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-md 
                hover:shadow-xl hover:-translate-y-2 
                transition duration-500 text-center"
              >
                <Icon size={36} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-500 mt-2">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-10 rounded-2xl shadow-md 
                  hover:shadow-xl hover:-translate-y-3 
                  transition duration-500"
                >
                  <div className="bg-green-100 w-14 h-14 flex items-center 
                  justify-center rounded-xl mb-6">
                    <Icon size={28} className="text-green-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-600 text-white rounded-3xl p-16 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Let’s Build a Long-Term Partnership
          </h2>

          <p className="mb-8 text-green-100 max-w-2xl mx-auto">
            Partner with VinKimya and experience reliable sourcing,
            premium quality, and unmatched professional service.
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