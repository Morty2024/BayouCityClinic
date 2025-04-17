import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-2 px-6 bg-beige dark:bg-gray-800 transition-colors duration-300 relative">
      <div className="flex items-center">
        <Link href="/" aria-label="Bayou City Clinic - Home">
          <div className="flex items-center transition-transform duration-300 hover:scale-105">
            <Image 
              src="/Logo/Bayou City Clinic Logo Transperent Background.png" 
              alt="Bayou City Clinic Logo" 
              width={180} 
              height={180}
              priority
              className="transition-opacity duration-500"
              style={{ opacity: 1 }}
              onLoadingComplete={(img) => {
                img.style.opacity = "1";
              }}
            />
          </div>
        </Link>
      </div>
      
      <div className="flex items-center space-x-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={`${isActive('/') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 relative group`}>
            Home
            <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/services" className={`${isActive('/services') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 relative group`}>
            Services
            <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/about" className={`${isActive('/about') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 relative group`}>
            About Us
            <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/appointments" className={`${isActive('/appointments') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 relative group`}>
            Appointments
            <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${isActive('/appointments') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/contact" className={`${isActive('/contact') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 relative group`}>
            Contact
            <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>
        
        {/* Theme Toggle Button */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
        
        {/* Desktop Phone Button */}
        <div className="hidden md:block">
          <a href="tel:+17135550194" className="bg-[#3f775e] text-white px-4 py-2 rounded-full hover:bg-[#4c8f73] transition-colors duration-300 transform hover:scale-105">
            (713) 555-0194
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-dark-blue dark:text-gray-200 transition-colors duration-300 hover:text-green-600"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-beige dark:bg-gray-800 shadow-lg z-50 py-6 px-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-2 border-b border-gray-200 dark:border-gray-700`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`${isActive('/services') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-2 border-b border-gray-200 dark:border-gray-700`}
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-2 border-b border-gray-200 dark:border-gray-700`}
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link 
              href="/appointments" 
              className={`${isActive('/appointments') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-2 border-b border-gray-200 dark:border-gray-700`}
              onClick={toggleMobileMenu}
            >
              Appointments
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-2 border-b border-gray-200 dark:border-gray-700`}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            
            {/* Mobile Phone Button */}
            <a 
              href="tel:+17135550194" 
              className="bg-[#3f775e] text-white px-4 py-3 rounded-full hover:bg-[#4c8f73] transition-colors duration-300 text-center mt-2"
              onClick={toggleMobileMenu}
            >
              (713) 555-0194
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 