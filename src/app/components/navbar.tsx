"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";  // Import the custom CSS file

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Image src="/alogo.png" alt="logo image" width={50} height={50} />
      </div>

      {/* Desktop Navigation links */}
      <nav className="desktop-nav">
        <ul className="nav-list">
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/about" className="nav-link">About</Link></li>
          <li><Link href="/project" className="nav-link">Project</Link></li>
          <li><Link href="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>

      {/* Menu icon for small screens */}
      <div className="menu-icon">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu className="menu-icon-svg" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/" onClick={toggleMenu} className="mobile-menu-link">Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu} className="mobile-menu-link">About</Link></li>
          <li><Link href="/project" onClick={toggleMenu} className="mobile-menu-link">Project</Link></li>
          <li><Link href="/contact" onClick={toggleMenu} className="mobile-menu-link">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}
