"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/ui/modal";
import ContactForm from "@/components/ContactForm";

const ContactUsFloatingButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-6 right-6 z-40 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all animate-fadeIn"
          onClick={() => setOpen(true)}
        >
          Contact Us
        </button>
      )}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default ContactUsFloatingButton;
