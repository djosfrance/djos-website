"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={`navbar-shell ${scrolled ? "navbar-scrolled" : ""}`}>

      <nav className="navbar">

        <div className="container navbar-inner">

          <a href="#" className="nav-logo">
            <img src="/images/logo.png" alt="DJOS logo" />
          </a>

          <ul className="nav-links">
            <li><a href="#produit">La Vision</a></li>
            <li><a href="#histoire">L'histoire</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>

          <a href="mailto:contact@djos.fr" className="nav-cta">
            Commander
          </a>

        </div>

      </nav>

    </header>
  );
}