import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = '' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const isActive = (page: string) => currentPage === page;
  const isHomePage = currentPage === 'home' || currentPage === '';

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Vortex</div>
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <button onClick={() => scrollToSection('home')} className="hover:text-yellow-400 transition-colors">Home</button>
            ) : (
              <a href="/" className={`hover:text-yellow-400 transition-colors ${isActive('home') ? 'text-yellow-400' : ''}`}>Home</a>
            )}
            <a href="/about" className={`hover:text-yellow-400 transition-colors ${isActive('about') ? 'text-yellow-400' : ''}`}>About Us</a>
            <a href="/services" className={`hover:text-yellow-400 transition-colors ${isActive('services') ? 'text-yellow-400' : ''}`}>Services</a>
            <a href="/portfolio" className={`hover:text-yellow-400 transition-colors ${isActive('portfolio') ? 'text-yellow-400' : ''}`}>Portfolio</a>
            <a href="/blog" className={`hover:text-yellow-400 transition-colors ${isActive('blog') ? 'text-yellow-400' : ''}`}>Blog</a>
            <a href="/contact" className={`hover:text-yellow-400 transition-colors ${isActive('contact') ? 'text-yellow-400' : ''}`}>Contact</a>
            <a href="/contact" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">Get Started</a>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 mt-4">
              {isHomePage ? (
                <button onClick={() => scrollToSection('home')} className="text-left hover:text-yellow-400 transition-colors">Home</button>
              ) : (
                <a href="/" className={`text-left hover:text-yellow-400 transition-colors ${isActive('home') ? 'text-yellow-400' : ''}`}>Home</a>
              )}
              <a href="/about" className={`text-left hover:text-yellow-400 transition-colors ${isActive('about') ? 'text-yellow-400' : ''}`}>About Us</a>
              <a href="/services" className={`text-left hover:text-yellow-400 transition-colors ${isActive('services') ? 'text-yellow-400' : ''}`}>Services</a>
              <a href="/portfolio" className={`text-left hover:text-yellow-400 transition-colors ${isActive('portfolio') ? 'text-yellow-400' : ''}`}>Portfolio</a>
              <a href="/blog" className={`text-left hover:text-yellow-400 transition-colors ${isActive('blog') ? 'text-yellow-400' : ''}`}>Blog</a>
              <a href="/contact" className={`text-left hover:text-yellow-400 transition-colors ${isActive('contact') ? 'text-yellow-400' : ''}`}>Contact</a>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 w-fit">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
