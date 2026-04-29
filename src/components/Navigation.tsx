"use client";

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-600 dark:from-primary-500 dark:to-primary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-600 dark:from-primary-400 dark:to-primary-400 bg-clip-text text-transparent hidden sm:inline">
                Automate
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation Links */}
            <div className="flex gap-1 items-center">
              <a
                href="#features"
                className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                Contact
              </a>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <a href="#contact" className="btn-primary text-sm py-2 px-5">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="pt-4 space-y-1">
              <a
                href="#features"
                className="block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
              >
                Contact
              </a>
              <a href="#contact" className="block mt-4 btn-primary text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
