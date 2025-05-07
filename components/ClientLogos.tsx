// components/ClientLogos.tsx

import Image from "next/image";

const clients = [
  { name: "India Yamaha Motor", logo: "/images/clients/yamaha.png" },
  { name: "JBM Group", logo: "/images/clients/jbm.png" },
  { name: "Sankei Giken", logo: "/images/clients/sankei.png" },
  { name: "Amp Group", logo: "/images/clients/amp.png" },
  { name: "Goshi India", logo: "/images/clients/goshi.png" },
  { name: "Varroc", logo: "/images/clients/varroc.png" },
  { name: "Maruti Suzuki", logo: "/images/clients/maruti.png" },
  { name: "Suzuki Motorcycle", logo: "/images/clients/suzuki.png" },
];

export default function ClientLogos() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Our Valued Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
