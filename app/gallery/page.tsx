// app/gallery/page.tsx

import Image from "next/image";
import React from "react";

const galleryImages = [
  "/images/gallery/press-machine.jpg",
  "/images/gallery/tool-room.jpg",
  "/images/gallery/mig-welding.jpg",
  "/images/gallery/plant-exterior.jpg",
  "/images/gallery/cnc-bending.jpg",
  "/images/gallery/inspection-lab.jpg",
  "/images/gallery/product-display.jpg",
  "/images/gallery/fabrication.jpg",
];

export default function GalleryPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
        Gallery
      </h1>

      <p className="text-lg text-gray-700 mb-10">
        A glimpse into our manufacturing capabilities, facilities, and the precision-driven environment at Sky I Max Industry Pvt. Ltd.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="rounded overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={350}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
