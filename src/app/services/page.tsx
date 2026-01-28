import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt lorem ipsum dolor sit amet
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Service Card */}
            <a href="#" className="group block bg-white rounded-xl p-10 shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
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
            <a href="#" className="group block bg-white rounded-xl p-10 shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
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
            <a href="#" className="group block bg-white rounded-xl p-10 shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
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
            <a href="#" className="group block bg-white rounded-xl p-10 shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="bg-blue-50 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Payroll processing</h3>
              <p className="text-gray-600 mb-4">Accurate and timely payroll processing for your business and employees.</p>
              <span className="text-blue-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#" className="group block bg-white rounded-xl p-10 shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="bg-blue-50 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tax preparation</h3>
              <p className="text-gray-600 mb-4">Comprehensive tax preparation services for individuals and businesses.</p>
              <span className="text-blue-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#" className="group block bg-white rounded-xl p-10 shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="bg-blue-50 w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Bookkeeping</h3>
              <p className="text-gray-600 mb-4">Professional bookkeeping services to keep your financial records accurate and up-to-date.</p>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your financial future is just a click away. Know us!
          </h2>
          <button className="bg-white text-blue-600 px-8 py-3.5 rounded-md font-semibold hover:bg-blue-50 transition text-lg">
            Contact us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
