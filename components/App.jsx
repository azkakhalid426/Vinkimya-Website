'use client';

import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

export default function App({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
