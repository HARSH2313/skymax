// app/about/page.tsx

import React from "react";

export default function AboutPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
        About Us
      </h1>

      <section className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          <strong>Sky I Max Industry Pvt. Ltd.</strong> was founded in 2016 with a
          commitment to delivering precision-engineered automotive components
          through cutting-edge manufacturing and design excellence.
        </p>

        <p>
          Headquartered in Bhiwadi, Rajasthan with additional divisions in
          Gurgaon and Tapukhera, we are an <strong>ISO 9001:2015 certified</strong> company,
          supplying leading OEMs and Tier 1 vendors such as India Yamaha Motor,
          JBM Group, Honda, Suzuki, and Goshi India.
        </p>

        <p>
          Our core strength lies in in-house development of sheet metal
          components, welded assemblies, pipe bending parts, and tool
          manufacturing. Equipped with power presses ranging from 5 to 150 tons,
          CNC pipe bending machines, MIG and projection welding stations, and
          advanced inspection tools, we ensure quality, reliability, and
          on-time delivery.
        </p>

        <p>
          At Sky I Max, we believe in continual improvement, cost-effective
          processes, and building long-term relationships with our clients
          through transparency, innovation, and excellence.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To deliver high-quality, cost-effective automotive components that
          exceed customer expectations through innovation, precision, and
          timely execution.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-700">
          To be India’s most trusted partner in automotive sheet metal
          fabrication and tool manufacturing by leveraging smart engineering,
          skilled manpower, and sustainable practices.
        </p>
      </section>
    </main>
  );
}
