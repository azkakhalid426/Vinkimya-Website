'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Leaf, Award, Globe, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {

  const features = [
    { icon: Leaf, title: 'Premium Quality', description: 'Highest quality chemical products sourced and supplied with care' },
    { icon: Award, title: 'Industry Certified', description: 'All products meet international standards and certifications' },
    { icon: Globe, title: 'Global Delivery', description: 'Serving clients worldwide including Pakistan, Turkey, Dubai, and beyond' },
    { icon: Sparkles, title: 'Exclusive Olive Oil', description: 'Premium quality olive oil available exclusively for our valued clients' },
  ];

  const testimonials = [
    { name: "Arslan", message: "Vinkimya provided excellent service and high quality products." },
    { name: "Zainab", message: "Amazing experience working with Vinkimya. Their team is very professional." },
    { name: "Awais", message: "Reliable company with great communication and timely delivery." }
  ];

  const ceo = {
    name: "Khurram Mahmood Ramay",
    role: "Chief Executive Officer",
    image: "/CEO image.png",
    email: "ramay@vinkimya.com",
  };

  const directors = [
    { name: "Aamna", role: "Director", image: "/aamna.jpeg", email: "aamna@vinkimya.com" },
    { name: "Romesa", role: "Director", image: "/romesa.jpeg", email: "romesa@vinkimya.com" },
    { name: "Ali", role: "Director", image: "/ali-director.jpeg", email: "ali@vinkimya.com" },
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
    const animate = (target, setter) => {
      let start = 0;
      const interval = setInterval(() => {
        start += target / 50;
        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(start));
        }
      }, 20);
    };

    animate(500, setProductsCount);
    animate(50, setCountriesCount);
    animate(20, setYearsCount);
  }, []);

  // SUBSCRIBE STATE
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { subscriber_email: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setMessage("Subscribed successfully!");
      setEmail('');

    } catch (error) {
      setMessage("Something went wrong.");
    }

    setLoading(false);
    setTimeout(() => setMessage(''), 4000);
  };

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative h-[700px] flex items-center justify-center text-white text-center">
        <Image src="/Image.jpg" alt="Hero" fill className="object-cover"/>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-6">Premium Chemical Solutions</h1>
          <p className="mb-8">Leading chemical company providing premium products globally</p>

          <Link href="/products" className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold">
            Explore Products
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Vinkimya?</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f,i)=>(
            <div key={i} className="p-6 border rounded-xl hover:shadow-lg transition">
              <f.icon className="mx-auto mb-4 text-green-600"/>
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="grid md:grid-cols-3">
          <div><h1 className="text-5xl text-green-600">{productsCount}+</h1><p>Products</p></div>
          <div><h1 className="text-5xl text-green-600">{countriesCount}+</h1><p>Countries</p></div>
          <div><h1 className="text-5xl text-green-600">{yearsCount}+</h1><p>Years</p></div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Client Reviews</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t,i)=>(
            <div key={i} className="p-6 bg-gray-100 rounded-xl">
              <p className="italic mb-4">"{t.message}"</p>
              <h4 className="font-bold text-green-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CEO */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-10">CEO</h2>

        <div className="flex justify-center">
          <div className="w-[280px] bg-white shadow rounded-xl overflow-hidden">
            <Image src={ceo.image} alt={ceo.name} width={300} height={350}/>
            <div className="p-4">
              <h3 className="font-bold">{ceo.name}</h3>
              <p>{ceo.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORS (FIXED SIZE) */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Directors</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {directors.map((d,i)=>(
            <div key={i} className="w-[260px] mx-auto bg-white shadow rounded-xl overflow-hidden">
              <Image src={d.image} alt={d.name} width={260} height={300}/>
              <div className="p-4">
                <h3 className="font-bold">{d.name}</h3>
                <p>{d.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-10">Team</h2>

        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {teamMembers.map((m,i)=>(
            <div key={i} className="bg-white p-3 rounded-xl shadow">
              <Image src={m.image} alt={m.name} width={200} height={250}/>
              <h4 className="font-semibold">{m.name}</h4>
              <p className="text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe</h2>

        <form onSubmit={handleSubscribe} className="flex justify-center gap-3">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded">
            {loading ? "..." : "Subscribe"}
          </button>
        </form>

        {message && <p className="mt-4 text-green-600">{message}</p>}
      </section>

    </div>
  );
}