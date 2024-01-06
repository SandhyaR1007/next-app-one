import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bellogs",
  description: "Lets get it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 p-3">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
