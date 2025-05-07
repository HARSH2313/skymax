// app/contact/page.tsx

import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Company Contact Details */}
        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            We’d love to hear from you. For any inquiries, project discussions, or visits, please reach out to us using the contact form or the details below.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Head Office</h2>
            <p>Plot No. G-139/140, RIICO Industrial Area, Karoli, Bhiwadi, Rajasthan</p>
            <p>Email: <a href="mailto:info@skyimax.com" className="text-blue-600 underline">info@skyimax.com</a></p>
            <p>Phone: <a href="tel:+919999999999" className="text-blue-600 underline">+91 99999 99999</a></p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Fabrication Division</h2>
            <p>Plot No. 342, Near Petrol Pump, Opp. Indian Oil Residency Colony, Gurgaon (HR)</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Working Hours</h2>
            <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form Component */}
        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
