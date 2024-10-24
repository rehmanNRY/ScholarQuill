"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-semibold text-gray-800">
              StudyNotesHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/degrees" className="text-gray-600 hover:text-gray-900">
              Degrees
            </Link>
            <Link href="/semesters" className="text-gray-600 hover:text-gray-900">
              Semesters
            </Link>
            <Link href="/subjects" className="text-gray-600 hover:text-gray-900">
              Subjects
            </Link>
            <Link href="/topics" className="text-gray-600 hover:text-gray-900">
              Topics
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex">
            <input
              type="text"
              placeholder="Search notes..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/degrees" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
              Degrees
            </Link>
            <Link href="/semesters" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
              Semesters
            </Link>
            <Link href="/subjects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
              Subjects
            </Link>
            <Link href="/topics" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
              Topics
            </Link>
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          </div>
        </nav>
      )}
    </header>
  );
}
