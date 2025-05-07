// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Sky I Max Industry Pvt. Ltd.</h3>
          <p className="text-sm">
            Plot No. G-139/140, RIICO Industrial Area,<br />
            Karoli, Bhiwadi, Rajasthan, India
          </p>
          <p className="mt-2 text-sm">Email: info@skyimax.com</p>
          <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
        </div>

        <div>
          <h4 className="text-md font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/facilities" className="hover:text-white">Facilities</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold text-white mb-3">Certifications</h4>
          <ul className="space-y-2 text-sm">
            <li>ISO 9001:2015 Certified</li>
            <li>Recognition from India Yamaha Motor Ltd.</li>
            <li>IITF Certification (Upcoming)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            {/* Add real links and icons as needed */}
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm bg-gray-800 py-4">
        &copy; {new Date().getFullYear()} Sky I Max Industry Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
