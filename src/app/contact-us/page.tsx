import HeaderSection from "@/src/components/sections/header"
import Footer from "@/src/components/sections/footer"
import Link from "next/link"

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSection />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.navitas.com/wp-content/uploads/2023/07/student-library-laptop-1600x500-1.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-5xl font-bold text-white">Contact us</h1>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-6">
          <nav aria-label="Breadcrumb" className="flex gap-2 text-sm">
            <Link href="/" className="underline text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <span className="text-gray-600">&gt;</span>
            <Link href="#" className="underline text-gray-900 hover:text-gray-600">
              About us
            </Link>
            <span className="text-gray-600">&gt;</span>
            <span className="text-gray-900">Contact us</span>
          </nav>
        </div>

        {/* Contact Info & Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-3">We want to hear from you!</h2>
                <p className="text-gray-700">
                  Have you got a question about studying with one of our bigPartnership colleges or campuses, or are you
                  interested in partnering with us? Please submit a form, and a bigPartnership team member will get back
                  to you as soon as we can.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    All fields marked with <span className="text-red-500">*</span> are required.
                  </p>
                </div>

                <div>
                  <label htmlFor="iam" className="block text-sm font-semibold text-gray-900 mb-2">
                    I am a/an <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="iam"
                    name="iam"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select...</option>
                    <option value="student">Student</option>
                    <option value="agent">Education Agent</option>
                    <option value="parent">Parent</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-900 mb-2">
                    Telephone Country Code <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select...</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+64">New Zealand (+64)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold text-gray-900 mb-2">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="questions" className="block text-sm font-semibold text-gray-900 mb-2">
                    Questions
                  </label>
                  <textarea
                    id="questions"
                    name="questions"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <div>
                  <p className="text-sm text-gray-700 mb-4">
                    If you submit an enquiry/application to bigPartnership, we will provide you with information
                    relating to your enquiry/application via email or telephone. This will include information that
                    relates directly to your enquiry and/or application (for an applicant this will include applicant
                    events and webinars, acceptance or deferral guidance, admission information, accommodation process,
                    pre-arrival support).
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Marketing Preferences</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    If you agree below, we will contact you with applicable information regarding discounts/offers,
                    additional services and wider product information from bigPartnership and our global network of
                    colleges and university partners.
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    You can update your communication preferences at any time by clicking the footer in any of our
                    emails, or via the preference centre which can be accessed by going to My Account.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-700 mb-4">
                    Please indicate if you would like to receive marketing communications:
                  </p>
                  <div className="flex gap-8">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="marketing" value="yes" defaultChecked className="rounded-full" />
                      <span className="text-sm text-gray-900">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="marketing" value="no" className="rounded-full" />
                      <span className="text-sm text-gray-900">No</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <input type="checkbox" id="privacy" required className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-gray-700">
                    By submitting my details through this form, I agree to bigPartnership{" "}
                    <a href="#" className="underline text-gray-900 hover:text-gray-600">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors text-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
