"use client";

import Link from "next/link";
import { CoreLogo } from "../icons";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="relative w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-4 py-3 z-5 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center" aria-label="Core home">
        <CoreLogo className="w-8 h-8" />
      </Link>

      {/* Nav Links - hidden on mobile */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-zinc-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 shadow-[inset_0px_2px_0px_0px_rgba(236,244,254,0.46)] active:scale-[0.98]"
        style={{
          background:
            "linear-gradient(135deg, var(--accent-blue), var(--accent-blue-light))",
        }}
      >
        Claim Your Core
      </button>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col items-center justify-center gap-1.5 w-8 h-8"
        aria-label="Toggle menu"
      >
        <span className="w-5 h-0.5 bg-white rounded-full" />
        <span className="w-5 h-0.5 bg-white rounded-full" />
        <span className="w-3.5 h-0.5 bg-white rounded-full" />
      </button>
    </nav>
  );
}
