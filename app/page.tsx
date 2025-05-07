// app/page.tsx

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ClientLogos from "@/components/ClientLogos";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section className="py-16 px-4 md:px-8 lg:px-20">
        <SectionTitle title="Welcome to Sky I Max Industry Pvt. Ltd." />

        <div className="max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            Sky I Max Industry Pvt. Ltd. is a trusted name in the Indian automotive industry,
            known for manufacturing high-quality sheet metal components, tubular parts,
            and welded assemblies. Founded in 2016, we’ve grown into a multi-plant operation
            with ISO 9001:2015 certification, delivering excellence to OEMs and Tier-1 suppliers.
          </p>

          <p className="mb-4">
            With a commitment to innovation, quality, and customer satisfaction, our team
            leverages cutting-edge machinery, in-house tool manufacturing, and robust QA
            practices to produce reliable and cost-effective components.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
        <SectionTitle title="Our Trusted Clients" />
        <ClientLogos />
      </section>
    </main>
  );
}
