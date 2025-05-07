// app/what-we-do/page.tsx

import React from "react";

export default function WhatWeDoPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        What We Do
      </h1>

      <section className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          At <strong>Sky I Max Industry Pvt. Ltd.</strong>, we specialize in delivering precision-engineered automotive components and solutions that meet the high-quality expectations of OEMs and Tier-1 suppliers. Our services span across the entire manufacturing lifecycle — from tool design to production and final inspection.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Core Capabilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Sheet Metal Stamping</strong> – High-quality pressing from 10 Ton to 150 Ton power presses</li>
          <li><strong>Pipe Bending</strong> – CNC and SPM pipe bending up to Ø30mm, 2mm thickness</li>
          <li><strong>Welding</strong> – MIG and projection welding for reliable and durable assemblies</li>
          <li><strong>Tool Manufacturing</strong> – In-house press tools, jigs, fixtures, and gauges</li>
          <li><strong>Paint Shop Accessories</strong> – Fabrication of custom hangers and trolleys</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Industries We Serve</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Two-Wheeler and Four-Wheeler Automotive</li>
          <li>Paint Shop and Assembly Line Equipment</li>
          <li>Sheet Metal & Tooling</li>
        </ul>

        <p className="mt-6">
          Our multi-divisional infrastructure in Gurgaon, Tapukhera, and Bhiwadi allows us to serve clients across India with high efficiency, flexibility, and reliability.
        </p>
      </section>
    </main>
  );
}
