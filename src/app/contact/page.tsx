import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Contact us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ipsum est urna tellus varius risus a vitae tempor rhoncus vitae neque massa eu mi velit elementum enim ad minim veniam quis nostrud exercitation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="(123) 456-7890" />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-gray-700 font-medium mb-2">Inquiry</label>
                <select id="inquiry" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>General</option>
                  <option>Tax Planning</option>
                  <option>Audit Services</option>
                  <option>Bookkeeping</option>
                  <option>Consulting</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How can we help you?" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Send message
              </button>
            </form>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow us on</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  {/* Facebook */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  {/* Instagram */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  {/* LinkedIn */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  {/* YouTube */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* More Contact Info */}
          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More contact information</h2>
            <p className="text-gray-600 mb-8">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum nisi ut aliquip ex ea commodo.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-blue-600 font-bold mb-2">Give us a call</div>
                <div className="text-gray-900 font-semibold text-lg mb-1">(253) 456 - 1189</div>
                <div className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
              </div>
              <div>
                <div className="text-blue-600 font-bold mb-2">Send us an email</div>
                <div className="text-gray-900 font-semibold text-lg mb-1">contact@accountant.com</div>
                <div className="text-gray-500 text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              </div>
              <div>
                <div className="text-blue-600 font-bold mb-2">Live chat with us</div>
                <div className="text-gray-900 font-semibold text-lg mb-1">Chat now</div>
                <div className="text-gray-500 text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              </div>
            </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur viverra egestas aliquam risus ut blandit mattis praesent nunc interdum massa id tristique purus molestie laoreet morbi volutpat  hendrerit ut.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                Do you offer any type of discount or promotion?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur viverra egestas aliquam risus ut blandit mattis praesent nunc interdum massa id tristique purus molestie laoreet morbi volutpat  hendrerit ut.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                How do they structure fees for services?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur viverra egestas aliquam risus ut blandit mattis praesent nunc interdum massa id tristique purus molestie laoreet morbi volutpat  hendrerit ut.
              </div>
            </details>
            <details className="group bg-white border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
                Do you offer financial consulting services?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur viverra egestas aliquam risus ut blandit mattis praesent nunc interdum massa id tristique purus molestie laoreet morbi volutpat  hendrerit ut.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Visit our offices
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Los Angeles Office */}
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Los Angeles, CA</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur siter adipisci elit, sed do eiusmod tempor</p>
              <div className="mb-2 text-blue-600 font-semibold">losangeles@accountant.com</div>
              <div className="mb-2 text-gray-900 font-semibold">(310) 645-8321</div>
              <div className="text-gray-500">5960 W 85th Pl Los Angeles, California (CA)</div>
            </div>
            {/* New York Office */}
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">New York, NY</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur siter adipisci elit, sed do eiusmod tempor</p>
              <div className="mb-2 text-blue-600 font-semibold">newyork@accountant.com</div>
              <div className="mb-2 text-gray-900 font-semibold">(718) 470-2881</div>
              <div className="text-gray-500">03 204th St. Hollis, New York (NY)</div>
            </div>
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
