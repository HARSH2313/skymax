// app/facilities/page.tsx

import React from "react";

export default function FacilitiesPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Our Facilities
      </h1>

      <section className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Sky I Max Industry Pvt. Ltd. operates state-of-the-art manufacturing
          facilities located in Gurgaon, Tapukhera, and Bhiwadi. Our primary
          plant at Plot No. G-139/140, RIICO Industrial Area, Karoli, Bhiwadi,
          spans 1500 sq. meters and is well-connected to major highways like
          KMP & NH-8.
        </p>

        <p>
          Each division is fully equipped with high-capacity machinery, trained
          manpower, and government-approved certifications to ensure smooth,
          high-quality, and efficient production processes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Major Equipment</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Power Presses: 40 units (10T to 150T)</li>
          <li>MIG Welding Sets: 15 units</li>
          <li>Projection Welding Sets: 2 units</li>
          <li>CNC & SPM Pipe Bending Machines</li>
          <li>Hydraulic Press, Drill Machines, Turning Adda, Traub</li>
          <li>Tool Room: Milling, Lathe, Surface Grinder, Shaper</li>
          <li>Cutting machine: Pipe cutting up to Ø60mm, 2mm thickness</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Design & Quality Control</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>3D/2D modeling using Creo, SolidWorks, and AutoCAD</li>
          <li>In-house tool design and simulation</li>
          <li>Spot test for hexavalent/trivalent plating</li>
          <li>Microscope-based welding penetration checks</li>
          <li>Dry film thickness meter and standard inspection gauges</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Special Capabilities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Tool room for press tools, gauges, fixtures</li>
          <li>Complete jig and fixture validation lab</li>
          <li>Turned and machined components</li>
          <li>Custom hanger and trolley manufacturing for paint shops</li>
        </ul>
      </section>
    </main>
  );
}
