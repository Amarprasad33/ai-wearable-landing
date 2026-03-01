import Link from "next/link";
import { CoreLogo } from "../icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/4 pt-20 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-20">
          {/* Left: Logo and Description */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6"
              aria-label="Core home"
            >
              <CoreLogo className="w-8 h-8" />
              <span className="text-xl font-semibold text-white tracking-tight">
                Core
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              World&apos;s first AI-wearable built to protect your attention.
              Shield your flow state and achieve in hours what takes others
              days.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
            {/* Pages Column */}
            <div>
              <h4 className="text-white font-medium mb-6">Pages</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="#products"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#resources"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Getting Started Column */}
            <div>
              <h4 className="text-white font-medium mb-6">Getting started</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="#preorder"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Preorder
                  </Link>
                </li>
                <li>
                  <Link
                    href="#account"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="#support"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h4 className="text-white font-medium mb-6">Socials</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider line with gradient effect as per reference */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-(--accent-blue)/30 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            Copyright &copy; {new Date().getFullYear()} Core. All rights
            reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#privacy"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
            >
              Terms of services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
