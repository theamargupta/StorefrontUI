"use client";

import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl py-6 flex items-center justify-between mx-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Store</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="text-gray-800 hover:text-gray-600"
              >
                Search
              </Link>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Cart
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-800 hover:text-gray-600"
            onClick={toggleMenu}
          >
            {/* {isOpen ? <SfIconX size="sm" /> : <SfIconHamburger size="sm" />} */}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
