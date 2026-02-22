"use client";

const exp = [
  { icon:"🎵", title:"Live Band Performances",   desc:"Live band throughout the event — modern-style bhajans with immersive soundscapes and aesthetic lighting." },
  { icon:"🌸", title:"Flower Shower (Varsha)",   desc:"Where rhythm meets divinity — flower varsha and spirituality filling the air around you." },
  { icon:"🪷", title:"Collective Chanting",      desc:"Shared mantras and chants creating a powerful group energy and divine connection." },
  { icon:"🍽️", title:"F&B & Art Stalls",        desc:"Curated food, beverage, and art stalls — a full festival marketplace of devotion and delight." },
  { icon:"📸", title:"Themed Photo Booths",      desc:"Instagram-worthy aesthetic setups designed for the feed and the soul." },
  { icon:"🎁", title:"Giveaways & Lucky Draws",  desc:"Quirky giveaways, lucky draws, interactive art stalls and much more surprises!" },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding:"7rem 1.5rem", background:"linear-gradient(160deg, var(--maroon-dark) 0%, var(--maroon) 100%)" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <span style={{ display:"block", fontFamily:"var(--font-space-mono),monospace", fontSize:"0.80rem", fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold)", marginBottom:"1.2rem" }}>
            What to Expect ✨
          </span>
          <h2 style={{ fontFamily:"var(--font-playfair),serif", fontSize:"clamp(2rem,4.5vw,3.2rem)", fontWeight:900, lineHeight:1.1, color:"var(--gold-pale)", maxWidth:"560px", margin:"0 auto" }}>
            An evening of{" "}
            <em style={{ color:"var(--gold-bright)", fontStyle:"italic" }}>sacred experiences</em>
          </h2>
        </div>

        {/* Cards grid — padding ensures content never clips left edge */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"2px", background:"rgba(212,160,23,0.08)" }}>
          {exp.map((e, i) => (
            <div key={i}
              style={{ padding:"2.5rem", background:"rgba(74,16,40,0.65)", transition:"background 0.4s", position:"relative", overflow:"visible" }}
              onMouseEnter={(el) => { (el.currentTarget as HTMLElement).style.background = "rgba(107,31,62,0.9)"; }}
              onMouseLeave={(el) => { (el.currentTarget as HTMLElement).style.background = "rgba(74,16,40,0.65)"; }}
            >
              <span style={{ fontSize:"2.5rem", display:"block", marginBottom:"1.2rem", lineHeight:1 }}>{e.icon}</span>
              <h3 style={{ fontFamily:"var(--font-playfair),serif", fontSize:"1.3rem", fontWeight:700, color:"var(--gold-bright)", marginBottom:"0.85rem" }}>{e.title}</h3>
              <p style={{ fontSize:"1.15rem", fontWeight:700, lineHeight:1.85, color:"rgba(245,230,163,0.8)" }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
