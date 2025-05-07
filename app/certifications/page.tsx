// app/certifications/page.tsx

import React from "react";

export default function CertificationsPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Certifications & Awards
      </h1>

      <section className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          At <strong>Sky I Max Industry Pvt. Ltd.</strong>, quality is not just a standard — it’s our commitment. We are proud to hold internationally recognized certifications and have been honored by our esteemed customers for consistent performance.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Certifications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>ISO 9001:2015 Certified</strong> – Recognized for maintaining a robust Quality Management System across all our facilities.</li>
          <li><strong>IITF Certification</strong> – Under process, expected to be completed within the next month.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Awards & Recognition</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>India Yamaha Motor Ltd.</strong> – Quality Recognition Award for exceptional part delivery and quality standards.</li>
          <li><strong>Quality Excellence Acknowledgements</strong> – From multiple OEM clients for our toolroom and welding consistency.</li>
        </ul>

        <p className="mt-6">
          These achievements reflect our strong foundation in quality systems, customer satisfaction, and continuous improvement.
        </p>
      </section>
    </main>
  );
}
