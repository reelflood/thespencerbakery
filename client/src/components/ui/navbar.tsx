import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Visit Us", href: "#visit" },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="font-serif text-2xl font-bold tracking-tight text-primary hover:text-primary/90 transition-colors">
            The Spence Bakery
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-lg"
        >
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left text-lg font-medium text-foreground py-2"
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
