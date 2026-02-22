"use client";

const BMS_URL = "https://in.bookmyshow.com/events/bhakti-rave-bhajan-clubbing/ET00481099?webview=true";

const tickets = [
  {
    name: "Early Bird",
    price: "Rs 399",
    tag: "Fast Filling",
    tagColor: "#E8541A",
    desc: "Entry only · Limited seats at this price",
    highlight: false,
  },
  {
    name: "Early Bird Phase II",
    price: "Rs 799",
    tag: "Available Now",
    tagColor: "var(--gold)",
    desc: "Entry only · General admission",
    highlight: true,
  },
  {
    name: "Early Bird Seating",
    price: "Rs 1,100",
    tag: "Premium",
    tagColor: "#9B4400",
    desc: "Reserved seating · Best experience",
    highlight: false,
  },
];

export default function Tickets() {
  return (
    <section id="tickets" style={{ padding:"7rem 1.5rem", background:"var(--cream-light)" }}>
      <div style={{ maxWidth:"900px", margin:"0 auto" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <span style={{ display:"block", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.80rem", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--maroon)", marginBottom:"1.2rem" }}>
            Book Your Tickets
          </span>
          <h2 style={{ fontFamily:"var(--font-playfair),serif", fontSize:"clamp(2rem,4.5vw,3.2rem)", fontWeight:900, lineHeight:1.1, color:"var(--maroon)" }}>
            Choose your <em style={{ color:"#9B4400", fontStyle:"italic" }}>passage</em>
          </h2>
         
        </div>

        {/* 3 ticket cards — stacked list style matching BMS screenshot */}
        <div style={{ display:"flex", flexDirection:"column", gap:"1.2rem", marginBottom:"3.5rem" }}>
          {tickets.map((t, i) => (
            <a
              key={i}
              href={BMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration:"none" }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.6rem 2rem",
                background: t.highlight ? "linear-gradient(135deg, var(--maroon-dark), var(--maroon))" : "white",
                border: t.highlight ? "2px solid var(--gold)" : "2px solid rgba(107,31,62,0.15)",
                borderRadius: "4px",
                boxShadow: t.highlight ? "0 8px 30px rgba(74,16,40,0.2)" : "0 2px 12px rgba(107,31,62,0.06)",
                transition: "transform 0.25s, box-shadow 0.25s",
                cursor: "pointer",
                gap: "1rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = t.highlight
                  ? "0 16px 40px rgba(74,16,40,0.35)"
                  : "0 8px 28px rgba(107,31,62,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = t.highlight
                  ? "0 8px 30px rgba(74,16,40,0.2)"
                  : "0 2px 12px rgba(107,31,62,0.06)";
              }}
              >
                {/* Left — ticket info */}
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.4rem", flexWrap:"wrap" }}>
                    <span style={{
                      fontFamily: "var(--font-space-mono),monospace",
                      fontSize: "0.82rem",
                      fontWeight: 900,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: t.highlight ? "var(--gold-bright)" : "var(--maroon)",
                    }}>
                      {t.name}
                    </span>
                    {/* Tag badge */}
                    <span style={{
                      fontFamily: "var(--font-space-mono),monospace",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: t.highlight ? "var(--maroon-dark)" : t.tagColor,
                      background: t.highlight ? "var(--gold)" : `${t.tagColor}18`,
                      border: t.highlight ? "none" : `1px solid ${t.tagColor}44`,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "2px",
                    }}>
                      {t.tag}
                    </span>
                  </div>
                  {/* Price + desc row */}
                  <div style={{ display:"flex", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
                    <span style={{
                      fontFamily: "var(--font-playfair),serif",
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      color: t.highlight ? "var(--gold-bright)" : "var(--maroon)",
                    }}>
                      {t.price}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-playfair),serif",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      color: t.highlight ? "rgba(245,230,163,0.6)" : "rgba(58,16,16,0.45)",
                      fontStyle: "italic",
                    }}>
                      {t.desc}
                    </span>
                  </div>
                </div>

                {/* Right — Book button */}
                <div style={{
                  flexShrink: 0,
                  padding: "0.75rem 1.8rem",
                  background: t.highlight ? "var(--gold)" : "transparent",
                  color: t.highlight ? "var(--maroon-dark)" : "var(--maroon)",
                  border: t.highlight ? "none" : "2px solid var(--maroon)",
                  borderRadius: "4px",
                  fontFamily: "var(--font-space-mono),monospace",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  transition: "all 0.25s",
                }}>
                  Book Now ↗
                </div>
              </div>
            </a>
          ))}
        </div>

     

        {/* Stall CTA */}
        <div style={{ background:"linear-gradient(135deg, var(--maroon-dark), var(--maroon))", border:"2px solid rgba(212,160,23,0.3)", padding:"2.5rem" }} className="stall-grid">
          <div>
            <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.25em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.7rem" }}>
              Set Up Your Stall 🛍️
            </p>
            <h3 style={{ fontFamily:"var(--font-playfair),serif", fontSize:"1.9rem", fontWeight:900, color:"var(--gold-pale)", marginBottom:"1rem" }}>
              Join as a Vendor
            </h3>
            <p style={{ fontSize:"1.05rem", fontWeight:500, lineHeight:1.85, color:"rgba(245,230,163,0.8)", marginBottom:"1.5rem" }}>
              Brands, vendors & local startups — tap into a premium, spiritually-engaged audience of 2,000–3,000 attendees. Ideal for F&B, spiritual merchandise, jewellery, clothing & flea market stalls.
            </p>
            <a href="tel:+918860311006" className="btn-primary" style={{ padding:"0.9rem 2rem", fontSize:"0.8rem", fontWeight:700 }}>
              +91-8860311006
            </a>
          </div>
          <div style={{ textAlign:"center" }}>
            <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.2em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.5rem" }}>
              Stall Pricing
            </p>
            <p style={{ fontFamily:"var(--font-playfair),serif", fontSize:"4.5rem", fontWeight:900, color:"var(--gold-bright)", lineHeight:1 }}>
              ₹6,000
            </p>
            <p style={{ fontFamily:"var(--font-playfair),serif", fontSize:"1rem", fontWeight:600, color:"rgba(245,230,163,0.7)", marginTop:"0.4rem" }}>
              per stall · all-inclusive
            </p>
            <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.05em", color:"rgba(212,160,23,0.75)", textTransform:"uppercase", marginTop:"0.7rem" }}>
              ⚡ Limited spots only
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .stall-grid { display: grid; grid-template-columns: 1fr auto; gap: 3rem; align-items: center; }
        @media (max-width: 640px) {
          .stall-grid { grid-template-columns: 1fr !important; text-align: center !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}