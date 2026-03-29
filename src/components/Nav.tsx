"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavProps = {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isServicesOpen: boolean;
  setServicesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContactModalOpen: boolean;
  setContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navTop?: number;
};

export default function Nav({
  isMenuOpen,
  setMenuOpen,
  isServicesOpen,
  setServicesOpen,
  isContactModalOpen,
  setContactModalOpen,
  navTop,
}: NavProps) {
  return (
    <nav
      className={`fixed md:static left-0 w-full md:w-auto bg-background md:bg-transparent shadow-md md:shadow-none z-50 transition-all duration-300
            ${isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"}
            md:opacity-100 md:pointer-events-auto md:translate-y-0 md:flex${isContactModalOpen ? " pointer-events-none select-none" : ""}`}
      style={
        navTop !== undefined
          ? ({
              willChange: "transform, opacity",
              top: navTop,
            } as CSSProperties)
          : undefined
      }
    >
      <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 items-center">
        <li>
          <Link
            href="/#about"
            className={`block py-2 text-gray-700 font-medium${!isContactModalOpen ? " hover:text-gray-900" : ""}`}
            onClick={() => setMenuOpen(false)}
            tabIndex={isContactModalOpen ? -1 : 0}
            aria-disabled={isContactModalOpen}
          >
            About
          </Link>
        </li>
        <li className="relative">
          <button
            type="button"
            className={`flex items-center gap-1 py-2 text-gray-700 font-medium focus:outline-none${!isContactModalOpen ? " hover:text-gray-900" : ""}`}
            onClick={() => setServicesOpen((open) => !open)}
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
            tabIndex={isContactModalOpen ? -1 : 0}
            aria-disabled={isContactModalOpen}
            disabled={isContactModalOpen}
          >
            Services
            {isServicesOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          <AnimatePresence>
            {isServicesOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-slate-200 z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <li>
                  <Link
                    href="/services/bookkeeping-and-accounts"
                    className={`block px-4 py-2 text-gray-700${!isContactModalOpen ? " hover:bg-amber-50 hover:text-amber-600" : ""}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                    tabIndex={isContactModalOpen ? -1 : 0}
                    aria-disabled={isContactModalOpen}
                  >
                    Bookkeeping & Accounts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tax-returns"
                    className={`block px-4 py-2 text-gray-700${!isContactModalOpen ? " hover:bg-amber-50 hover:text-amber-600" : ""}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                    tabIndex={isContactModalOpen ? -1 : 0}
                    aria-disabled={isContactModalOpen}
                  >
                    Tax Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/company-formation"
                    className={`block px-4 py-2 text-gray-700${!isContactModalOpen ? " hover:bg-amber-50 hover:text-amber-600" : ""}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                    tabIndex={isContactModalOpen ? -1 : 0}
                    aria-disabled={isContactModalOpen}
                  >
                    Company Formation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/register-business-name"
                    className={`block px-4 py-2 text-gray-700${!isContactModalOpen ? " hover:bg-amber-50 hover:text-amber-600" : ""}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                    tabIndex={isContactModalOpen ? -1 : 0}
                    aria-disabled={isContactModalOpen}
                  >
                    Register Business Name
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/close-a-company"
                    className={`block px-4 py-2 text-gray-700${!isContactModalOpen ? " hover:bg-amber-50 hover:text-amber-600" : ""}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                    tabIndex={isContactModalOpen ? -1 : 0}
                    aria-disabled={isContactModalOpen}
                  >
                    Close a Company
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li>
          <Link
            href="/resources"
            className={`block py-2 text-gray-700 font-medium${!isContactModalOpen ? " hover:text-gray-900" : ""}`}
            onClick={() => setMenuOpen(false)}
            tabIndex={isContactModalOpen ? -1 : 0}
            aria-disabled={isContactModalOpen}
          >
            Resources
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`block py-2 text-gray-700 font-medium${!isContactModalOpen ? " hover:text-gray-900" : ""}`}
            onClick={() => setMenuOpen(false)}
            tabIndex={isContactModalOpen ? -1 : 0}
            aria-disabled={isContactModalOpen}
          >
            Blog
          </Link>
        </li>
        <li>
          <button
            type="button"
            className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full bg-amber-500 text-navy px-8 py-3 text-base shadow-lg transition-colors${!isContactModalOpen ? " hover:bg-amber-600" : ""} disabled:pointer-events-none disabled:opacity-50`}
            onClick={() => {
              setMenuOpen(false);
              setContactModalOpen(true);
            }}
            tabIndex={isContactModalOpen ? -1 : 0}
            aria-disabled={isContactModalOpen}
            disabled={isContactModalOpen}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
