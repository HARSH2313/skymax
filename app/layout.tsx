import "../styles/globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sky I Max Industry Pvt. Ltd.",
  description: "ISO 9001:2015 certified manufacturer of automotive parts",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        <Header />
        <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}