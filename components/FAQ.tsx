"use client";
import { useState } from "react";

const faqs = [
  { q:"What kind of music will be played?",                    a:"Bhajan Clubbing blends traditional devotional bhajans with contemporary electronic production. Expect live instruments like santoor, tabla, sitar, and flute woven with synthesisers and subtle beats — deeply musical, deeply spiritual, and deeply danceable." },
  { q:"Is this a religious event?",                            a:"Not at all. Bhajan Clubbing is a spiritual and cultural experience open to all, regardless of faith or background. We draw from the Hindu devotional tradition but welcome everyone — atheists, seekers, agnostics, and believers alike." },
  
  { q:"What is the dress code?",                               a:"There is no strict dress code. We encourage comfortable, expressive clothing. Many guests choose traditional Indian attire, flowy festival wear, or anything that makes them feel free." },
  { q:"What time does the event start and end?",               a:"Doors open at 4:00 PM on Saturday, 14 March 2026. The evening runs onwards through the night with live bhajans, DJ sets, chanting, and closing aarti." },
  { q:"How do I book tickets?",                                a:"Tickets are available via BookMyShow . Phase 2 General Entry is ₹799/- and Seating is ₹1,599/-. Limited capacity — book early." },
  { q:"Is the venue accessible?",                              a:"Yes. Omaxe World Street, Faridabad is centrally accessible with high footfall, premium facilities, and an upscale open-air setting." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number|null>(null);

  return (
    <section id="faq" style={{ padding:"7rem 1.5rem", background:"var(--cream-light)" }}>
      <div style={{ maxWidth:"780px", margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <span style={{ display:"block", fontFamily:"var(--font-space-mono),monospace", fontSize:"1rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--maroon)", marginBottom:"1.2rem" }}>
            Questions & Answers
          </span>
          <h2 style={{ fontFamily:"var(--font-playfair),serif", fontSize:"clamp(2rem,4.5vw,3.2rem)", fontWeight:900, lineHeight:1.1, color:"var(--maroon)" }}>
            You may be <em style={{ color:"#9B4400", fontStyle:"italic" }}>wondering…</em>
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom:"1.5px solid rgba(107,31,62,0.15)" }}>
            <button
              onClick={() => setOpenIndex(openIndex===i ? null : i)}
              style={{ width:"100%", padding:"1.6rem 0", display:"flex", justifyContent:"space-between", alignItems:"center", background:"transparent", border:"none", cursor:"pointer", textAlign:"left", gap:"1rem" }}
            >
              <span style={{ fontFamily:"var(--font-playfair),serif", fontSize:"clamp(1.05rem,2.5vw,1.25rem)", fontWeight:700, color: openIndex===i ? "var(--maroon)" : "#3A1010", lineHeight:1.4, transition:"color 0.3s" }}>
                {faq.q}
              </span>
              <span style={{ color:"var(--gold)", fontSize:"1.2rem", flexShrink:0, transition:"transform 0.35s", transform: openIndex===i ? "rotate(45deg)" : "rotate(0deg)", display:"inline-block" }}>✦</span>
            </button>
            <div style={{ maxHeight: openIndex===i ? "300px" : "0", overflow:"hidden", transition:"max-height 0.45s ease" }}>
              <p style={{ paddingBottom:"1.6rem", fontSize:"1.2rem", fontWeight:700, lineHeight:1.9, color:"#4A1A1A" }}>{faq.a}</p>
            </div>
          </div>
        ))}

        {/* Contact box */}
        <div style={{ marginTop:"4rem", background:"linear-gradient(135deg, var(--maroon-dark), var(--maroon))", border:"1.5px solid rgba(212,160,23,0.25)", padding:"2.5rem", textAlign:"center" }}>
          <p style={{ fontFamily:"var(--font-playfair),serif", fontSize:"1.30rem", fontWeight:600, color:"rgba(245,230,163,0.85)", marginBottom:"1rem", fontStyle:"italic" }}>
            Still have questions? Reach out to our team.
          </p>
          <a href="tel:+918860311006"
            style={{ fontFamily:"var(--font-space-mono),monospace", fontSize:"1rem", fontWeight:700, letterSpacing:"0.08em", color:"var(--gold-bright)", textDecoration:"none", borderBottom:"2px solid rgba(212,160,23,0.5)", paddingBottom:"3px", display:"inline-block", transition:"color 0.3s" }}
            onMouseEnter={(e)=>((e.currentTarget as HTMLElement).style.color="white")}
            onMouseLeave={(e)=>((e.currentTarget as HTMLElement).style.color="var(--gold-bright)")}
          >+91-8860311006</a>
        </div>
      </div>
    </section>
  );
}
