"use client"

import Image from "next/image"
import Link from "next/link"
import HeaderSection from "../../../components/sections/header"
import Footer from "../../../components/sections/footer"

export default function AustraliaPage() {
  const colleges = [
    { name: "ACAP University College", logo: "/images/logos/acap-logo.jpg", url: "https://www.acap.edu.au/" },
    { name: "Charles Sturt University Sydney and Melbourne", logo: "/images/logos/csu-logo.jpg", url: "https://sydneymelbourne.csu.edu.au/" },
    { name: "Curtin College", logo: "/images/logos/curtin-logo.jpg", url: "https://www.curtincollege.edu.au/" },
    { name: "Deakin College", logo: "/images/logos/deakin-logo.jpg", url: "https://www.deakincollege.edu.au/" },
    { name: "Edith Cowan College", logo: "/images/logos/ecc-logo.jpg", url: "https://www.edithcowancollege.edu.au/" },
    { name: "Eynesbury College", logo: "/images/logos/eynesbury-logo.jpg", url: "https://www.eynesbury.edu.au/" },
    { name: "Griffith College", logo: "/images/logos/griffith-logo.jpg", url: "https://www.griffithcollege.edu.au/" },
    { name: "La Trobe College Australia", logo: "/images/logos/ltca-logo.jpg", url: "https://www.latrobecollegeaustralia.edu.au/" },
  ]

  const englishCenters = [
    { name: "University of South Australia Centre for English Language", logo: "/images/logos/celusa-logo.jpg", url: "https://international.unisa.edu.au/pre-entry-and-pathway-programs/celusa/" },
    { name: "Hawthorn Melbourne", logo: "/images/logos/hawthorn-logo.jpg", url: "https://www.hawthornenglish.edu.au/" },
    { name: "Navitas English", logo: "/images/logos/navitas-english-logo.jpg", url: "https://www.navitasenglish.edu.au/" },
  ]

  const employabilityPrograms = [
    { name: "Navitas Skilled Futures", logo: "/images/logos/nsf-logo.jpg", url: "https://navitas-skilled-futures.com.au/" },
    { name: "Women & Leadership Australia", logo: "/images/logos/wla-logo.jpg", url: "https://www.wla.edu.au/" },
  ]

  return (
    <>
      <HeaderSection />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('/images/countries/australia.jpg')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div className="bg-white rounded-lg p-8 max-w-md">
              <h1 className="text-4xl font-bold text-gray-900">Australia</h1>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/destinations" className="hover:text-teal-700">Destinations</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Australia</span>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Australia?</h2>
              <div className="text-lg text-gray-700 space-y-4">
                <p>With a unique teaching style that encourages students to be innovative and creative, Australia is one of the world's favourite study destinations.</p>
                <p>In Australia, students can choose from university foundation programs, International Year One, direct university entry, English language study and qualifications, employability programs and internship experience, creative media higher education, professional education, and more.</p>
                <p>In order to study in Australia, you will be required to demonstrate that studying in Australia is the primary reason for applying for your student visa. Please check the <strong><Link href="/study/apply/genuine-student" className="text-teal-700 hover:underline">Genuine Student Assessment information</Link></strong> criteria and guidelines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our offerings in Australia</h2>
            
            {/* Earn a qualification */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Earn a qualification</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {colleges.map((college, index) => (
                  <a key={index} href={college.url} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow group">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-xs text-gray-500 text-center">{college.name}</span>
                    </div>
                    <div className="flex justify-end">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Learn English */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Learn English</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {englishCenters.map((center, index) => (
                  <a key={index} href={center.url} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow group">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-xs text-gray-500 text-center">{center.name}</span>
                    </div>
                    <div className="flex justify-end">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Employability training */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Employability training</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {employabilityPrograms.map((program, index) => (
                  <a key={index} href={program.url} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow group">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-xs text-gray-500 text-center">{program.name}</span>
                    </div>
                    <div className="flex justify-end">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-teal-700">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white">Find out more</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses" className="bg-white text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Search courses
                </Link>
                <Link href="/contact-us" className="bg-white text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Contact us
                </Link>
                <Link href="/apply-to-study" className="bg-white text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  Apply today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}