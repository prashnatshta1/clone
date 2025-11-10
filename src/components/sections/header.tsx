"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Search } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "Study", href: "#", hasDropdown: true },
  { name: "About us", href: "#", hasDropdown: true },
  { name: "Partners", href: "#", hasDropdown: true },
  { name: "Impact", href: "#", hasDropdown: true },
  { name: "News", href: "#", hasDropdown: false },
];

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">
          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between w-full">
            <div className="flex items-center gap-10">
              <Link href="/">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/navitas-logo-1.svg"
                  alt="Navitas Corporate"
                  width={150}
                  height={38}
                  priority
                />
              </Link>
              <nav>
                <ul className="flex items-center gap-8">
                  {navItems.map((item) => (
                    <li key={item.name} className="group relative">
                      <a href={item.href} className="flex items-center gap-1.5 text-base font-medium text-gray-700 hover:text-[#008B8B] transition-colors">
                        {item.name}
                        {item.hasDropdown && <ChevronDown size={16} />}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="bg-[#008B8B] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-colors">Apply to study</a>
              <a href="#" className="bg-[#008B8B] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-colors">Contact us</a>
              <button aria-label="Search" className="p-2 text-gray-600 hover:text-[#008B8B] transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex xl:hidden items-center justify-between w-full">
            <Link href="/">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/navitas-logo-1.svg"
                alt="Navitas Corporate"
                width={120}
                height={32}
              />
            </Link>
            <div className="flex items-center">
              <button aria-label="Search" className="p-2 text-gray-700">
                <Search size={22} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2 text-gray-700 z-50">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 left-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out xl:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="container mx-auto px-6 h-full flex flex-col pt-[80px]">
          <nav className="flex-grow mt-8">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-200">
                  <a href={item.href} className="flex justify-between items-center py-4 text-gray-800 font-medium text-lg">
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={20} />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="py-6 mt-auto flex flex-col gap-4">
            <a href="#" className="w-full text-center bg-[#008B8B] text-white px-4 py-3 rounded-md font-semibold text-sm">Apply to study</a>
            <a href="#" className="w-full text-center bg-[#008B8B] text-white px-4 py-3 rounded-md font-semibold text-sm">Contact us</a>
          </div>
        </div>
      </div>
    </header>
  );
}