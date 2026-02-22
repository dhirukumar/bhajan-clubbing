"use client";

export default function Footer() {
  return (
    <footer style={{ background:"var(--maroon-dark)", borderTop:"2px solid rgba(212,160,23,0.3)", padding:"5rem 1.5rem 2.5rem" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

        {/* Top grid — added gap between brand and navigate */}
        <div className="footer-grid" style={{ marginBottom:"4rem" }}>

          {/* Brand + Contact */}
          <div>
            <div style={{ fontFamily:"var(--font-playfair),serif", fontSize:"1.8rem", fontWeight:900, letterSpacing:"0.02em", marginBottom:"0.8rem" }}>
              <span style={{ color:"var(--gold-bright)" }}>BHAJAN</span>{" "}
              <span style={{ color:"var(--gold)", fontStyle:"italic", fontWeight:400 }}>CLUBBING</span>
            </div>
            <p style={{ fontSize:"1.2rem", lineHeight:1.85, color:"rgba(245,230,163,0.75)", maxWidth:"280px", fontStyle:"italic", marginBottom:"2rem", fontWeight:400 }}>
              Where devotion becomes a dance, and music becomes a prayer.
            </p>

            <div style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.3em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"1rem" }}>
              Contact
            </div>
            <a href="tel:+918860311006"
              style={{ display:"block", fontFamily:"var(--font-playfair),serif", fontSize:"1.25rem", fontWeight:700, color:"var(--gold-bright)", textDecoration:"none", marginBottom:"0.6rem", transition:"color 0.3s" }}
              onMouseEnter={(e)=>((e.currentTarget as HTMLElement).style.color="#fff")}
              onMouseLeave={(e)=>((e.currentTarget as HTMLElement).style.color="var(--gold-bright)")}
            >+91-8860311006</a>
            <a href="mailto:BhaktiRave@TheHumbleEvents.com"
              style={{ display:"inline-block", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.80rem", fontWeight:700, letterSpacing:"0.04em", color:"var(--gold-bright)", textDecoration:"none", borderBottom:"2px solid rgba(212,160,23,0.5)", paddingBottom:"3px", transition:"color 0.3s", wordBreak:"break-all" }}
              onMouseEnter={(e)=>((e.currentTarget as HTMLElement).style.color="#fff")}
              onMouseLeave={(e)=>((e.currentTarget as HTMLElement).style.color="var(--gold-bright)")}
            >BhaktiRave@TheHumbleEvents.com</a>
          </div>

          {/* Spacer column — creates visual gap */}
          <div />

          {/* Navigate — pushed right by the spacer */}
          <div style={{ paddingLeft:"2rem" }}>
            <div style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"1.5rem" }}>
              Navigate
            </div>
            {["About","Experience","Tickets","FAQ","Venue"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ display:"block", fontFamily:"var(--font-playfair),serif", fontSize:"1.15rem", fontWeight:600, color:"rgba(245,230,163,0.85)", textDecoration:"none", marginBottom:"0.7rem", transition:"color 0.3s" }}
                onMouseEnter={(e)=>((e.currentTarget as HTMLElement).style.color="var(--gold-bright)")}
                onMouseLeave={(e)=>((e.currentTarget as HTMLElement).style.color="rgba(245,230,163,0.85)")}
              >{l}</a>
            ))}
          </div>
        </div>

        {/* ── PARTNER LOGOS — real PNG images ── */}
        <div style={{ padding:"2.5rem 0", borderTop:"1px solid rgba(212,160,23,0.18)", borderBottom:"1px solid rgba(212,160,23,0.18)", marginBottom:"2.5rem" }}>
          <div className="partners-row">

            {/* Bhakti Rave — black bg PNG */}
            <div className="partner-cell" style={{ borderRight:"1px solid rgba(212,160,23,0.18)" }}>
              <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.70rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(212,160,23,0.55)", marginBottom:"1rem" }}>
                Collaboration With
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bhakti-rave-logo.png"
                alt="Bhakti Rave"
                style={{ height:"64px", width:"auto", objectFit:"contain" }}
              />
            </div>

            {/* UNCO — black bg PNG */}
            <div className="partner-cell" style={{ borderRight:"1px solid rgba(212,160,23,0.18)" }}>
              <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.70rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(212,160,23,0.55)", marginBottom:"1rem" }}>
                Community Partner
              </p>
              {/* UNCO logo reproduced as SVG matching the real logo exactly */}
              <img
                src="/UNCO_022.png"
                alt="UNCO"
                style={{ height:"64px", width:"auto", objectFit:"contain" }}
              />
            </div>

            {/* Infomercial — dark red PNG */}
            <div className="partner-cell">
              <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.70rem", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(212,160,23,0.55)", marginBottom:"1rem" }}>
                Outreach Partner
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/infomercial-logo.png"
                alt="Infomercial"
                style={{ height:"64px", width:"auto", objectFit:"contain" }}
              />
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
          <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.7rem", fontWeight:600, letterSpacing:"0.1em", color:"rgba(212,160,23,0.5)", textTransform:"uppercase" }}>
            © 2026 Bhakti Rave by Humble Events (A Unit of SARJAS GROUP). All rights reserved.
          </p>
          <p style={{ fontFamily:"var(--font-playfair),serif", fontSize:"0.9rem", fontWeight:900, color:"rgba(212,160,23,0.45)", fontStyle:"italic" }}>
            Made with devotion ✦ Faridabad, India
          </p>
        </div>
      </div>

      <style>{`
        /* 3-col: brand | spacer | navigate */
        .footer-grid  { display: grid; grid-template-columns: 1.2fr 0.4fr 0.8fr; gap: 2rem; }
        .partners-row { display: flex; flex-direction: row; justify-content: center; }
        .partner-cell { flex: 1; min-width: 180px; max-width: 320px; padding: 1rem 2.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }

        @media (max-width: 768px) {
          .footer-grid  { grid-template-columns: 1fr !important; gap: 2rem !important; }
          /* hide spacer on mobile */
          .footer-grid > div:nth-child(2) { display: none; }
          .partners-row { flex-direction: column !important; align-items: center !important; }
          .partner-cell { border-right: none !important; border-bottom: 1px solid rgba(212,160,23,0.15); width: 100%; max-width: 100%; padding: 1.5rem 1rem; }
          .partner-cell:last-child { border-bottom: none; }
        }
      `}</style>
    </footer>
  );
}