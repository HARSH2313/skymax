// app/clients/page.tsx

import React from "react";

const clients = [
  "India Yamaha Motor Pvt. Ltd.",
  "Neel Metal Products Ltd.",
  "NMPL2 Exhaust Pvt. Ltd.",
  "Sankei Giken India Pvt. Ltd.",
  "Anand Motor Products",
  "Goshi India Auto Parts Pvt. Ltd.",
  "Honda Motorcycle & Scooter India Pvt. Ltd.",
  "Maruti Suzuki India Ltd.",
  "Suzuki Motorcycle India Pvt. Ltd.",
  "Suzuki Motor Gujarat Pvt. Ltd.",
  "Suzuki Powertrain India Ltd.",
  "Varroc Polymers Pvt. Ltd. (Binola & Greater Noida)",
  "Amp Group",
  "JBM Group",
];

export default function ClientsPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Our Clients
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        We are proud to be associated with industry-leading OEMs and Tier-1 suppliers in the automotive sector. Our commitment to precision, performance, and partnership has earned us long-standing relationships with some of the most respected names in the industry.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border border-gray-200 rounded-md p-4 text-center text-gray-800 font-medium hover:shadow-md transition"
          >
            {client}
          </div>
        ))}
      </div>
    </main>
  );
}
