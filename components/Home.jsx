'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Leaf, Award, Globe, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {

  const features = [
    {
      icon: Leaf,
      title: 'Premium Quality',
      description: 'Highest quality chemical products sourced and supplied with care',
    },
    {
      icon: Award,
      title: 'Industry Certified',
      description: 'All products meet international standards and certifications',
    },
    {
      icon: Globe,
      title: 'Global Delivery',
      description: 'Serving clients worldwide including Pakistan, Turkey, Dubai, and beyond',
    },
    {
      icon: Sparkles,
      title: 'Exclusive Olive Oil',
      description: 'Premium quality olive oil available exclusively for our valued clients',
    },
  ];

  const testimonials = [
    {
      name: "Arslan",
      message: "Vinkimya provided excellent service and high quality products."
    },
    {
      name: "Zainab",
      message: "Amazing experience working with Vinkimya. Their team is very professional."
    },
    {
      name: "Awais",
      message: "Reliable company with great communication and timely delivery."
    }
  ];

  const ceo = {
    name: "Khurram Mahmood Ramay",
    role: "Chief Executive Officer",
    image: "/CEO image.png",
    email: "ramay@vinkimya.com",
  };

  const directors = [
    {
      name: "Aamna Khurram Ramay",
      role: "Director",
      image: "/Amna.png",
      email: "aamna@vinkimya.com",
    },
    {
      name: "Romesa Khurram Ramay",
      role: "Director",
      image: "/Romesa.png",
      email: "romesa@vinkimya.com",
    },
    {
      name: "Adil Sheryar Mufti",
      role: "Director",
      image: "/Adil.png",
      email: "adil@vinkimya.com",
    },
  ];

  const teamMembers = [
    { name: 'Amjad Siddique', role: 'IT Executive', image: '/Amjad.jpeg', email: 'amjad@vinkimya.com' },
    { name: 'Azka Khalid', role: 'Foreign Trade Executive', image: '/Azka.jpeg', email: 'azka@vinkimya.com' },
    { name: 'Ali Haider', role: 'Accounts Executive', image: '/ali.jpeg', email: 'ali@vinkimya.com' },
    { name: 'Malik Farrukh', role: 'Marketing Executive', image: '/Farukh.jpeg', email: 'malikfarrukh@vinkimya.com' },
    { name: 'Naveed', role: 'Logistics Executive', image: '/naveed.jpeg', email: 'naveed@vinkimya.com' },
  ];

  const [productsCount, setProductsCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {

    const animate = (target, setter, duration) => {

      let start = 0;
      const increment = target / (duration / 20);

      const interval = setInterval(() => {

        start += increment;

        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(start));
        }

      }, 20);

    };

    animate(500, setProductsCount, 1000);
    animate(50, setCountriesCount, 1000);
    animate(20, setYearsCount, 1000);

  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      {/* HERO */}

      <section className="relative h-[700px] flex items-center justify-center text-center text-white overflow-hidden">

        <Image
          src="/Image.jpg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-6xl font-bold mb-6">
            Premium Chemical Solutions
          </h1>

          <p className="text-xl mb-10">
            Leading chemical company providing premium products and exclusive solutions to global clients
          </p>

          <div className="flex gap-4 justify-center">

            <Link
              href="/products"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 hover:scale-105 transition flex items-center"
            >
              Explore Products
              <ChevronRight size={20} className="ml-2"/>
            </Link>

            <Link
              href="/about"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 hover:scale-105 transition"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="py-20 bg-white">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Why Choose VinKimya?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {features.map((feature,index)=>{

            const Icon = feature.icon;

            return(

              <div
                key={index}
                className="p-8 border rounded-xl hover:border-green-500 hover:shadow-xl hover:-translate-y-2 transition"
              >

                <div className="mb-4 p-3 bg-green-100 rounded-lg inline-block">
                  <Icon size={24} className="text-green-600"/>
                </div>

                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>

              </div>

            )

          })}

        </div>

      </section>


      {/* STATS */}

      <section className="py-20 bg-gray-50">

        <div className="grid md:grid-cols-3 text-center gap-8 max-w-7xl mx-auto">

          <div>
            <div className="text-5xl font-bold text-green-600">{productsCount}+</div>
            <p className="text-gray-600">Premium Products</p>
          </div>

          <div>
            <div className="text-5xl font-bold text-green-600">{countriesCount}+</div>
            <p className="text-gray-600">Countries Served</p>
          </div>

          <div>
            <div className="text-5xl font-bold text-green-600">{yearsCount}+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>

        </div>

      </section>


      {/* CLIENT REVIEWS */}

      <section className="py-20 bg-white">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {testimonials.map((review,idx)=>(

            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow p-8 hover:shadow-xl transition"
            >

              <p className="text-gray-700 italic mb-6">
                "{review.message}"
              </p>

              <h4 className="font-bold text-green-600">
                {review.name}
              </h4>

            </div>

          ))}

        </div>

      </section>


      {/* CEO */}

      <section className="py-24 bg-gray-50">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Chief Executive Officer</h2>
        </div>

        <div className="flex justify-center">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[350px]">

            <div className="relative w-full aspect-[4/5]">

              <Image
                src={ceo.image}
                alt={ceo.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-6 text-center">

              <h3 className="text-2xl font-bold">{ceo.name}</h3>
              <p className="text-gray-600 mb-3">{ceo.role}</p>

              <a
                href={`mailto:${ceo.email}`}
                className="text-green-600"
              >
                Email
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* DIRECTORS */}

      <section className="py-24 bg-white">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Board of Directors</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {directors.map((director,idx)=>(

            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">

              <div className="relative w-full aspect-[4/5]">

                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold">{director.name}</h3>
                <p className="text-gray-600 mb-3">{director.role}</p>

                <a href={`mailto:${director.email}`} className="text-green-600">
                  Email
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* TEAM */}

      <section className="py-20 bg-gray-50">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Team</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">

          {teamMembers.map((member,idx)=>(

            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">

              <div className="relative w-full aspect-[4/5]">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-5 text-center">

                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>

                <a
                  href={`mailto:${member.email}`}
                  className="text-green-600"
                >
                  Email
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="py-20 bg-green-600 text-white text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Work With Us?
        </h2>

        <Link
          href="/contact"
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold"
        >
          Contact Us
        </Link>

      </section>

    </div>
  );
}