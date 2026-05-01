'use client';

import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');

  const contactInfo = [
    { icon: Phone, title: 'Phone', details: ['+92 (42) 37932518/19', '+92 (42) 111-111-411'], type: 'tel' },
    { icon: Mail, title: 'Email', details: ['info@vinkimya.com'], type: 'mailto' },
    { icon: MapPin, title: 'Location', details: ['Plot#4, ST. Factory Zone Al-Raai Road, Jia Musa Shahdrah, Lahore, Pakistan'] },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneValue && !isValidPhoneNumber(phoneValue)) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    setLoading(true);

    try {
      // Simulate backend network delay
      await new Promise(resolve => setTimeout(resolve, 800));

      toast.success('Thank you! Your message has been sent.');
      formRef.current.reset();
      setPhoneValue('');

    } catch (error) {
      console.error(error);
      toast.error('Failed to send message.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="p-8 rounded-xl border bg-gray-50 text-center">
                <Icon size={32} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                {info.details.map((detail, i) => {
                  if (info.type === 'tel') {
                    return (
                      <p key={i}>
                        <a href={`tel:${detail}`} className="text-green-600 hover:text-green-800">{detail}</a>
                      </p>
                    );
                  } else if (info.type === 'mailto') {
                    return (
                      <p key={i}>
                        <a href={`mailto:${detail}`} className="text-green-600 hover:text-green-800">{detail}</a>
                      </p>
                    );
                  } else {
                    return <p key={i}>{detail}</p>;
                  }
                })}
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 rounded-xl p-8 border border-green-200">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />

              </div>

              <div className="w-full bg-white px-4 py-2 border rounded-lg focus-within:ring-2 focus-within:ring-green-500">
                <PhoneInput
                  international
                  defaultCountry="US"
                  name="phone"
                  value={phoneValue}
                  onChange={setPhoneValue}
                  placeholder="Phone Number"
                  className="w-full outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}