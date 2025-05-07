// app/how-we-do/page.tsx

import React from "react";

export default function HowWeDoPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        How We Do It
      </h1>

      <section className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          At <strong>Sky I Max Industry Pvt. Ltd.</strong>, our success lies in our well-structured processes, a customer-first approach, and our commitment to quality, speed, and innovation. From prototyping to production, we follow a methodical path that ensures precision, cost-efficiency, and consistent performance.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Our Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Design & Development:</strong> Using 3D/2D CAD software like Creo, SolidWorks, and AutoCAD, our engineers simulate and validate every tool before production.
          </li>
          <li>
            <strong>Tool Manufacturing:</strong> Progressive and compound tools, welding fixtures, and gauges are manufactured in-house using high-quality imported materials and precision equipment.
          </li>
          <li>
            <strong>Prototyping & Trial:</strong> Our skilled toolmakers and machine operators conduct trials using dedicated machines to ensure quality and fitment.
          </li>
          <li>
            <strong>Mass Production:</strong> With over 40 power presses and multiple welding & pipe bending stations, we handle both small and large batch production efficiently.
          </li>
          <li>
            <strong>Quality Inspection:</strong> Every product undergoes a rigorous quality check using calibrated instruments including microscopes, hardness testers, thickness meters, and gauges.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Our Strengths</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Rapid new part development with short lead times</li>
          <li>Simulation-based design validation before execution</li>
          <li>95% raw material utilization through VAVE process design</li>
          <li>In-house inventory & process tracking via software systems</li>
          <li>On-time delivery, continuous improvement, and skilled workforce</li>
        </ul>

        <p className="mt-6">
          Our focus is always on delivering superior quality, minimizing waste, and optimizing cost — while maintaining flexibility for diverse client requirements.
        </p>
      </section>
    </main>
  );
}

