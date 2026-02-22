"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const colors = ["#D4A017","#F0C040","#F5E6A3","#CC2200"];
    const particles: HTMLSpanElement[] = [];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const size = Math.random() * 4 + 2;
      p.style.cssText = `left:${Math.random()*100}%;width:${size}px;height:${size*2.5}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*6+5}s;animation-delay:${Math.random()*8}s;`;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach(p => p.remove());
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      /* Exact maroon from Screenshot 1 */
      background: "radial-gradient(ellipse at 50% 10%, #7D2548 0%, #6B1F3E 45%, #4A1028 100%)",
      padding: "6rem 1.5rem 4rem",
      textAlign: "center",
    }}>
      {/* Rotating mandala */}
      <div className="animate-rotate-slow" style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", opacity:0.06, pointerEvents:"none" }}>
        <svg width="800" height="800" viewBox="0 0 900 900" fill="none">
          {[...Array(16)].map((_,i) => (
            <g key={i} transform={`rotate(${i*22.5} 450 450)`}>
              <ellipse cx="450" cy="185" rx="9" ry="52" fill="#D4A017" opacity="0.8"/>
              <ellipse cx="450" cy="148" rx="5" ry="26" fill="#F0C040" opacity="0.6"/>
              <circle  cx="450" cy="120" r="5"          fill="#D4A017" opacity="0.5"/>
            </g>
          ))}
          {[...Array(32)].map((_,i) => (
            <line key={`l${i}`} x1="450" y1="450" x2={450+375*Math.cos(i*Math.PI/16)} y2={450+375*Math.sin(i*Math.PI/16)} stroke="#D4A017" strokeWidth="0.4" opacity="0.18"/>
          ))}
          {[60,130,200,275,345,395].map(r => (
            <circle key={r} cx="450" cy="450" r={r} stroke="#D4A017" strokeWidth="0.5" opacity="0.12" fill="none"/>
          ))}
        </svg>
      </div>

      {/* Gold glow orbs */}
      <div style={{ position:"absolute", top:"25%", left:"10%", width:"280px", height:"280px", background:"radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)", pointerEvents:"none", borderRadius:"50%" }}/>
      <div style={{ position:"absolute", bottom:"25%", right:"8%",  width:"220px", height:"220px", background:"radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)", pointerEvents:"none", borderRadius:"50%" }}/>

      {/* Sparkle decorations */}
      <span className="sparkle"       style={{ position:"absolute", top:"14%", right:"11%", fontSize:"1.8rem", color:"var(--gold)",        opacity:0.5, pointerEvents:"none" }}>✦</span>
      <span className="sparkle-delay" style={{ position:"absolute", top:"22%", left:"9%",  fontSize:"1.3rem", color:"var(--gold-bright)",  opacity:0.35, pointerEvents:"none" }}>✦</span>
      <span className="sparkle"       style={{ position:"absolute", bottom:"30%", right:"7%", fontSize:"1rem", color:"var(--gold)",        opacity:0.4, pointerEvents:"none" }}>✦</span>

      {/* Firework SVGs */}
      <svg className="sparkle" style={{ position:"absolute", top:"7%", right:"17%", width:"60px", opacity:0.28, pointerEvents:"none" }} viewBox="0 0 100 100">
        {[...Array(12)].map((_,i) => <line key={i} x1="50" y1="50" x2={50+43*Math.cos(i*Math.PI/6)} y2={50+43*Math.sin(i*Math.PI/6)} stroke="#D4A017" strokeWidth="1.5"/>)}
        <circle cx="50" cy="50" r="4" fill="#F0C040"/>
      </svg>
      <svg className="sparkle-delay" style={{ position:"absolute", top:"15%", left:"13%", width:"48px", opacity:0.2, pointerEvents:"none" }} viewBox="0 0 100 100">
        {[...Array(12)].map((_,i) => <line key={i} x1="50" y1="50" x2={50+40*Math.cos(i*Math.PI/6)} y2={50+40*Math.sin(i*Math.PI/6)} stroke="#F0C040" strokeWidth="1.2"/>)}
        <circle cx="50" cy="50" r="3" fill="#D4A017"/>
      </svg>

      <div ref={particlesRef} style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden" }}/>

      {/* ═══════════════════════════════════════════
          OMAXE WORLD STREET LOGO — SVG recreation
          matching Screenshot 2 exactly
      ═══════════════════════════════════════════ */}
     <div>
  {/* Public image logo */}
  <div>
    <img
      src="/omaxe-world-street.png"
      alt="Omaxe World Street"
      style={{
        width: "140px",
        height: "auto",
        objectFit: "contain",
        display: "block",
      }}
    />
  </div>
</div>


      {/* PRESENTS — centered below logo */}
      <div className="animate-in delay-200" style={{ position:"relative", zIndex:2, marginBottom:"0.5rem" }}>
        <span style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.70rem", letterSpacing:"0.20em", color:"var(--gold-pale)", textTransform:"uppercase" }}>
          P R E S E N T S
        </span>
      </div>

      {/* ═══════════════════
          BHAJAN — big title
          CLUBBING — separate line below, no overlap
      ═══════════════════ */}
    <div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 1rem",
    overflow: "visible", // IMPORTANT
  }}
>
  <h1
    className="animate-in delay-400"
    style={{
      fontFamily: "var(--font-playfair), serif",
      fontWeight: 900,

      fontSize: "clamp(3.5rem, 11vw, 9rem)",
      lineHeight: 1.20,

      background: "linear-gradient(180deg, #F5E6A3 0%, #F0C040 45%, #D4A017 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",

      letterSpacing: "0.02em",
      margin: 0,

      textAlign: "center",
      whiteSpace: "nowrap", // prevents breaking
    }}
  >
    BHAJAN
  </h1>
</div>



      {/* Divider line + CLUBBING on its own line */}
      <div className="animate-in delay-500" style={{ position:"relative", zIndex:2, display:"flex", alignItems:"center", gap:"0.75rem", marginTop:"0.3rem", marginBottom:"1.5rem", justifyContent:"center" }}>
        <div style={{ height:"2px", width:"clamp(40px, 8vw, 100px)", background:"linear-gradient(90deg, transparent, var(--gold))" }}/>
        <span style={{
          fontFamily: "var(--font-space-mono),monospace",
          fontWeight: 700,
          fontSize: "clamp(0.85rem, 2.8vw, 1.7rem)",
          letterSpacing: "0.42em",
          color: "var(--gold-bright)",
          textTransform: "uppercase",
          textShadow: "0 0 25px rgba(240,192,64,0.45)",
          whiteSpace: "nowrap",
        }}>CLUBBING</span>
        <div style={{ width:"8px", height:"8px", background:"var(--gold)", transform:"rotate(45deg)", flexShrink:0 }}/>
      </div>

      {/* Subtitle */}
      <div className="animate-in delay-600" style={{ position:"relative", zIndex:2, marginBottom:"2.5rem" }}>
        <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"clamp(1rem,2vw,1rem)", letterSpacing:"0.25em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.35rem" }}>
          FARIDABAD&apos;S FIRST
        </p>
        <p style={{ fontFamily:"var(--font-playfair),serif", fontSize:"clamp(1.3rem,3.8vw,2.6rem)", fontWeight:700, color:"var(--text-on-dark)", letterSpacing:"0.06em", textTransform:"uppercase", textShadow:"1px 2px 12px rgba(0,0,0,0.4)" }}>
          DEVOTIONAL FEST
        </p>
      </div>

      {/* ═══════════════════════════════
          DATE + TIME BOXES — fully visible
          gold border, gold text on maroon
      ═══════════════════════════════ */}
      <div className="animate-in delay-700" style={{ position:"relative", zIndex:2, display:"flex", gap:"1.5rem", alignItems:"center", justifyContent:"center", flexWrap:"wrap", marginBottom:"2.5rem" }}>
        {/* Date box */}
        <div style={{
          border: "2px solid var(--gold)",
          padding: "1rem 1.4rem",
          textAlign: "center",
          minWidth: "105px",
          background: "rgba(74,16,40,0.7)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 0 20px rgba(212,160,23,0.2)",
        }}>
          <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.8rem", letterSpacing:"0.28em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.25rem" }}>SATURDAY</p>
          <p style={{ fontFamily:"var(--font-playfair),serif", fontSize:"3rem", fontWeight:900, color:"var(--gold-bright)", lineHeight:1, textShadow:"0 0 20px rgba(240,192,64,0.4)" }}>14</p>
          <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.80rem", letterSpacing:"0.25em", color:"var(--gold)", textTransform:"uppercase" }}>MARCH</p>
          <p style={{  fontFamily:"var(--font-space-mono),monospace", fontSize:"0.80rem", letterSpacing:"0.15em", color:"var(--gold-pale)", marginTop:"2px" }}>2 0 2 6</p>
        </div>

        {/* Divider */}
        <div style={{ width:"1px", height:"68px", background:"linear-gradient(to bottom, transparent, var(--gold), transparent)" }}/>

        {/* Time box */}
        <div style={{
          border: "2px solid var(--gold)",
          padding: "1rem 1.4rem",
          textAlign: "center",
          minWidth: "105px",
          background: "rgba(74,16,40,0.7)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 0 20px rgba(212,160,23,0.2)",
        }}>
          <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.8rem", letterSpacing:"0.28em", color:"var(--gold)", textTransform:"uppercase", marginBottom:"0.25rem" }}>T I M E</p>
          <p style={{ fontFamily:"var(--font-playfair),serif", fontSize:"3rem", fontWeight:900, color:"var(--gold-bright)", lineHeight:1, textShadow:"0 0 20px rgba(240,192,64,0.4)" }}>4:00</p>
          <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.80rem", letterSpacing:"0.25em", color:"var(--gold)", textTransform:"uppercase" }}>P M</p>
          <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.80rem", letterSpacing:"0.15em", color:"var(--gold-pale)", marginTop:"2px" }}>ONWARDS</p>
        </div>
      </div>

      {/* CTAs */}
      <div className="animate-in delay-900" style={{ position:"relative", zIndex:2, display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent:"center" }}>
        <a href="https://in.bookmyshow.com/events/bhakti-rave-bhajan-clubbing/ET00481099?webview=true" className="btn-primary">Secure Your Spot</a>
        <a href="#about"   className="btn-outline">Discover More</a>
      </div>

      {/* Scroll indicator */}
      {/* <div className="animate-in delay-2000" style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem" }}>
        <p style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"0.5rem", letterSpacing:"0.3em", color:"rgba(212,160,23,0.4)", textTransform:"uppercase" }}>Scroll</p>
        <div className="animate-scroll-pulse" style={{ width:"1px", height:"48px", background:"linear-gradient(to bottom, var(--gold), transparent)" }}/>
      </div> */}
    </section>
  );
}
