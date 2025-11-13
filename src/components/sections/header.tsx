"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X, Search } from "lucide-react"
import SearchModal from "../ui/search-modal"

const navItems = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About us", href: "/aboutus", hasDropdown: false },
  {
    name: "Partners",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Universities", href: "/partners/universities" },
      { name: "Governments", href: "/partners/governments" },
      { name: "Industry partners", href: "/partners/industry-partners" },
      { name: "School counsellors", href: "/partners/school-counsellors" },
    ],
  },
  {
    name: "Impact",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "bigPartnership education trust", href: "/impact/navitas-education-trust" },
       { name: "Modern slavery", href: "/impact/modern-slavery" },
      { name: "Climate change", href: "/impact/climate-change" },
     
    ],
  },
  { name: "News", href: "#", hasDropdown: false },
]

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [expandedSubItem, setExpandedSubItem] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50" style={{ fontFamily: 'moderat-reg, sans-serif, Arial, "Helvetica Neue", Helvetica' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between w-full">
            <div className="flex items-center gap-12">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="bigPartnership"
                  width={150}
                  height={38}
                  priority
                />
              </Link>
              <nav>
                <ul className="flex items-center gap-8">
                  {navItems.map((item) => (
                    <li key={item.name} className="group relative">
                      <Link
                        href={item.href}
                        className="flex items-center gap-1.5 text-base font-medium text-gray-900 hover:text-teal-700 transition-colors py-1"
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                        )}
                      </Link>
                      {item.hasDropdown && item.dropdownItems && (
                        <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3">
                          <ul className="space-y-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <li key={dropdownItem.name} className="group/sub relative">
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-teal-700 transition-colors"
                                >
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/apply-to-study"
                className="bg-teal-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-teal-800 transition-colors"
              >
                Apply to study
              </Link>
              <Link
                href="/contact-us"
                className="bg-teal-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-teal-800 transition-colors"
              >
                Contact us
              </Link>
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="p-2 text-gray-600 hover:text-teal-700 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex xl:hidden items-center justify-between w-full">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="bigPartnership"
                width={120}
                height={32}
              />
            </Link>
            <div className="flex items-center">
              <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="p-2 text-gray-700">
                <Search size={22} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 text-gray-700 z-50"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out xl:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="container mx-auto px-6 h-full flex flex-col pt-20">
          <nav className="flex-grow mt-8">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-200">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="flex justify-between items-center w-full py-4 text-gray-800 font-medium text-lg hover:text-teal-700 transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center w-full py-4 text-gray-800 font-medium text-lg hover:text-teal-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.hasDropdown && item.dropdownItems && openDropdown === item.name && (
                    <ul className="pl-4 pb-2 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <Link
                            href={dropdownItem.href}
                            className="block py-3 text-gray-700 font-medium hover:text-teal-700 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="py-6 mt-auto flex flex-col gap-3">
            <Link
              href="/apply-to-study"
              className="w-full text-center bg-teal-700 text-white px-4 py-3 rounded-md font-semibold text-sm hover:bg-teal-800 transition-colors"
            >
              Apply to study
            </Link>
            <Link
              href="/contact-us"
              className="w-full text-center bg-teal-700 text-white px-4 py-3 rounded-md font-semibold text-sm hover:bg-teal-800 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal Component */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
