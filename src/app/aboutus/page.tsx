import HeaderSection from "../../components/sections/header"
import Footer from "../../components/sections/footer"

export default function AboutUsPage() {
  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
      <section className="relative h-[500px] bg-[url('/images/aboutus.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/40">
    <div className="container mx-auto px-4 h-full flex items-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-white">About us</h1>
        <p className="text-lg text-white mt-4">
          Our purpose is transforming lives through education
        </p>
      </div>
    </div>
  </div>
</section>


{/* Leader in global education */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Leader in global education</h2>
                <div className="text-gray-700 mb-6">
                  <p>
                    We are a world-leading international education group offering premium study experiences. We provide
                    life-changing learning opportunities for students at 100+ colleges and campuses across 18 countries
                    around the globe. Students graduating from Navitas colleges experience teaching and learning support
                    that harnesses talents and supports student wellbeing.
                  </p>
                </div>
                <a
                  href="/aboutus"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                >
                  More on what we do
                </a>
              </div>
              <div className="text-center order-1 md:order-2">
                <img
                  src="https://www.navitas.com/wp-content/uploads/2023/07/group-students-campus-340x227-1.jpg"
                  alt="Group of students in campus lunch breakout area"
                  className="rounded-lg border border-gray-300  h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pioneers since 1994 */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
              <div className="text-center">
                <img
                  src="https://www.navitas.com/wp-content/uploads/2023/07/rod-education-fair-340x227-1.jpg"
                  alt="Rod Jones at Western Australia Education fair in 1994"
                  className="rounded-lg border border-gray-300  h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Pioneers since 1994</h2>
                <div className="text-gray-700 mb-6">
                  <p>
                    We developed an innovative university partnership model in 1994 and we've been shaping the landscape
                    of education ever since. From our roots in Perth, Western Australia, we have grown into one of the
                    world's leading education organisations.
                  </p>
                </div>
                <a
                  href="#"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                >
                  More on our history
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Driven by our vision and values */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Driven by our vision and values</h2>
                <div className="text-gray-700 mb-6">
                  <p>
                    Guided by our values, we have a bold vision to be the best education provider in the world for our
                    students, partners and people. Our values inform our vision for the future of international
                    education and lead us every step of the way.
                  </p>
                </div>
                <a
                  href="#"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                >
                  More on our vision and values
                </a>
              </div>
              <div className="text-center order-1 md:order-2">
                <img
                  src="https://www.navitas.com/wp-content/uploads/2023/07/students-talking-campus-square-340x227-1.jpg"
                  alt="Students talking in campus square"
                  className="rounded-lg border border-gray-300  h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Committed to positive impact */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
              <div className="text-center">
                <img
                  src="https://www.navitas.com/wp-content/uploads/2023/07/hands-holding-world-340x227-1.jpg"
                  alt="Planet earth resting in two cradled hands"
                  className="rounded-lg border border-gray-300 h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Committed to positive impact</h2>
                <div className="text-gray-700 mb-6">
                  <p>
                    Our impact extends beyond individual students. We want to reach our people and communities as we
                    balance economic growth, environmental care, and social impact to fulfil the needs of current and
                    future generations.
                  </p>
                </div>
                <a
                  href="/impact"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                >
                  More on our impact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our leadership */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Our leadership</h2>
                <div className="text-gray-700 mb-6">
                  <p>
                    Navitas is a global organisation with a global network of leaders, thinkers, and industry experts.
                    Learn more about our Navitas leaders and hear the stories of our community.
                  </p>
                </div>
                <a
                  href="#"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                >
                  Meet our leadership team
                </a>
              </div>
              <div className="text-center order-1 md:order-2">
                <img
                  src="https://www.navitas.com/wp-content/uploads/2023/07/navitas-ceo-scott-outside-340x227-1.jpg"
                  alt="Scott Jones"
                  className="rounded-lg border border-gray-300  h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
