"use client";

import { useState } from "react";

const releases = [
  { title: "NO PRESSURE", kind: "BEAT PACK", price: "$29.99", image: "photo-1519608487953-e999c86e7455", tag: "01 / 06" },
  { title: "AFTER HOURS", kind: "SAMPLE PACK", price: "$24.99", image: "photo-1519608487953-e999c86e7455", tag: "02 / 06" },
  { title: "HIGHER", kind: "VOCAL PACK", price: "$34.99", image: "photo-1519681393784-d120267933ba", tag: "03 / 06" },
  { title: "PARALLEL", kind: "BEAT PACK", price: "$29.99", image: "photo-1470225620780-dba8ba36b745", tag: "04 / 06" },
  { title: "REALITY SHIFT", kind: "MULTI-KIT", price: "$49.99", image: "photo-1519608487953-e999c86e7455", tag: "05 / 06" },
  { title: "ECHOES", kind: "VOCAL PACK", price: "$34.99", image: "photo-1519681393784-d120267933ba", tag: "06 / 06" },
];

const doors = [
  { number: "01", title: "BEATS", description: "Premium instrumentals. Exclusive drops. Instant inspiration.", image: "photo-1470225620780-dba8ba36b745", href: "#releases" },
  { number: "02", title: "VOCALS", description: "Hooks, phrases, textures, and voices with a point of view.", image: "photo-1516280440614-37939bbacd81", href: "#sound-lab" },
  { number: "03", title: "SOUND LAB", description: "Samples, stems, experiments. Get inside the sound.", image: "photo-1598488035139-bdbb2231ce04", href: "#sound-lab" },
  { number: "04", title: "ARTISTS", description: "Meet the creators moving on their own frequency.", image: "photo-1524368535928-5b5e00ddc76b", href: "#artists" },
  { number: "05", title: "MERCH", description: "Wear the frequency. Limited editions and OES essentials.", image: "photo-1523398002811-999ca8dec234", href: "#footer" },
];

function Image({ id, alt, className = "" }: { id: string; alt: string; className?: string }) {
  return <img className={className} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`} alt={alt} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <main className="oes-shell">
      <div className="topline"><span>INDEPENDENT SOUND HOUSE</span><span>LOS ANGELES · EVERYWHERE</span><span>EST. IN THE FUTURE</span></div>
      <header className="nav">
        <a className="brand" href="#" aria-label="Omni Echelon Sounds home"><span className="brand-mark">OES<span>✳</span></span><span className="brand-sub">OMNI ECHELON SOUNDS</span></a>
        <nav className={menuOpen ? "nav-links nav-links-open" : "nav-links"}>
          <a href="#music" onClick={() => setMenuOpen(false)}>MUSIC</a>
          <a href="#releases" onClick={() => setMenuOpen(false)}>BEATS</a>
          <a href="#artists" onClick={() => setMenuOpen(false)}>ARTISTS</a>
          <a href="#sound-lab" onClick={() => setMenuOpen(false)}>SOUND LAB</a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>MERCH</a>
        </nav>
        <a className="nav-cta" href="#signal">ENTER THE SIGNAL <span>↗</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "CLOSE −" : "MENU +"}</button>
      </header>

      <section className="hero" id="music">
        <Image id="photo-1516280440614-37939bbacd81" alt="Artist performing in a dark recording space" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse-dot" /> TRANSMISSION 001 <span className="eyebrow-line" /></p>
            <h1>OMNI<br /><em>ECHELON</em><br />SOUNDS<span className="tm">®</span></h1>
            <p className="hero-manifesto">MUSIC <b>×</b> CULTURE <b>×</b> CREATION <b>×</b> BEYOND</p>
            <p className="hero-description">A multi-dimensional sound house for artists, creators, and visionaries. Beats, vocals, samples, stories. A higher frequency.</p>
            <a className="pill-button" href="#releases">TUNE IN <span>↗</span></a>
          </div>
          <div className="hero-aside"><span className="aside-index">OES / 001</span><p>DIFFERENT<br />SOUNDS.<br /><strong>SAME FREQUENCY.</strong></p><div className="aside-rule" /><ol><li>CREATE</li><li>EXPLORE</li><li>COLLABORATE</li><li>OWN YOUR SOUND</li></ol><div className="orbit"><i /><i /><i /></div><span className="aside-coordinate">34°03' N / 118°15' W</span></div>
          <div className="hero-bottom"><span>INDEPENDENT BY DESIGN</span><span>SCROLL TO EXPLORE ↓</span><span>VOL. 001 — INFINITE</span></div>
        </div>
        <div className="vertical-label">A HIGHER FREQUENCY / OES</div>
      </section>

      <section className="ticker" aria-label="OES values"><div className="ticker-track">SOUND IS A LANGUAGE <span>✳</span> BUILD WHAT YOU HEAR <span>✳</span> OWN YOUR FREQUENCY <span>✳</span> SOUND IS A LANGUAGE <span>✳</span> BUILD WHAT YOU HEAR <span>✳</span> OWN YOUR FREQUENCY <span>✳</span></div></section>

      <section className="doors-section section-pad">
        <div className="section-head"><div><p className="eyebrow">FIND YOUR FREQUENCY / 01</p><h2>CHOOSE<br /><em>YOUR DOOR.</em></h2></div><p className="section-note">No one way in.<br />No one sound out.</p></div>
        <div className="door-grid">
          {doors.map((door) => <a className="door-card" href={door.href} key={door.number}><Image id={door.image} alt={door.title} /><div className="door-overlay" /><span className="door-number">{door.number} / OES</span><div className="door-info"><h3>{door.title}<span>↗</span></h3><p>{door.description}</p></div></a>)}
        </div>
      </section>

      <section className="release-section section-pad" id="releases">
        <div className="section-head release-head"><div><p className="eyebrow">FRESH FROM THE FREQUENCY / 02</p><h2>IN ROTATION<span className="asterisk">✳</span></h2></div><a className="text-link" href="#signal">EXPLORE THE CATALOG <span>↗</span></a></div>
        <div className="release-grid">{releases.map((release) => <a href="#signal" className="release-card" key={release.title}><div className="release-art"><Image id={release.image} alt={release.title + " cover art mood"} /><span className="release-tag">{release.tag}</span><span className="play-button">↗</span><span className="art-stamp">OES<br />SOUND<br />OBJECT</span></div><div className="release-meta"><div><p>{release.kind}</p><h3>{release.title}</h3></div><span>{release.price}</span></div></a>)}</div>
        <p className="catalog-note">A CURATED PREVIEW — CONNECT YOUR LIVE CATALOG BEFORE LAUNCH.</p>
      </section>

      <section className="sound-lab" id="sound-lab"><Image id="photo-1598488035139-bdbb2231ce04" alt="A recording studio sound lab" className="lab-image" /><div className="lab-shade" /><div className="lab-content"><p className="eyebrow"><span className="pulse-dot" /> OPEN FREQUENCY / 03</p><h2>THE SOUND<br /><em>LAB.</em></h2><p>Pull a sound apart. Find what it could become. The next idea is already in there.</p><a className="pill-button" href="#signal">STEP INSIDE <span>↗</span></a></div><div className="lab-vertical">EXPERIMENT / ITERATE / ELEVATE</div><div className="lab-index"><span>001</span><span>∞</span><span>004</span></div></section>

      <section className="artist-section section-pad" id="artists"><div className="artist-copy"><p className="eyebrow">THE PEOPLE BEHIND THE FREQUENCY / 04</p><h2>BUILT BY<br /><em>THE UNBOXED.</em></h2><p>For the ones who never fit the template. Producers, vocalists, visual thinkers, and sound obsessives building something that doesn't have a category yet.</p><a className="text-link" href="#signal">MEET THE ECHELON <span>↗</span></a></div><div className="artist-image-wrap"><Image id="photo-1524368535928-5b5e00ddc76b" alt="Crowd at an immersive music performance" className="artist-image" /><div className="artist-image-caption"><span>NO SCENE. NO BOX.</span><span>JUST SIGNAL.</span></div><span className="artist-giant-type">OES®</span></div></section>

      <section className="manifesto"><span className="manifesto-mark">✳</span><p>THE WORLD DOESN'T NEED<br />MORE OF THE <em>SAME SOUND.</em></p><span className="manifesto-foot">MAKE SOMETHING THAT MOVES THE FREQUENCY.</span></section>

      <section className="signal-section section-pad" id="signal"><div className="signal-top"><p className="eyebrow">GET CLOSER / 05</p><span>OES TRANSMISSION SERVICE</span></div><div className="signal-grid"><div><h2>STAY<br /><em>IN RANGE.</em></h2><p>New sounds, strange ideas, limited drops. No noise for noise's sake.</p></div><form className="signup-form" onSubmit={(event) => { event.preventDefault(); setJoined(true); }}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div className="email-row"><input id="email" type="email" placeholder="you@somewhere.com" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" aria-label="Join the signal">↗</button></div><p>{joined ? "TRANSMISSION RECEIVED. CONNECT A REAL EMAIL SERVICE TO ACTIVATE SIGNUPS." : "LOW FREQUENCY. HIGH INTENTION. UNSUBSCRIBE WHENEVER."}</p></form></div></section>

      <footer className="footer" id="footer"><a className="brand footer-brand" href="#"><span className="brand-mark">OES<span>✳</span></span><span className="brand-sub">OMNI ECHELON SOUNDS</span></a><p>A HIGHER FREQUENCY.<br />INDEPENDENT SOUND. INFINITE POSSIBILITY.</p><div className="footer-links"><a href="#music">MUSIC</a><a href="#releases">BEATS</a><a href="#artists">ARTISTS</a><a href="#sound-lab">SOUND LAB</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} OMNI ECHELON SOUNDS</span><span>BUILT BEYOND THE EXPECTED.</span><a href="#music">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
