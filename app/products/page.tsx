// app/products/page.tsx

import React from "react";

export default function ProductsPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Products & Services
      </h1>

      <section className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          At <strong>Sky I Max Industry Pvt. Ltd.</strong>, we specialize in a wide
          range of automotive parts and assemblies. With robust manufacturing
          capabilities and precision tooling, we cater to OEMs and Tier 1
          companies across India.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>Pressed Components</strong>: Brackets, Footrests, Engine Guards, Pedals, Crowns, Handle Mounts</li>
          <li><strong>Welded Assemblies</strong>: MIG welded and projection welded assemblies for various platforms</li>
          <li><strong>Pipe Bending Parts</strong>: CNC and SPM bending up to Ø30mm and 2mm thickness</li>
          <li><strong>Tool Room Products</strong>: Press tools, jigs, fixtures, receiving gauges, and checking fixtures</li>
          <li><strong>Paint Shop Hangers & Trolleys</strong>: Custom-designed solutions for automotive paint lines</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Progressive and compound tool manufacturing</li>
          <li>Pipe cutting and turning operations</li>
          <li>High-quality sheet metal stamping</li>
          <li>In-house product design and simulation using Creo, SolidWorks, AutoCAD</li>
          <li>Quality inspection and testing: dry film, plating thickness, welding penetration</li>
          <li>Inventory and supply chain management for JIT delivery</li>
        </ul>
      </section>
    </main>
  );
}
