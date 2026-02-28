import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Twitter, Gamepad2 } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Latest', href: '#latest' },
    { name: 'Popular', href: '#popular' },
    { name: 'Links', href: '#links' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Gamepad2 className="logo-icon" size={28} />
          <span className="logo-text text-gradient">Haradu Games</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="social-actions desktop-only">
          <a href="https://www.youtube.com/@haruto_game" target="_blank" rel="noopener noreferrer" className="social-btn yt">
            <Youtube size={20} />
          </a>
          <a href="#" className="social-btn tw">
            <Twitter size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open glass-panel' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-socials">
            <a href="https://www.youtube.com/@haruto_game" target="_blank" rel="noopener noreferrer" className="social-btn yt">
              <Youtube size={24} />
            </a>
            <a href="#" className="social-btn tw">
              <Twitter size={24} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
