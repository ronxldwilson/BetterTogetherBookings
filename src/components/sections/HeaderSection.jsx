"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-black bg-white  top-0 z-50 md:shadow-sm mb-1" >
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo-horizontal.svg"
              className="h-10"
              alt="Company Logo"
              width={150}
              height={200}
              unoptimized
            />

          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5">
          {/* <Link href="/" className="hover:text-gray-400 py-4">
            Home
          </Link> */}
          <Link href="/" className="hover:text-gray-400 py-4">
            Home
          </Link>
          <Link href="/services/BAY" className="hover:text-gray-400 py-4">
            BAY
          </Link>
          <Link href="/services" className="hover:text-gray-400 py-4">
            Services
          </Link>
          <Link href="/services/events" className="hover:text-gray-400 py-4">
            Events
          </Link>
          <Link href="/blog" className="hover:text-gray-400 py-4">
            Blog
          </Link>
          <Link href="/about" className="hover:text-gray-400 py-4">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-400 py-4">
            Contact Us
          </Link>
          <Link href="/join-community" className="hover:text-gray-400">
            <button className="p-4">Join Community</button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-3"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-white shadow-md">

          <Link href="/" className="block hover:text-gray-400 py-2">
            Home
          </Link>
          <Link href="/about" className="block hover:text-gray-400 py-2">
            About Us
          </Link>
          <Link href="/services/BAY" className="block hover:text-gray-400 py-2">
            BAY
          </Link>
          <Link href="/services" className="block hover:text-gray-400 py-2">
            Services
          </Link>
          <Link href="/services/events" className="block hover:text-gray-400 py-2">
            Events
          </Link>
          <Link href="/blog" className="block hover:text-gray-400 py-2">
            Blog
          </Link>
          <Link href="/contact" className="block hover:text-gray-400 py-2">
            Contact
          </Link>

          <div className="flex justify-between ">
            <div className="bg-custom-red text-white rounded-lg my-[3px] px-1">
              <Link
                href="/join-community"
                className="block  "
              >
                Join Community
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;
