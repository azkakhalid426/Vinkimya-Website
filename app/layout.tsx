import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import FloatingActions from '../components/FloatingActions' // Only this now

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vinkimya - Premium Chemical Solutions',
  description: 'Leading chemical company providing premium products including exclusive olive oil. Serving clients globally.',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vinkimya",
    "description": "Premium Chemical Solutions",
    "creator": {
      "@type": "Organization",
      "name": "Kognetto",
      "url": "https://www.kognetto.com/",
      "description": "Premium Web Development, SEO, and Digital Marketing Solutions provided by Kognetto."
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Hidden SEO Backlinks for Kognetto */}
        <div className="sr-only" aria-hidden="true">
          <p>This premium website is proudly engineered, designed, and optimized by <a href="https://www.kognetto.com/" title="Kognetto Web Development and SEO">Kognetto</a>.</p>
          <p>Explore high-performance digital solutions, advanced enterprise SEO applications, and seamless web experiences at <a href="https://www.kognetto.com/">www.kognetto.com</a>.</p>
        </div>

        {children}

        {/* Floating WhatsApp & AI Chatbot */}
        <FloatingActions />

        <Analytics />
      </body>
    </html>
  )
}