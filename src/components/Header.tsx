import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`bg-white py-4 sticky top-0 z-40 w-full h-[3.8rem] transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl md:text-2xl">
          <span className="text-secondary">Trained</span>ByJas
        </div>
        
        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#results" className="hover:text-secondary transition-colors">Results</a>
          <a href="#process" className="hover:text-secondary transition-colors">Process</a>
          <a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* CTA Button - Desktop */}
        <a 
          href="#booking" 
          className="hidden md:inline-block bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all"
        >
          Book Free Call
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-200 py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4 font-medium">
            <a 
              href="#about" 
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#results" 
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <a 
              href="#process" 
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#booking" 
              className="bg-secondary text-white py-2 px-4 rounded-md text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Free Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
