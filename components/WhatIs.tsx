"use client";

export default function WhatIs() {
  return (
    <section id="about" style={{ padding:"7rem 1.5rem", background:"var(--cream-light)" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
        <div className="whatis-grid">

          {/* Visual */}
          <div style={{ position:"relative" }}>
            <div style={{ aspectRatio:"3/4", maxHeight:"500px", border:"2px solid rgba(212,160,23,0.35)", position:"relative", overflow:"hidden" }}>
              <img
                src="/whatis-image.png"
                alt="Bhajan Clubbing crowd"
                style={{ width:"100%", height:"100%", objectFit:"cover", opacity:1, display:"block" }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <div className="animate-breathe" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontSize:"9rem", color:"rgba(212,160,23,0.2)", fontFamily:"serif", userSelect:"none", lineHeight:1, zIndex:2 }}>ॐ</div>
              {/* <div style={{ position:"absolute", top:"1.5rem", left:"1.5rem", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.22em", color:"rgba(212,160,23,0.7)", textTransform:"uppercase", zIndex:3 }}>Bhakti Rave × Omaxe</div> */}
            </div>
            <div className="animate-rotate-badge" style={{ position:"absolute", bottom:"-1.5rem", right:"-1.5rem", background:"linear-gradient(135deg,var(--maroon),var(--maroon-dark))", border:"2px solid var(--gold)", color:"var(--gold-bright)", width:"110px", height:"110px", borderRadius:"50%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.52rem", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", lineHeight:1.8, boxShadow:"0 0 28px rgba(107,31,62,0.5)" }}>
              <span>Faridabad</span><span style={{fontSize:"1.05rem"}}>✦</span><span>March 2026</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span style={{ display:"block", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--maroon)", marginBottom:"1.2rem" }}>
              What is Bhajan Clubbing?
            </span>

            <h2 style={{ fontFamily:"var(--font-playfair),serif", fontSize:"clamp(2rem,4.2vw,3.2rem)", fontWeight:900, lineHeight:1.1, color:"var(--maroon)", marginBottom:"1.8rem" }}>
              Where devotion meets the{" "}
              <em style={{ color:"#9B4400", fontStyle:"italic" }}>dance floor</em>
            </h2>

            {/* Body text — dark, heavy, large */}
            <p style={{ fontSize:"1.2rem", fontWeight:500, lineHeight:1.95, color:"#3A1010", marginBottom:"1.4rem" }}>
              Bhajan Clubbing is a unique spiritual and cultural experience that blends the purity of traditional bhajans with a modern, immersive musical atmosphere. Hosted at World Street by Omaxe, Faridabad — this event creates a space where devotion, rhythm, and community come together in a contemporary yet soulful format.
            </p>
            <p style={{ fontSize:"1.2rem", fontWeight:500, lineHeight:1.95, color:"#3A1010", marginBottom:"2.5rem" }}>
              Organized in collaboration with{" "}
              <strong style={{ color:"var(--maroon)", fontWeight:800 }}></strong>{" "}
              {" "}
              <strong style={{ color:"var(--maroon)", fontWeight:800 }}>Bhakti Rave</strong>
              , featuring live bhajans, immersive soundscapes, aesthetic lighting, and experiential mist and rain effects.
            </p>

            {/* Feature rows */}
            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
              {[
                { icon:"🎤", title:"Live Bhajans",    desc:"Soul-stirring performances by live artists all night" },
                { icon:"🎧", title:"Devotional Beats", desc:"High-energy bhakti music with modern production" },
                { icon:"🤝", title:"Community",        desc:"Real connections in a shared spiritual space" },
                { icon:"✨", title:"Cultural Revival", desc:"Ancient traditions in a fresh, modern format" },
              ].map((f) => (
                <div key={f.title} style={{ display:"flex", alignItems:"center", gap:"1.1rem", padding:"1rem 1.2rem", background:"linear-gradient(135deg,var(--maroon-dark),var(--maroon))", border:"1px solid rgba(212,160,23,0.25)" }}>
                  <span style={{ fontSize:"1.4rem", flexShrink:0 }}>{f.icon}</span>
                  <div>
                    <span style={{ fontFamily:"var(--font-playfair),serif", fontSize:"1.1rem", fontWeight:700, color:"var(--gold-bright)" }}>{f.title}</span>
                    <span style={{ fontSize:"1rem", fontWeight:500, color:"rgba(245,230,163,0.82)", marginLeft:"0.6rem" }}>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .whatis-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: center; }
        @media (max-width: 800px) { .whatis-grid { grid-template-columns: 1fr !important; gap: 4rem !important; } }
      `}</style>
    </section>
  );
}
