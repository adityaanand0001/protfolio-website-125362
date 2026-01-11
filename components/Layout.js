import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-indigo-100 font-sans">
      <Nav />
      <main className="w-full pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}