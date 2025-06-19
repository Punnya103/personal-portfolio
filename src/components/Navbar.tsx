'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-theme-section]');
      let activeTheme: 'dark' | 'light' = 'dark';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          const themeAttr = section.getAttribute('data-theme-section');
          if (themeAttr === 'light') activeTheme = 'light';
        }
      });

      setTheme(activeTheme);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/career', label: 'Career' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0  z-50 transition-colors duration-300 backdrop-blur-md w-full  ${
        theme === 'light' ? 'text-black' : 'text-white'
      }`}
    >
      <div className="flex items-center justify-between px-12 md:justify-around py-4 ">
        
        <h1 className="text-xl font-bold">my Portfolio</h1>


        <div className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>   
          ))}
        </div>

    
        <div className="md:hidden ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden bg-opacity-90 ${
          menuOpen ? 'max-h-screen py-2' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`border-b pb-2 ${
                theme === 'light' ? 'border-gray-300' : 'border-gray-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
