export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-gray-900">Tax Plus Accountants</a>
            <div className="flex items-center gap-8">
              <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition">
                Contact us
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Expert accounting for better businesses
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-blue-700 transition">
                  Contact us
                </button>
                <button className="bg-white text-gray-900 px-8 py-3.5 rounded-md font-semibold border-2 border-gray-200 hover:border-gray-300 transition">
                  Browse all services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl aspect-square"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Experts Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[4/3]"></div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trusted experts in accountancy services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper leo lorem urna lectus nodoaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullasint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All-in-one Services Section */}
      <section id="services" className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              All-in-one accounting services
            </h2>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                Contact us
              </button>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold border-2 border-gray-200 hover:border-gray-300 transition">
                Browse all services
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="#" className="group block bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tax planning</h3>
              <p className="text-gray-600 mb-4">Expert tax planning strategies to minimize your tax burden and maximize savings.</p>
              <span className="text-blue-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn more 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#" className="group block bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Audit services</h3>
              <p className="text-gray-600 mb-4">Comprehensive audit services to ensure accuracy and compliance with regulations.</p>
              <span className="text-blue-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn more 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#" className="group block bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial consulting</h3>
              <p className="text-gray-600 mb-4">Strategic financial advice to help your business grow and achieve its goals.</p>
              <span className="text-blue-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn more 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Best Option Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                We&apos;re the best option for your finances
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated accounting team</h3>
                    <p className="text-gray-600">Excepteur sint occaecat cupidatat non proiden offici.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Filing and compliance</h3>
                    <p className="text-gray-600">Duis aute irure dolor amet reprehenderit in voluptate.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited bookkeeping</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl aspect-[4/3]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impactful Numbers Section */}
      <section className="bg-blue-600 py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                We have impactful numbers
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3.5 rounded-md font-semibold hover:bg-blue-50 transition">
                Contact us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-white">
                <div className="text-5xl font-bold mb-2">10K</div>
                <div className="text-blue-100">Happy clients</div>
              </div>
              <div className="text-white">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Team members</div>
              </div>
              <div className="text-white col-span-2">
                <div className="text-5xl font-bold mb-2">97%</div>
                <div className="text-blue-100">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our successful case studies
            </h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700 hidden md:flex items-center gap-2">
              Browse case studies
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <div className="bg-gray-100 rounded-xl aspect-video mb-6"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-200 w-12 h-12 rounded-lg"></div>
                <span className="font-semibold text-gray-900">Venture</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                How we helped Venture save 10 million dollars
              </h3>
              <p className="text-gray-600">
                Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl aspect-[4/3] lg:aspect-auto"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 text-lg">
              Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper leo lorem urna lectus nunc integer duis.
            </p>
          </div>
          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                What specific services do you offer to help businesses?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                Do you offer any type of discount or promotion?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                How do they structure fees for services?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                Do you offer financial consulting services?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.
              </div>
            </details>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-blue-700 transition">
              Contact us
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Take a look at our news and articles
            </h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700 hidden md:flex items-center gap-2">
              Browse all posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="#" className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 aspect-[4/3]"></div>
              <div className="p-6">
                <div className="flex gap-3 text-sm text-gray-500 mb-3">
                  <span>Business</span>
                  <span>•</span>
                  <span>Feb 8, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  Introduction to accounting: basics for beginners
                </h3>
              </div>
            </a>
            <a href="#" className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 aspect-[4/3]"></div>
              <div className="p-6">
                <div className="flex gap-3 text-sm text-gray-500 mb-3">
                  <span>Finance</span>
                  <span>•</span>
                  <span>Feb 8, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  Updates to accounting standards for 2025
                </h3>
              </div>
            </a>
            <a href="#" className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 aspect-[4/3]"></div>
              <div className="p-6">
                <div className="flex gap-3 text-sm text-gray-500 mb-3">
                  <span>Management</span>
                  <span>•</span>
                  <span>Feb 8, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  How to optimize your company&apos;s tax management
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your financial future is just a click away. Know us!
          </h2>
          <button className="bg-white text-blue-600 px-8 py-3.5 rounded-md font-semibold hover:bg-blue-50 transition text-lg">
            Contact us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold mb-4">Tax Plus Accountants</div>
              <p className="text-gray-400">Professional accounting services for your business</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/#services" className="hover:text-white transition">Services</a></li>
                <li><a href="/#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Tax Planning</a></li>
                <li><a href="#" className="hover:text-white transition">Audit Services</a></li>
                <li><a href="#" className="hover:text-white transition">Bookkeeping</a></li>
                <li><a href="#" className="hover:text-white transition">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>Copyright © 2026 Tax Plus Accountants | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
