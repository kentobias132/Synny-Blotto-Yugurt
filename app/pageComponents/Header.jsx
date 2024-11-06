"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

function Header() {
  const [isMenuOPen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed font-fira top-0 left-0 right-0 bg-gradient-to-br from-rose-50 to-white/80 backdrop-blur-sm z-50 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-shadow-default text-2xl font-semibold">
            Synny Blotto
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-500 font-medium"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-red-500 font-medium"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-red-500 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-red-500 font-medium"
            >
              FAQ
            </Link>
            <button className="bg-red-500 p-1 rounded-md text-white">
              <Search size={20} />
            </button>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOPen)}
          >
            {isMenuOPen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOPen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-bold"
              >
                Shop
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-bold"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-bold"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-bold"
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
