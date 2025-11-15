'use client'

import { DollarSign, Brain, Building2, ArrowRight, ChevronRight } from 'lucide-react'
import HeaderSection from '@/src/components/sections/header'
import Footer from '@/src/components/sections/footer'

export default function Home() {
  const stats = [
    {
      icon: DollarSign,
      value: 'AUD 3.5 million',
      description: 'in philanthropic grants',
    },
    {
      icon: Brain,
      value: '95%',
      description: 'of our campuses offer student mental health support',
    },
    {
      icon: Building2,
      value: '89%',
      description: 'of our campuses have fully accessible buildings',
    },
  ]

  const stories = [
    {
      id: 1,
      name: 'Jimmy Pham AM',
      category: 'NET Partner',
      image: 'images/impact/Jimmy-Pham-2.jpg',
    },
    {
      id: 2,
      name: 'Duncan Ward and Nicola Courtin',
      category: 'NET Partner',
      image: 'images/impact/nicola-courtin.jpg',
    },
    {
      id: 3,
      name: 'Georgie Kershaw',
      category: 'NET Partner',
      image: 'images/impact/georgie-kershaw.jpg',
    },
  ]

  const news = [
    {
      id: 1,
      title: 'A year of partnership: stories from our five NET partners in FY25',
      image: 'images/impact/net-update.jpg',
    },
    {
      id: 2,
      title: 'Empowering the next generation in Vietnam: hospitality training with KOTO',
      image: 'images/impact/navitas-news.jpg',
    },
    {
      id: 3,
      title: 'Green Apple – our eMagazine for bigPartnership educators – issue #14 is now live!',
      image: 'images/impact/Green-Apple-launch.jpg',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <HeaderSection />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(images/impact/hands-holding-world.jpg)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Impact
              </h1>
              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                Our approach to Environment, Social, and Governance (ESG) as an educator, an employer, and a global citizen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our sustainable impact on education, community, people, and culture
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At bigPartnership, we're thinking a lot about impact. The impact we have on our people, our students, and our partners. As an educator, an employer, and a global citizen, we want to operate in a way that positively impacts current generations – without compromise for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-emerald-100 rounded-full">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {stat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our impact
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We are committed to being part of the solution to some of the world's most serious challenges.
                </p>
                <p>
                  Our approach to managing our impact aligns with the <strong>United Nations Sustainable Development Goals (SDGs)</strong>.
                </p>
                <p>
                  <a href="#" className="text-emerald-600 hover:underline font-medium">
                    Read more about each of our 12 Impact priority areas.
                  </a>
                </p>
              </div>
              <button className="mt-8 px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors inline-block">
                View Priority Areas
              </button>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/859213891?rel=0"
                  title="Impact Overview Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Trust Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                bigPartnership Education Trust
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The bigPartnership Education Trust (NET) supports development organisations with an education focus to bring about positive change for school communities all over the world.
              </p>
              <button className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors inline-block">
                Learn more
              </button>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/649784039?rel=0"
                  title="bigPartnership Education Trust video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconciliation Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Truth and Reconciliation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to developing a workplace and enriching our learning communities through prioritising diversity, equity and inclusion. We value the contributions of First Nations colleagues and friends who provide insights and knowledge based on their own lived experiences and those experiences of generations that came before them.
              </p>
              <p className="text-sm text-gray-500 italic mb-8">
                Artwork by Whadjuk, Ballardong and Yamatji Aboriginal woman Marcia McGuire
              </p>
              <button className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition">
                Read our Reconciliation Action Plan
              </button>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/impact/truth.jpg"
                alt="Reconciliation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Awards Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="images/impact/impact.jpg"
                alt="Impact Awards"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The bigPartnership Impact Awards
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The bigPartnership Impact Awards recognise and celebrate ESG-related initiatives creating positive change across the international education sector and will give organisations the chance to share the work they are doing on a global stage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an organisation, our goal is to strive to better understand, measure, and improve the impact we create in our changing world. A large part of our impact journey is recognising the incredible work that many of our partners perform day-to-day, already leading the way in the realm of environment and social governance and making a positive difference in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            The stories that made us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <a
                key={story.id}
                href="#"
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-6 h-72 md:h-96">
                  <img
                    src={story.image || "/placeholder.svg?height=400&width=300&query=person-profile"}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                    {story.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition line-clamp-2">
                  {story.name}
                </h3>
                <div className="flex items-center text-emerald-600 group-hover:translate-x-2 transition">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Latest Impact news
            </h2>
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1 group">
              More News <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article) => (
              <a
                key={article.id}
                href="#"
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="overflow-hidden h-56 relative">
                  <img
                    src={article.image || "/placeholder.svg?height=300&width=400&query=news-article"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                </div>
                <div className="p-6">
                  <p className="font-semibold text-gray-900 group-hover:text-emerald-600 transition line-clamp-3 text-base">
                    {article.title}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
