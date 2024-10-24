"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-1">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/sticky-note-3d-icon-download-in-png-blend-fbx-gltf-file-formats--writing-drafting-paper-notes-business-pack-icons-5230855.png?f=webp" alt="logo" className="w-10" />
              <Link href="/" className="text-2xl font-semibold text-gray-800">
                <span className="font-bold">Scholar</span>Quill
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative space-x-2 ml-16">
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="gray" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>            </span>
              <input
                type="text"
                placeholder="Search notes..."
                className="px-4 py-1.5 pl-10 w-96 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300 border border-gray-200"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/degrees" className="text-gray-700 hover:text-orange-600">
              Degrees
            </Link>
            <Link href="/semesters" className="text-gray-700 hover:text-orange-600">
              Semesters
            </Link>
            <Link href="/subjects" className="text-gray-700 hover:text-orange-600">
              Subjects
            </Link>
            <Link href="/topics" className="text-gray-700 hover:text-orange-600">
              Topics
            </Link>
            <Link href="/topics" className="text-gray-700 hover:text-orange-600">
              Topics
            </Link>
            <button type="button" className="bg-orange-50 text-orange-800 px-5 py-1.5 rounded">Submit</button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-600 focus:outline-none"
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
            <Link href="/degrees" className="block px-3 py-2 text-gray-600 hover:text-orange-600">
              Degrees
            </Link>
            <Link href="/semesters" className="block px-3 py-2 text-gray-600 hover:text-orange-600">
              Semesters
            </Link>
            <Link href="/subjects" className="block px-3 py-2 text-gray-600 hover:text-orange-600">
              Subjects
            </Link>
            <Link href="/topics" className="block px-3 py-2 text-gray-600 hover:text-orange-600">
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
