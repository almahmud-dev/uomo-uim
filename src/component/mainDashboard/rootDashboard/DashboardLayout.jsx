'use client';
import Container from "@/component/common/Container";
import React, { useState } from "react";
import DashborardItems from "../dashboardAllComponent/DashborardItems";

const DashboardLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className=" mt-10 lg:mt-[50px]  pt-22.5 pb-10 lg:pb-25">
      <Container>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden mb-5">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-[14px] font-medium text-[#222] border border-[#e0e0e0] px-4 py-2 rounded"
          >
            <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
            {menuOpen ? "Close Menu" : "My Account Menu"}
          </button>
        </div>

        {/* Mobile Sidebar Dropdown */}
        {menuOpen && (
          <div className="lg:hidden mb-6 border border-[#e0e0e0] rounded p-4">
            <DashborardItems onClose={() => setMenuOpen(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <DashborardItems />
          </aside>

          {/* Main Content */}
          <main className="col-span-1 lg:col-span-3">
            {children}
          </main>
        </div>

      </Container>
    </section>
  );
};

export default DashboardLayout;