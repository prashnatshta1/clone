"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"

const searchableContent = [
  {
    title: "Apply to study",
    description: "How to apply to study at bigPartnership colleges or campus",
    url: "/apply-to-study",
  },
  {
    title: "Contact us",
    description: "Contact bigPartnership for inquiries and support",
    url: "/contact-us",
  },
  {
    title: "Careers at bigPartnership",
    description: "Join our team and search for job opportunities",
    url: "#",
  },
  {
    title: "What we do",
    description: "Learn about bigPartnership's mission and services",
    url: "#",
  },
  {
    title: "History",
    description: "Explore the history of bigPartnership",
    url: "#",
  },
  {
    title: "Vision and values",
    description: "Discover our vision and core values",
    url: "#",
  },
  {
    title: "The stories that made us",
    description: "Read inspiring stories from our community",
    url: "#",
  },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([])
  const [error, setError] = useState("")

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("")
      setSearchResults([])
      setError("")
    }
  }, [isOpen])

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setError("Please enter a keyword.")
      setSearchResults([])
      return
    }

    setError("")
    const query = searchQuery.toLowerCase()
    const results = searchableContent.filter(
      (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
    )
    setSearchResults(results)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-32 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-auto px-4 z-50">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Search Input Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setError("")
                }}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent text-base"
                autoFocus
              />
              <button
                onClick={handleSearch}
                className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </button>
              <button onClick={onClose} className="p-3 text-gray-500 hover:text-gray-700 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
          </div>

          {/* Results Section */}
          {searchResults.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              <ul className="divide-y divide-gray-200">
                {searchResults.map((result, index) => (
                  <li key={index}>
                    <a href={result.url} onClick={onClose} className="block p-4 hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold text-gray-900 text-sm">{result.title}</h3>
                      <p className="text-gray-600 text-xs mt-1">{result.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No Results */}
          {searchQuery && searchResults.length === 0 && !error && (
            <div className="p-6 text-center">
              <p className="text-gray-500">No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
