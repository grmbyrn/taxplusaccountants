"use client";

import Link from "next/link";
import { useState as useModalState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import { X, Phone } from "lucide-react";
import Nav from "./Nav";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [navTop, setNavTop] = useState<number | undefined>(undefined);

  // keep navTop updated (viewport pixels) so the mobile dropdown can stay positioned
  // even while transitioning closed — prevents the "jump to top" flicker.
  useLayoutEffect(() => {
    const updateNavTop = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        // rect.bottom is viewport px — use this for a fixed-position dropdown
        setNavTop(rect.bottom);
      }
    };

    updateNavTop();
    window.addEventListener("resize", updateNavTop);
    // update on scroll in case the header moves (optional but keeps position correct)
    window.addEventListener("scroll", updateNavTop, { passive: true });

    return () => {
      window.removeEventListener("resize", updateNavTop);
      window.removeEventListener("scroll", updateNavTop);
    };
  }, []);

  // Modal state for ContactForm
  const [isContactModalOpen, setContactModalOpen] = useModalState(false);
  const Modal = dynamic(() => import("./ui/modal"), { ssr: false });
  const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

  return (
    <header
      ref={headerRef}
      className={`w-full z-50 max-w-7xl mx-auto px-4${isContactModalOpen ? " pointer-events-none select-none" : ""}`}
    >
      {/* Contact Modal */}
      {isContactModalOpen && (
        <Modal
          open={isContactModalOpen}
          onClose={() => setContactModalOpen(false)}
        >
          <ContactForm />
        </Modal>
      )}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">
            <Image
              src="/images/taxplus-accountants-logo.png"
              alt="Taxplus Accountants Logo"
              width={250}
              height={250}
              loading="eager"
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setContactModalOpen(true)}
            className="focus:outline-none p-2 rounded-full bg-amber-500 hover:bg-amber-600"
            aria-label="Contact"
          >
            <Phone className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="focus:outline-none p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <Nav
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          isServicesOpen={isServicesOpen}
          setServicesOpen={setServicesOpen}
          isContactModalOpen={isContactModalOpen}
          setContactModalOpen={setContactModalOpen}
          navTop={navTop}
        />
      </div>
    </header>
  );
};

export default Header;
