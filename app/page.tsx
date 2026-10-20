const TRACKS = [
  "CINEMATIC PRESSURE",
  "BIGGER THAN LIFE",
  "MAKE IT THROUGH",
  "ELEVATE",
  "HANDS IN THE SKY",
  "DISTRACTIONS",
  "CAN'T AFFORD REFLECTIONS",
  "PREPARE FOR LANDING",
];

const SERVICES = [
  {
    num: "01",
    title: "POCKET LOCKING",
    body: "Timing. Bounce. Flow. We hit different — your delivery sits IN the beat, not on top of it.",
    accent: "text-yellow-300",
  },
  {
    num: "02",
    title: "VOCAL TRANSLATION",
    body: "Bring the emotion forward. Make it felt. The feeling you had when you wrote it is the feeling they get when they hear it.",
    accent: "text-pink-400",
  },
  {
    num: "03",
    title: "ARTIST DEVELOPMENT",
    body: "Find your sound. Build your lane. Level up with direction instead of guessing.",
    accent: "text-cyan-300",
  },
  {
    num: "04",
    title: "SOUND IDENTITY",
    body: "So you don't sound like everybody else. Sound like YOU — a signature, not a copy.",
    accent: "text-purple-300",
  },
];

const MERCH = [
  {
    name: "Celestial Flame Unisex Champion Graphic Hoodie",
    price: "$79.71",
    img: "https://cdn.shopify.com/s/files/1/1017/7223/0937/files/allwayz-celestial-flame-unisex-champion-hoodie-03.png?v=1791301765",
    href: "https://www.weriseabove.life/products/celestial-flame-unisex-champion-graphic-hoodie",
  },
  {
    name: "Lucky Energy x WRA World Domination Hoodie",
    price: "$88.57",
    img: "https://cdn.shopify.com/s/files/1/1017/7223/0937/files/lucky-energy-x-wra-world-domination-01.png?v=1788249666",
    href: "https://www.weriseabove.life/products/lucky-energy-x-wra-world-domination-hoodie",
  },
  {
    name: "ALLWAYZ NEVER SETTLE™ | Cosmic Rebellion Hoodie",
    price: "$79.71",
    img: "https://cdn.shopify.com/s/files/1/1017/7223/0937/files/hero-q75_eaed65a9-b415-496b-89a2-107fc0ac27d3.webp?v=1792119057",
    href: "https://www.weriseabove.life/products/allwayz-never-settle™-cosmic-rebellion-hoodie",
  },
  {
    name: "WRA Darkest Nights Hoodie – Heavyweight Pullover",
    price: "$70.85",
    img: "https://cdn.shopify.com/s/files/1/1017/7223/0937/files/wra-darkest-nights-premium-hoodie-heavyweight-unisex-prezzureverse.jpg?v=1791301340",
    href: "https://www.weriseabove.life/products/wra-darkest-nights-premium-hoodie",
  },
];

export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-yellow-400 selection:text-black">
      {/* COSMIC BACKDROP */}
      <div className="stars-bg pointer-events-none fixed inset-0 z-0" />
      <div className="pointer-events-none fixed -top-40 left-1/2 z-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[160px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 z-0 h-[380px] w-[520px] rounded-full bg-purple-600/10 blur-[140px]" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/45">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <img src="/oes-logo.webp" alt="OMNI ECHELON SOUNDS" className="h-12 w-auto transition duration-500 hover:scale-105 sm:h-14" />
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70 md:flex">
            <a href="#sound" className="transition hover:text-yellow-300">Sound</a>
            <a href="#services" className="transition hover:text-yellow-300">Work With Me</a>
            <a href="#transmission" className="transition hover:text-yellow-300">Transmission</a>
            <a href="#merch" className="transition hover:text-yellow-300">Merch</a>
            <a href="#world" className="transition hover:text-yellow-300">World</a>
          </nav>
          <a href="https://www.instagram.com/allwayzinthemixx" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.22em] text-black transition hover:scale-105">
            DM &ldquo;LOCK IN&rdquo;
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative overflow-hidden pt-36 sm:pt-44">
          <div className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-black uppercase leading-none text-white/[0.03]">
            OMNI
          </div>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,255,150,.95)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-300">Signal Live — Transmission 002</span>
            </div>
            <h1 className="mt-10 font-black uppercase leading-[0.85] tracking-tight">
              <span className="block text-[13.5vw] text-white sm:text-8xl lg:text-[9rem]">Omni</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-600 bg-clip-text text-[13.5vw] text-transparent sm:text-8xl lg:text-[9rem]">Echelon</span>
              <span className="text-outline block text-[13.5vw] sm:text-8xl lg:text-[9rem]">Sounds</span>
            </h1>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-2xl font-bold uppercase leading-tight tracking-wide sm:text-4xl">
                  Your sound is there. <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">I help you hear it.</span>
                </p>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                  You don&rsquo;t sound bad — you&rsquo;re just not locked in yet. Cinematic production, artist development, and sound identity from the labelverse of ALLWAYZ.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#sound" className="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-xs font-black uppercase tracking-[0.28em] text-black transition hover:scale-105">Enter the Sound</a>
                  <a href="#services" className="rounded-2xl border border-white/15 bg-white/[0.03] px-8 py-4 text-xs font-bold uppercase tracking-[0.28em] text-white backdrop-blur transition hover:border-yellow-400/50 hover:text-yellow-300">Work With Me</a>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div><p className="text-2xl font-black text-yellow-400">01</p><p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50">Artist</p></div>
                <div><p className="text-2xl font-black text-cyan-300">02</p><p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50">Producer</p></div>
                <div><p className="text-2xl font-black text-purple-300">03</p><p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50">Engineer</p></div>
              </div>
            </div>
          </div>
          {/* TICKER */}
          <div className="relative mt-20 overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
            <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
              {[...TRACKS, ...TRACKS].map((t, i) => (
                <span key={i} className="flex items-center gap-8 text-sm font-black uppercase tracking-[0.35em] text-white/70">
                  {t} <span className="text-yellow-400">✦</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* NOW PLAYING */}
        <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-pink-400">Now Playing</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">Emotions <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">in Motion</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">The album. Seven songs, one motion. Press play and stay in it.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
              <iframe src="https://embed.music.apple.com/us/album/emotions-in-motion/1895465650" width="100%" height="450" style={{ borderRadius: "16px" }} allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" title="Emotions in Motion on Apple Music" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
              <iframe src="https://open.spotify.com/embed/artist/7lu8CK1gQztFv3rlB0hqsb?utm_source=generator&theme=0" width="100%" height="450" style={{ borderRadius: "16px" }} allow="autoplay; clipboard-write; encrypted-media" title="ALLWAYZ on Spotify" />
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" title="ALLWAYZ on SoundCloud" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2329824383&color=%23f5c518&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          </div>
        </section>

        {/* THE SOUND */}
        <section id="sound" className="relative border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/40">The Sound</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">What lives in this world</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Cinematic", "Heavy emotion, movement, scale, and impact."],
                ["Dark", "Shadow, pressure, tension, and weight."],
                ["Post-Time", "Not retro. Not futuristic. Somewhere beyond both."],
                ["Personal", "A signature sound world, not filler for the shelf."],
              ].map(([title, body]) => (
                <div key={title} className="group rounded-[1.6rem] border border-white/10 bg-black/40 p-7 transition duration-500 hover:border-yellow-400/40 hover:bg-white/[0.04]">
                  <div className="text-lg font-black uppercase tracking-wide transition group-hover:text-yellow-300">{title}</div>
                  <p className="mt-3 text-sm leading-6 text-white/60">{body}</p>
                </div>
              ))}
            </div>
            {/* CATALOG INDEX */}
            <div className="mt-16">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.45em] text-yellow-400">Catalog // Selected Works</p>
              <div className="divide-y divide-white/[0.07] border-y border-white/10">
                {TRACKS.map((t, i) => (
                  <a key={t} href="https://open.spotify.com/artist/7lu8CK1gQztFv3rlB0hqsb" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4 transition hover:bg-white/[0.02] sm:py-5">
                    <span className="flex items-baseline gap-5">
                      <span className="text-xs font-bold text-white/30">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-black uppercase tracking-wide transition group-hover:text-yellow-300 sm:text-2xl">{t}</span>
                    </span>
                    <span className="flex items-end gap-[3px]" aria-hidden="true">
                      {[10, 18, 7, 14, 9].map((h, j) => (
                        <span key={j} className="eq-bar w-[3px] rounded bg-gradient-to-t from-yellow-500 to-orange-400" style={{ height: `${h}px`, animationDelay: `${j * 0.13}s` }} />
                      ))}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
          <div className="pointer-events-none absolute right-0 top-10 select-none text-[11rem] font-black uppercase leading-none text-white/[0.025]">Lock In</div>
          <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-yellow-400">Artist Development Label</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">Mixing • Timing • <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">Identity</span></h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">We don&rsquo;t just develop artists. We develop presence. Every session is about refining your sound, defining your identity, and building a catalog that connects long after the music stops. The goal isn&rsquo;t to be heard. It&rsquo;s to be remembered.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.num} className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition duration-500 hover:border-white/25 hover:bg-white/[0.05]">
                <p className={`text-xs font-black tracking-[0.3em] ${s.accent}`}>{s.num}</p>
                <h3 className="mt-4 text-2xl font-black uppercase tracking-wide">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-yellow-400/25 bg-gradient-to-br from-yellow-400/[0.10] via-white/[0.03] to-orange-500/[0.08] p-8 sm:p-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-yellow-300">Serious Artists Only</p>
            <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-5xl">Release ready, not demo ready.</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">One message starts it. DM the words and we build your sound from where it actually is.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://www.instagram.com/allwayzinthemixx" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-xs font-black uppercase tracking-[0.25em] text-black transition hover:scale-105">DM &ldquo;LOCK IN&rdquo; →</a>
              <a href="mailto:omniechelonsounds@gmail.com?subject=LOCK%20IN%20—%20Artist%20Development&body=Name:%0AArtist%20name:%0AWhere%20your%20sound%20is%20right%20now:%0AWhere%20you%20want%20it:" className="rounded-2xl border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] transition hover:border-yellow-400/50 hover:text-yellow-300">Email the Label</a>
            </div>
          </div>
        </section>

        {/* TRANSMISSION */}
        <section id="transmission" className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-black via-[#0a0703] to-black">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />
          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,255,150,.95)]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-emerald-300">New Signal</p>
            </div>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">Next Music Star</h2>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.4em] text-yellow-400">ALLWAYZ • 2026</p>
            <div className="mt-10 rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.08] via-white/[0.03] to-purple-500/[0.08] p-8 sm:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-yellow-400">Artist Feature // ALLWAYZ</p>
              <h3 className="mt-5 max-w-3xl text-3xl font-black uppercase leading-tight sm:text-5xl">The next chapter starts here.</h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">A new stage. A new signal. Discover ALLWAYZ on Next Music Star 2026 — watch the performances and show your support.</p>
              <a href="https://thenextmusicstar.com/2026/allwayz" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:scale-105">Visit ALLWAYZ on Next Music Star →</a>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/45">Bigger Than Life — Official Video</p>
                <div className="relative w-full overflow-hidden rounded-3xl border border-white/10" style={{ paddingBottom: "56.25%" }}>
                  <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/5Bb81O1u2o0" title="Bigger Than Life" allowFullScreen />
                </div>
              </div>
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/45">Artist Development — The Signal</p>
                <div className="relative w-full overflow-hidden rounded-3xl border border-white/10" style={{ paddingBottom: "56.25%" }}>
                  <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/MLIAyB5Efq8" title="Artist Development Signal" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PODCAST */}
        <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-yellow-400">The Podcast</p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">Shift<br />Unleashed</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-white/60">Branding, fashion, music, entrepreneurship, intentional living — real talk from inside the grind, by ALLWAYZintheMIXX.</p>
              <div className="mt-6 flex items-center gap-[3px]" aria-hidden="true">
                {[14, 24, 10, 30, 16, 26, 8, 20, 12, 28, 18, 9, 22, 15].map((h, i) => (
                  <span key={i} className="eq-bar w-[3px] rounded bg-gradient-to-t from-yellow-500 to-orange-400" style={{ height: `${h}px`, animationDelay: `${i * 0.11}s` }} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
              <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/show/033qOrQMBPcl0YymleZYNE?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Shift Unleashed podcast" />
            </div>
          </div>
        </section>

        {/* MERCH */}
        <section id="merch" className="relative border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/40">New Arrivals</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">We Rise Above <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">Collection</span></h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">Forged under pressure, built to endure. Each piece embodies resilience — for those who rise above the noise and move with quiet intention.</p>
            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {MERCH.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <p className="mt-3 text-sm leading-5 text-white/75 transition group-hover:text-white">{item.name}</p>
                  <p className="mt-1 text-sm font-bold text-yellow-300">{item.price}</p>
                </a>
              ))}
            </div>
            <div className="mt-12">
              <a href="https://www.weriseabove.life/collections/all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 px-8 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-yellow-300 transition hover:bg-yellow-400 hover:text-black">Shop the Full Collection →</a>
            </div>
          </div>
        </section>

        {/* WORLD / ABOUT */}
        <section id="world" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/40">About</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">Fill the Void</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-white/75">
                <p className="text-base leading-7 sm:text-lg">OMNI ECHELON SOUNDS is where sound turns into identity. The goal is not just to make something you hear. The goal is to make something you feel moving through you.</p>
                <p className="text-base leading-7 sm:text-lg">Dark edges. Cinematic weight. Motion. Tension. Release. This is the home of the vision behind the sound — and the energy driving it.</p>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["01", "Statement", "A raw message about what the brand means and where it's headed."],
                  ["02", "Audio", "Featured players, reels, and sonic trailers from the catalog."],
                  ["03", "Presence", "Visual identity, mood, and a clean contact point for serious work."],
                ].map(([num, title, body]) => (
                  <div key={num} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-xs font-black tracking-[0.3em] text-yellow-400">{num}</p>
                    <h3 className="mt-3 text-lg font-black uppercase">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur sm:p-10 lg:sticky lg:top-28">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-400">Core Signal</p>
              <div className="mt-6 space-y-4 text-xl font-bold text-white/90 sm:text-2xl">
                <p>Emotion in motion.</p>
                <p>Cinematic pressure.</p>
                <p>Sound with presence.</p>
                <p className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">Built from instinct, vision, and atmosphere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section id="contact" className="relative border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/40">Contact</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">Connect to the vision.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">Keep it direct. Keep it personal. Serious work only.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="mailto:omniechelonsounds@gmail.com?subject=OMNI%20ECHELON%20INQUIRY&body=Name:%0AProject:%0ABudget:%0AMessage:" className="rounded-2xl bg-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:scale-105">Email</a>
              <a href="https://www.instagram.com/allwayzinthemixx" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/15 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] transition hover:border-yellow-400/50 hover:text-yellow-300">Instagram</a>
              <a href="https://soundcloud.com/allwayzinthemixx" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/15 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] transition hover:border-yellow-400/50 hover:text-yellow-300">SoundCloud</a>
              <a href="https://www.youtube.com/@ALLWAYZWORLD" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/15 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] transition hover:border-yellow-400/50 hover:text-yellow-300">YouTube</a>
            </div>
            <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.3em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Omni Echelon Sounds — All Rights Reserved</p>
              <p>An Omni Echelon world • Under the PREZZURE RIZE flag</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
