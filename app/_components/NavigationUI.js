"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function NavigationUI({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 text-xl">
      {/* Mobile button */}
      <div className="flex justify-center sm:hidden">
        <button
          className="p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>

      {/* Desktop links */}
      <ul className="hidden gap-6 sm:flex sm:flex-row sm:items-center sm:gap-16">
        <NavLinks session={session} />
      </ul>

      {/* Mobile menu modal */}
      {menuOpen && (
        <MobileMenu onClose={() => setMenuOpen(false)} session={session} />
      )}
    </nav>
  );
}
