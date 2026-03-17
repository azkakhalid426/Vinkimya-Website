'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Leaf, Award, Globe, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

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

  const ceo = {
    name: "Khurram Mahmood Ramay",
    role: "CEO & Director",
    image: "/CEO image.png",
    email: "ramay@vinkimya.com",
  };

  const directors = [
    {
      name: "Aamna Khurram Ramay",
      role: "Director",
      image: "/Aamna.jpeg",
      email: "aamna@vinkimya.com",
    },
    {
      name: "Romesa Khurram Ramay",
      role: "Director",
      image: "/Romesa.jpeg",
      email: "romesa@vinkimya.com",
    },
    {
      name: "Adil Shehyrar",
      role: "Director",
      image: "/adil.jpeg",
      email: "adil@vinkimya.com",
    },
  ];

  const teamMembers = [
    { name: 'Amjad Siddique', role: 'IT Executive', image: '/Amjad.jpeg', email: 'amjad@vinkimya.com' },
    { name: 'Azka Khalid', role: 'Foreign Trade Executive', image: '/Azka.jpeg', email: 'azka@vinkimya.com' },
    { name: 'Ali Haider', role: 'Accounts Executive', image: '/ali.jpeg', email: 'ali@vinkimya.com' },
    { name: 'Malik Farrukh', role: 'Marketing Executive', image: '/Farukh.jpeg', email: 'malikfarrukh@vinkimya.com' },
    { name: 'Naveed', role: 'Logistics Executive', image: '/Naveed.jpeg', email: 'naveed@vinkimya.com' },
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

  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIBE_TEMPLATE_ID,
        { subscriber_email: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubscribeMessage('Thank you for subscribing!');
      setEmail('');

    } catch (error) {
      console.error(error);
      setSubscribeMessage('Subscription failed. Please try again.');
    }

    setLoading(false);
    setTimeout(() => setSubscribeMessage(''), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* HERO */}
      <section className="relative h-[700px] flex items-center justify-center text-center text-white overflow-hidden">

        <Image
          src="/Image.jpg"
          alt="Hero"
          fill
          className="object-cover scale-105 hover:scale-110 transition duration-[6000ms]"
          priority
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-6xl font-bold mb-6">Premium Chemical Solutions</h1>

          <p className="text-xl mb-10">
            Leading chemical company providing premium products and exclusive solutions to global clients
          </p>

          <div className="flex gap-4 justify-center">

            <Link href="/products" className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 hover:scale-105 transition flex items-center">
              Explore Products
              <ChevronRight size={20} className="ml-2"/>
            </Link>

            <Link href="/about" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 hover:scale-105 transition">
              Learn More
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Vinkimya?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-8 border rounded-xl hover:border-green-500 hover:shadow-xl hover:-translate-y-2 transition">
                <div className="mb-4 p-3 bg-green-100 rounded-lg inline-block">
                  <Icon size={24} className="text-green-600"/>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 text-center gap-8">
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

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: 'Arslan', message: 'Vinkimya provides top-quality products and excellent service.' },
            { name: 'Zainab',  message: 'Their olive oil is unmatched in quality.' },
            { name: 'Awais',message: 'Professional, timely, and always exceeding expectations.' }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition">
              <p className="italic text-gray-700 mb-4">"{testimonial.message}"</p>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Chief Executive Officer</h2>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-[350px]">
            <div className="relative w-full aspect-[4/5]">
              <Image src={ceo.image} alt={ceo.name} fill className="object-cover"/>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">{ceo.name}</h3>
              <p className="text-gray-600 mb-2">{ceo.role}</p>
              <a href={`mailto:${ceo.email}`} className="text-green-600 hover:text-green-800">{ceo.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Meet Our Directors</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {directors.map((director, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full aspect-[4/5]">
                <Image src={director.image} alt={director.name} fill className="object-cover"/>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">{director.name}</h3>
                <p className="text-gray-600 mb-2">{director.role}</p>
                <a href={`mailto:${director.email}`} className="text-green-600 hover:text-green-800">{director.email}</a>
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
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="relative w-full aspect-[4/5]">
                <Image src={member.image} alt={member.name} fill className="object-cover"/>
              </div>

              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <a href={`mailto:${member.email}`} className="text-green-600 hover:text-green-800">{member.email}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>

          <form onSubmit={handleSubscribe} className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="border px-4 py-3 rounded-lg w-80"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 hover:scale-105 transition"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {subscribeMessage && (
            <p className="text-green-600 mt-4">{subscribeMessage}</p>
          )}
        </div>
      </section>

    </div>
  );
}