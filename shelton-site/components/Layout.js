import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700">
      <Header />

      <main className="mt-36">{children}</main>

      <Footer />
    </div>
  );
}
