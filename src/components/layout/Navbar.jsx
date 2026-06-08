import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navLinks } from "../../data/content";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo
            asLink
            variant={scrolled ? "dark" : "light"}
            size="md"
          />

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? scrolled
                        ? "text-secondary"
                        : "text-accent"
                      : scrolled
                        ? "text-primary hover:text-secondary"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Button to="/contact" variant="accent" size="sm">
              Get Started
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-primary hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-secondary/10 text-secondary"
                        : "text-primary hover:bg-slate-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button
                to="/contact"
                variant="accent"
                className="mt-4 w-full"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
