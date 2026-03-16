'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Company Profile', href: '/company' },
        { label: 'TepeKimya Partnership', href: '/partnership' }, // ✅ Added
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'All Products', href: '/products' },
        { label: 'Olive Oil', href: '/olive-oil' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQs', href: '/faq' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
  ];

  const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/vinkimya/', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/vinkimya', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/vinkimya-pvt-ltd', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/923011165593', label: 'WhatsApp' },
];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="animate-jump"> {/* optional jump animation */}
                <Image
                  src="/logo.jpg"
                  alt="Vinkimya Logo"
                  width={220}  
                  height={90}  
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Solution For All Industrial Chemicals.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <Phone size={16} />
                <a href="tel:+1234567890">+92(42) 111-111-411</a>
              </div>
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <Mail size={16} />
                <a href="mailto:info@vinkimya.com">info@vinkimya.com</a>
              </div>
              <div className="flex items-start gap-2 hover:text-green-400 transition-colors">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Pakistan</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm ${
                        link.href === '/partnership' ? 'text-gray-400 mb-4' : 'text-gray-400'
                      } hover:text-green-400 transition-colors`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-green-600 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Vinkimya. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}