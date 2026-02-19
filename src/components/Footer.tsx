import Link from "next/link";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy overflow-hidden p-1.5"></div>
              <span className="text-xl font-semibold text-slate-800">
                Taxplus Accountants
              </span>
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
                    John St, Lagavooren, Drogheda, Co. Louth, A92 D253, Ireland
                  </Link>
                </span>
              </div>
            </address>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-16">
            <nav aria-label="Services navigation">
              <h2 className="text-sm font-medium text-slate-800">Services</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/bookkeeping-services"
                  >
                    Bookkeeping Services
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
                    href="/personal-tax-advisor"
                  >
                    Personal Tax Advisor
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/expat-tax-advisor"
                  >
                    Expat Tax Advisor
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Company formation navigation">
              <h2 className="text-sm font-medium text-slate-800">
                Start a Business
              </h2>
              <ul className="mt-4 space-y-3">
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
                    href="/register-business-name"
                  >
                    Register Business Name
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/close-a-company"
                  >
                    Close a Company
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/company-strike-off"
                  >
                    Company Strike-Off
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-slate-600 hover:text-amber-500 transition-colors"
                    href="/liquidate-limited-company"
                  >
                    Company Liquidation
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
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Member: Chartered Accountants Ireland</span>
            <span aria-hidden="true">•</span>
            <span>Revenue Authorised Agent</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
