"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About",      href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Tickets",    href: "#tickets" },
    { label: "FAQ",        href: "#faq" },
    { label: "Venue",      href: "#venue" },
  ];

  // Always render with cream bg on server — client takes over after mount
  // This makes server HTML match client initial render → no hydration error
  const isScrolled = mounted && scrolled;

  const bg        = isScrolled ? "rgba(74,16,40,0.97)"      : "rgba(242,232,217,0.96)";
  const border    = isScrolled ? "rgba(212,160,23,0.25)"    : "rgba(107,31,62,0.2)";
  const shadow    = isScrolled ? "0 2px 24px rgba(74,16,40,0.4)" : "0 2px 12px rgba(107,31,62,0.08)";
  const brandCol  = isScrolled ? "var(--gold-bright)"       : "var(--maroon)";
  const italicCol = isScrolled ? "var(--gold)"              : "#9B4400";
  const subCol    = isScrolled ? "rgba(245,230,163,0.45)"   : "rgba(107,31,62,0.45)";
  const linkCol   = isScrolled ? "rgba(245,230,163,0.85)"   : "rgba(74,16,40,0.8)";
  const linkHover = isScrolled ? "#ffffff"                  : "var(--maroon)";
  const burgerCol = isScrolled ? "var(--gold-bright)"       : "var(--maroon)";
  const logoBorder= isScrolled ? "rgba(212,160,23,0.5)"     : "rgba(107,31,62,0.3)";

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-desktop-book  { display: inline-block; }
        .nav-hamburger     { display: none; }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-book  { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: isScrolled ? "0.7rem 2rem" : "1rem 2rem",
        background: bg,
        backdropFilter: "blur(20px)",
        borderBottom: `1.5px solid ${border}`,
        boxShadow: shadow,
        transition: "background 0.4s, padding 0.4s, box-shadow 0.4s",
      }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem" }}>

          {/* Brand */}
          <a href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"0.7rem", flexShrink:0 }}>
            <div style={{ width:"44px", height:"44px", borderRadius:"50%", overflow:"hidden", flexShrink:0, background:"#111", border:`2px solid ${logoBorder}`, transition:"border-color 0.4s" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bhakti-rave-logo.png" alt="Bhakti Rave" style={{ width:"100%", height:"100%", objectFit:"contain", display:"block" }} />
            </div>
            <div style={{ display:"flex", flexDirection:"column", lineHeight:1.15 }}>
              <span style={{ fontFamily:"var(--font-playfair),serif", fontWeight:900, fontSize:"1.4rem", letterSpacing:"0.03em", color:brandCol, transition:"color 0.4s" }}>
                BHAJAN{" "}
                <span style={{ fontStyle:"italic", fontWeight:400, color:italicCol, transition:"color 0.4s" }}>CLUBBING</span>
              </span>
              {/* <span style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.46rem", fontWeight:600, letterSpacing:"0.26em", textTransform:"uppercase", color:subCol, transition:"color 0.4s" }}>
                Faridabad&apos;s First Devotional Fest
              </span> */}
            </div>
          </a>

          {/* Desktop nav links */}
          <ul className="nav-desktop-links" style={{ gap:"1.8rem", listStyle:"none", margin:0, padding:0, alignItems:"center" }}>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href}
                  style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:linkCol, textDecoration:"none", transition:"color 0.25s", whiteSpace:"nowrap" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = linkHover)}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = linkCol)}
                >{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Book Now */}
          <a href="https://in.bookmyshow.com/events/bhakti-rave-bhajan-clubbing/ET00481099?webview=true" className="nav-desktop-book btn-primary"
            style={{ padding:"0.58rem 1.4rem", fontSize:"0.66rem", fontWeight:700, whiteSpace:"nowrap", flexShrink:0 }}>
            Book Now
          </a>

          {/* Hamburger — mobile only */}
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
            style={{ background:"none", border:"none", cursor:"pointer", padding:"4px", flexDirection:"column", gap:"5px", flexShrink:0 }}>
            <span style={{ display:"block", height:"2px", width:"22px", borderRadius:"2px", background:burgerCol, transition:"all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }}/>
            <span style={{ display:"block", height:"2px", width:"22px", borderRadius:"2px", background:burgerCol, transition:"all 0.3s", opacity: menuOpen ? 0 : 1 }}/>
            <span style={{ display:"block", height:"2px", width:"22px", borderRadius:"2px", background:burgerCol, transition:"all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }}/>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background:"rgba(74,16,40,0.99)", padding:"0.5rem 1.5rem 1.5rem", marginTop:"0.5rem", borderTop:"1px solid rgba(212,160,23,0.2)" }}>
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display:"block", padding:"1rem 0", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.82rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(245,230,163,0.92)", textDecoration:"none", borderBottom:"1px solid rgba(212,160,23,0.1)" }}>
                {l.label}
              </a>
            ))}
            <a href="#tickets" onClick={() => setMenuOpen(false)}
              style={{ display:"block", marginTop:"1.2rem", padding:"1.1rem", background:"linear-gradient(135deg, var(--maroon), var(--maroon-dark))", color:"var(--gold-bright)", border:"1.5px solid var(--gold)", borderRadius:"4px", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.85rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", textDecoration:"none", textAlign:"center" }}>
              Book Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
}