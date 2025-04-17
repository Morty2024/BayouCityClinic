import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
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
        
        {/* User Menu - Desktop */}
        <div className="hidden md:block relative">
          {user ? (
            <>
              <button 
                onClick={toggleUserMenu}
                className="flex items-center space-x-1 text-dark-blue dark:text-gray-200 hover:text-green-600 transition-colors duration-300"
                aria-label="User menu"
                aria-expanded={userMenuOpen}
              >
                <span className="font-medium">{user.firstName}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${userMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link 
                    href="/dashboard" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link 
              href="/login" 
              className="text-dark-blue dark:text-gray-200 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Log In
            </Link>
          )}
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
        
        {/* Mobile menu button with animation */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="relative z-50 flex items-center justify-center w-10 h-10 text-dark-blue dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col justify-center items-center">
              {/* Animated hamburger icon */}
              <span 
                className={`block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
              ></span>
              <span 
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span 
                className={`block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with improved styling */}
      <div 
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMobileMenu}
      ></div>
      
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-xs z-40 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          <Link 
            href="/" 
            className={`${isActive('/') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`${isActive('/services') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700`}
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className={`${isActive('/about') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700`}
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link 
            href="/appointments" 
            className={`${isActive('/appointments') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700`}
            onClick={toggleMobileMenu}
          >
            Appointments
          </Link>
          <Link 
            href="/contact" 
            className={`${isActive('/contact') ? 'text-dark-green font-semibold' : 'text-dark-blue dark:text-gray-200'} hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700`}
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          
          {/* User Account Links - Mobile */}
          {user ? (
            <>
              <div className="py-4 border-b border-gray-200 dark:border-gray-700 text-dark-blue dark:text-gray-200 font-medium">
                Hello, {user.firstName}
              </div>
              <Link 
                href="/dashboard" 
                className="text-dark-blue dark:text-gray-200 hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700"
                onClick={toggleMobileMenu}
              >
                Dashboard
              </Link>
              <Link 
                href="/profile" 
                className="text-dark-blue dark:text-gray-200 hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700"
                onClick={toggleMobileMenu}
              >
                Profile
              </Link>
              <button 
                onClick={handleLogout}
                className="text-dark-blue dark:text-gray-200 hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700 text-left w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              href="/login" 
              className="text-dark-blue dark:text-gray-200 hover:text-green-600 transition-colors duration-300 text-lg py-4 border-b border-gray-200 dark:border-gray-700"
              onClick={toggleMobileMenu}
            >
              Log In
            </Link>
          )}
          
          {/* Mobile Phone Button */}
          <a 
            href="tel:+17135550194" 
            className="bg-[#3f775e] text-white px-4 py-3 rounded-full hover:bg-[#4c8f73] transition-colors duration-300 text-center mt-6"
            onClick={toggleMobileMenu}
          >
            (713) 555-0194
          </a>
          
          <div className="mt-auto pt-6 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 