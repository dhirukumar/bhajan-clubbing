"use client";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/Omaxe+World+Street+Faridabad+Sector+79";

export default function Venue() {
  return (
    <section id="venue" style={{ padding:"7rem 1.5rem", background:"linear-gradient(160deg, var(--maroon-dark) 0%, var(--maroon) 100%)" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
        <div className="venue-grid">

          {/* Map */}
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer"
            style={{ display:"block", aspectRatio:"4/3", position:"relative", overflow:"hidden", border:"2px solid rgba(212,160,23,0.4)", cursor:"pointer", textDecoration:"none" }}>
            <iframe
              title="Venue Map"
              src="https://maps.google.com/maps?q=Omaxe+World+Street+Faridabad&t=k&z=16&output=embed&iwloc=near"
              style={{ width:"100%", height:"100%", border:"none", display:"block", pointerEvents:"none" }}
              loading="lazy"
            />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(74,16,40,0.8) 0%, rgba(74,16,40,0.1) 55%, transparent 100%)", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"1.5rem" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.4rem" }}>
                <span style={{ fontSize:"1.5rem" }}>📍</span>
                <span style={{ fontFamily:"var(--font-playfair),serif", fontSize:"1.2rem", fontWeight:800, color:"var(--gold-bright)" }}>Omaxe World Street</span>
              </div>
              <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.18em", color:"rgba(245,230,163,0.85)", textTransform:"uppercase" }}>
                Sector 79, Faridabad · Tap to open Maps ↗
              </p>
            </div>
            <div style={{ position:"absolute", top:"1rem", right:"1rem", background:"#CC2200", color:"white", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.55rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", padding:"0.35rem 0.8rem" }}>↗ Open in Maps</div>
          </a>

          {/* Info */}
          <div>
            <span style={{ display:"block", fontFamily:"var(--font-space-mono),monospace", fontSize:"2rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"1.2rem" }}>The Sacred Ground</span>
            <h2 style={{ fontFamily:"var(--font-playfair),serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, lineHeight:1.1, marginBottom:"1.5rem", color:"var(--gold-pale)" }}>
              Faridabad&apos;s <em style={{ color:"var(--gold-bright)", fontStyle:"italic" }}>First</em><br/>Devotional Fest
            </h2>
            <p style={{ fontSize:"1.2rem", fontWeight:500, lineHeight:1.9, color:"rgba(245,230,163,0.8)", marginBottom:"2.5rem" }}>
              Hosted at the stunning Omaxe World Street — a premium open-air setting centrally accessible, surrounded by high footfall, premium brands, and vibrant energy.
            </p>

            {/* Details — full row visible */}
            {[
              { icon:"🏛️", label:"Venue",    val:"Omaxe World Street, Faridabad" },
              { icon:"🗓️", label:"Date",     val:"Saturday, 14 March 2026" },
              { icon:"🕐", label:"Time",     val:"4:00 PM Onwards" },
              { icon:"📍", label:"Address",  val:"Sector 79, Faridabad, Haryana" },
              // { icon:"🎟️", label:"Capacity", val:"2,000 – 3,000 Attendees" },
            ].map((d) => (
              <div key={d.label} style={{ display:"grid", gridTemplateColumns:"2rem 5rem 1fr", alignItems:"center", gap:"0.75rem", padding:"0.9rem 0", borderBottom:"1px solid rgba(212,160,23,0.12)" }}>
                <span style={{ fontSize:"1.2rem" }}>{d.icon}</span>
                <span style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.75rem", fontWeight:900, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(245,230,163,0.5)" }}>{d.label}</span>
                <span style={{ fontFamily:"var(--font-playfair),serif", fontSize:"1.05rem", fontWeight:700, color:"var(--gold-pale)" }}>{d.val}</span>
              </div>
            ))}

            <div style={{ display:"flex", gap:"0.30rem", flexWrap:"nowrap", marginTop:"2.5rem" }}>
              <a href="https://in.bookmyshow.com/events/bhakti-rave-bhajan-clubbing/ET00481099?webview=true" className="btn-primary" style={{ padding:"1rem 2rem", fontSize:"0.7rem" }}>Reserve Your Spot</a>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding:"0.40rem 1.40rem", fontSize:"0.7rem" }}>📍 Get Directions</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .venue-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        @media (max-width: 768px) { .venue-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>
    </section>
  );
}
