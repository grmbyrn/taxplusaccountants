import Link from "next/link";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="border-t border-slate-200 py-16 bg-background"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-[1400px] px-2.5 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="lg:max-w-xs">
            <Link
              className="flex items-center gap-3"
              aria-label="Taxplus Accountants - Home"
              href="/"
            >
              <div className="text-2xl font-bold text-gray-800">
                  <Image
                    src="/images/taxplus-accountants-logo.png"
                    alt="Taxplus Accountants Logo"
                    width={250}
                    height={250}
                    loading="eager"
                    style={{ width: 'auto' }}
                  />
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate-600">
              Professional bookkeeping and accounting services for Irish
              businesses.
            </p>
            <address className="mt-6 space-y-2 not-italic">
              <a
                href="tel:+353894491693"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-500 transition-colors"
                aria-label="Call us at 041-9844525"
              >
                <Phone />
                041-9844525
              </a>
              <a
                href="tel:+353894491515"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-500 transition-colors"
                aria-label="Call us at 041-9844515"
              >
                <Phone />
                041-9844515
              </a>
              <a
                href="mailto:info@taxplusaccountants.ie"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-500 transition-colors"
                aria-label="Email us at info@taxplusaccountants.ie"
              >
                <Mail />
                info@taxplusaccountants.ie
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-500 transition-colors">
                <MapPin />
                <span>
                  <Link
                    href="https://maps.app.goo.gl/xc6PSMC9kpdAeBRq5"
                    target="_blank"
                  >
                    Bridge House,
                    John St,
                    Drogheda,
                    Co. Louth
                  </Link>
                </span>
              </div>
            </address>
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-800 mb-2">Opening Hours</p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>Monday – Friday: 9am – 6pm</li>
                <li>Saturday & Sunday: By appointment</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            <nav aria-label="Services navigation">
              <h2 className="text-sm font-medium text-slate-800">Services</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/bookkeeping-and-accounts"
                  >
                    Bookkeeping & Accounts
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/tax-services"
                  >
                    Tax Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/tax-returns"
                  >
                    Tax Returns
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/company-formation"
                  >
                    Company Formation
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/services/register-business-name"
                  >
                    Register Business Name
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/services/company-closure"
                  >
                    Close a Company
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/services/payroll-preparation"
                  >
                    Payroll Preparation
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Company navigation">
              <h2 className="text-sm font-medium text-slate-800">Company</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/#about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/blog"
                  >
                    Blog &amp; Guides
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/#testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/#faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/#contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Policies navigation">
              <h2 className="text-sm font-medium text-slate-800">Policies</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Taxplus Accountants. All rights reserved. Registered in Ireland.
          </p>
          <Link href="https://graemebyrne.com" target="_blank" className="text-amber-600 hover:underline">
            Site by Graeme Byrne
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
