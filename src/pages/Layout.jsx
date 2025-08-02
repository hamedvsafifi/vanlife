import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[rgba(255,247,237,1)]">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
