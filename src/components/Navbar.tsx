
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-brand-950/90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-brand-950 dark:text-white group">
          Portfolio<span className="text-brand-500 group-hover:animate-pulse-slow">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="animated-link text-brand-950 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <Link to="/resume">
            <Button className="bg-brand-500 hover:bg-brand-600 text-white glow">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-brand-950 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white dark:bg-brand-950 z-40 md:hidden">
          <div className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-brand-950 dark:text-white hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link to="/resume" onClick={() => setIsOpen(false)}>
              <Button className="bg-brand-500 hover:bg-brand-600 text-white glow">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
