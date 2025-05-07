// components/Hero.tsx

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/hero-bg.jpg')] h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sky I Max Industry Pvt. Ltd.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          ISO 9001:2015 Certified Automotive Parts Manufacturer
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
