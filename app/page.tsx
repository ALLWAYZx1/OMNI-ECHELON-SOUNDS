export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">

   {/* HEADER */}
<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/45">

  <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4">

    {/* TOP ROW */}
    <div className="flex items-center justify-between">

      {/* LOGO */}
      <img
        src="/logo.png"
        alt="OMNI ECHELON SOUNDS"
        className="h-14 sm:h-16 w-auto transition duration-500 hover:scale-105"
      />

      {/* MOBILE MENU */}
      <button
        className="md:hidden text-white/70 hover:text-yellow-400 transition"
        aria-label="Open Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.6}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.28em] text-white/55">

        <a
          href="#about"
          className="group relative transition-colors duration-300 hover:text-yellow-300"
        >
          About
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
        </a>

        <a
          href="#sound"
          className="group relative transition-colors duration-300 hover:text-yellow-300"
        >
          Sound
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
        </a>

        <a
          href="#world"
          className="group relative transition-colors duration-300 hover:text-yellow-300"
        >
          World
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
        </a>

        <a
          href="#contact"
          className="group relative transition-colors duration-300 hover:text-yellow-300"
        >
          Contact
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
        </a>

      </nav>

    </div>

    {/* CENTER TITLE */}
    <div className="mt-4 flex flex-col items-center text-center">

      {/* Main Brand */}
      <h1 className="bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent text-xs sm:text-sm font-black uppercase tracking-[0.42em]">
        OMNI ECHELON SOUNDS
      </h1>

      {/* Signal */}
      <div className="mt-3 flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.9)] animate-pulse" />

        <p className="text-[9px] uppercase tracking-[0.35em] text-green-300">
          SIGNAL ACTIVE
        </p>
      </div>

      {/* Artist */}
      <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-white/80">
        TRANSMISSION • ALLWAYZintheMIXX
      </p>

      {/* Building Dreams */}
      <p className="mt-2 text-[8px] uppercase tracking-[0.4em] text-yellow-400/80">
        BUILDING DREAMS • ONLINE
      </p>

    </div>

  </div>

</header>
  
    <main className="pt-28 sm:pt-24">
<section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-black via-[#040507] to-black">
  <div className="pointer-events-none absolute inset-0">
  <div className="absolute left-[18%] top-[48%] h-[420px] w-[420px] rounded-full bg-yellow-400/20 blur-[120px]" />
  <div className="absolute right-[18%] top-[35%] h-[380px] w-[380px] rounded-full bg-blue-500/15 blur-[120px]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_75%)]" />
</div>

 {/* CINEMATIC COSMOS */}
<div className="pointer-events-none absolute inset-0">

  <div className="absolute left-[18%] top-[45%] h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[180px]" />

  <div className="absolute right-[15%] top-[30%] h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[180px]" />

  <div className="absolute bottom-[-180px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/5 blur-[220px]" />

  {/* Stars */}
  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,.7)_1px,transparent_1px),radial-gradient(circle_at_75%_60%,rgba(255,255,255,.5)_1px,transparent_1px),radial-gradient(circle_at_45%_80%,rgba(255,255,255,.35)_1px,transparent_1px)] bg-[length:260px_260px]" />

  {/* Vignette */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.85)_95%)]" />

</div>
  <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_520px]">

{/* LEFT SIDE */}
<div className="relative max-w-2xl">

  {/* Watermark */}
  <div className="pointer-events-none absolute -left-8 -top-10 -z-10 text-[180px] font-black uppercase tracking-tight text-white/[0.03]">
    OMNI
  </div>

  {/* Live Signal */}
  <div className="mb-4 flex items-center gap-3">
    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(74,222,128,.9)]"></span>

    <span className="text-[10px] uppercase tracking-[0.45em] text-emerald-300">
      SIGNAL LIVE
    </span>
  </div>

  {/* Transmission */}
  <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl">
    <span className="text-[10px] uppercase tracking-[0.42em] text-yellow-300">
      TRANSMISSION 001
    </span>
  </div>

  {/* Headline */}
  <h1 className="mt-8 text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">

    <span className="block text-white">
      ALL LEVELS
    </span>

    <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
      OF SOUND.
    </span>

  </h1>

  {/* Description */}
  <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
    Enter a world where cinematic production, visual storytelling,
    artist development, and modern sound move together across every
    frequency.
  </p>

  {/* CTA */}
  <div className="mt-10 flex flex-wrap gap-4">

    <a
      href="#about"
      className="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 text-sm font-bold uppercase tracking-[0.28em] text-black transition hover:scale-105"
    >
      ENTER
    </a>

    <a
      href="https://www.instagram.com/allwayzinthemixx"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-3 text-sm uppercase tracking-[0.28em] transition hover:border-yellow-400/40 hover:bg-white/[0.05]"
    >
      INSTAGRAM
    </a>

  </div>

  {/* Apple Music */}
  <div className="mt-16">

    <div className="mb-4 flex items-center justify-between">

      <p className="text-xs uppercase tracking-[0.35em] text-pink-400">
        NOW PLAYING
      </p>

      <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
        EMOTIONS IN MOTION
      </p>

    </div>

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">

      <iframe
        src="https://embed.music.apple.com/us/album/emotions-in-motion/1895465650"
        width="100%"
        height="300"
        style={{ borderRadius: "16px" }}
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      ></iframe>

    </div>

  </div>

  {/* Roles */}
  <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">

    <div>
      <p className="text-xl font-bold text-yellow-400">01</p>
      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/50">
        Artist
      </p>
    </div>

    <div>
      <p className="text-xl font-bold text-cyan-400">02</p>
      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/50">
        Producer
      </p>
    </div>

    <div>
      <p className="text-xl font-bold text-purple-400">03</p>
      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/50">
        Engineer
      </p>
    </div>

  </div>

</div>

{/* RIGHT SIDE */}
<div className="w-full max-w-[520px] justify-self-end">

  {/* HEADER */}
  <div className="mb-6">
    <p className="text-[10px] uppercase tracking-[0.45em] text-emerald-300">
      ● LIVE TRANSMISSION
    </p>

    <h3 className="mt-2 text-xl font-bold uppercase tracking-[0.22em]">
      ARTIST DEVELOPMENT
    </h3>

    <p className="mt-4 text-sm leading-7 text-white/65">
      We don't just develop artists. We develop presence. Every session is
      focused on refining your sound, defining your identity, and building a
      catalog that connects long after the music stops. Because the goal isn't
      simply to be heard. It's to be remembered.
    </p>

    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
      SIGNAL // ALLWAYZ
    </p>
  </div>

  {/* YOUTUBE */}
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
    <div
      className="relative w-full"
      style={{ paddingBottom: "56.25%" }}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src="https://www.youtube.com/embed/MLIAyB5Efq8"
        title="ARTIST DEVELOPMENT SIGNAL"
        allowFullScreen
      />
    </div>
  </div>
     {/* LINKS */}
        <div className="mt-3 flex gap-4 text-xs uppercase text-white/60">
          <a href="https://youtube.com/shorts/5Bb81O1u2o0" target="_blank">Watch →</a>
          <a href="https://www.youtube.com/@ALLWAYZWORLD" target="_blank">Channel →</a>
        </div>

        {/* SOUND */}
        <div className="mt-6">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
            SOUND
          </p>
   {/* SPOTIFY */}
          <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe
              src="https://open.spotify.com/embed/artist/7lu8CK1gQztFv3rlB0hqsb?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media"
            ></iframe>
          </div>

          {/* SOUNDCLOUD */}
<iframe
  width="100%"
  height="166"
  scrolling="no"
  frameBorder="no"
  allow="autoplay"
  className="rounded-2xl"
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2329824383&color=%232a1a26&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
></iframe>
        </div>

      </div>

    </div>
  </div>
</section>

<section id="merch" className="bg-black">
  <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
      New Arrivals
    </div>

    <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
      WE RISE ABOVE Collection
    </h2>

    <p className="mt-5 text-base leading-7 text-white/70">
      Forged under pressure, built to endure. Each piece embodies resilience —
      for those who rise above the noise and move with quiet intention.
    </p>

    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {[
        {
          name: "Skull Graphic Oversized Hoodie",
          price: "$109.99",
          img: "https://cdn.shopify.com/s/files/1/1017/7223/0937/files/unisex-relax-hoodie-black-front-6a6fdfd940b58.jpg?v=1785723377",
          href: "https://www.weriseabove.life/products/prezzure-skull",
        },
        {
          name: "SKULLZ Champion Sweatshirt",
          price: "$109.99",
          img: "https://cdn.shopify.com/s/files/1/1017/7223/0937/files/mens-champion-crewneck-sweatshirt-black-back-6a750b32cffa5.jpg?v=1786055479",
          href: "https://www.weriseabove.life/products/skullz-champion-sweatshirt",
        },
        {
          name: "Chain Gang Crewneck",
          price: "$109.99",
          img: "https://cdn.shopify.com/s/files/1/1017/7223/0937/files/unisex-crew-neck-sweatshirt-black-front-6a747b90b730e.jpg?v=1786018722",
          href: "https://www.weriseabove.life/products/chain-gang-crewneck",
        },
        {
          name: "SKULLZ Oversized Faded Tee",
          price: "$79.99",
          img: "https://cdn.shopify.com/s/files/1/1017/7223/0937/files/mens-oversized-faded-t-shirt-faded-black-front-6a735c5ec6c9d.jpg?v=1785945319",
          href: "https://www.weriseabove.life/products/skullz-oversized-faded-t-shirt-prezzure-built",
        },
      ].map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900 aspect-[3/4]">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover transition group-hover:scale-105"
            />
          </div>
          <p className="mt-2 text-sm text-white/70">{item.name}</p>
          <p className="text-sm font-semibold text-zinc-300">{item.price}</p>
        </a>
      ))}
    </div>

    <div className="mt-10">
      <a
        href="https://www.weriseabove.life/collections/all"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-400 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-zinc-400 transition hover:bg-zinc-400 hover:text-black"
      >
        Shop New Arrivals →
      </a>
    </div>
  </div>
</section>

        
{/* Bigger Than Life */}
<section className="relative w-full overflow-hidden border-b border-white/10 bg-black">

  {/* subtle glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 blur-[100px]" />
    <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[100px]" />
  </div>

  {/* label */}
  <div className="relative z-10 mx-auto max-w-6xl px-4 pt-8">
    <p className="text-xs uppercase tracking-[0.5em] text-white/60">
      Bigger Than Life
    </p>
  </div>

  {/* smaller video frame */}
  <div className="relative mx-auto max-w-4xl px-4 py-8">
    <div
      className="relative w-full"
      style={{ paddingBottom: "42%" }}
    >
      <iframe
        className="absolute inset-0 h-full w-full rounded-xl"
        src="https://www.youtube.com/embed/5Bb81O1u2o0"
        title="Bigger Than Life"
        allowFullScreen
      />
    </div>
  </div>

  {/* pulse line */}
  <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
</section>
        <section id="about" className="border-b border-white/10">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">About</div>
              <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                FILL THE VOID
              </h2>

              <div className="mt-6 max-w-2xl space-y-5 text-white/80">
                <p className="text-base leading-7 sm:text-lg">
                  OMNI ECHELON SOUNDS is where sound turns into identity. The goal is not just to make something you hear. The goal is to make something you feel moving through you.
                </p>
                <p className="text-base leading-7 sm:text-lg">
                  Dark edges. Cinematic weight. Motion. Tension. Release. This page is a personal space for the vision behind the sound and the energy driving it.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">Core signal</div>
              <div className="mt-6 space-y-4 text-base text-white/85 sm:text-lg">
                <p>Emotion in motion.</p>
                <p>Cinematic pressure.</p>
                <p>Sound with presence.</p>
                <p>Built from instinct, vision, and atmosphere.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sound" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">Sound</div>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                What lives in the world.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                ["Cinematic", "Heavy emotion, movement, scale, and impact."],
                ["Dark", "Shadow, pressure, tension, and weight."],
                ["Post-Time", "Not retro. Not futuristic. Somewhere beyond both."],
                ["Personal", "A signature sound world, not filler for the shelf."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 p-6">
                  <div className="text-lg font-semibold uppercase tracking-wide">{title}</div>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/68">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="world" className="border-b border-white/10">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">World</div>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                A page with presence.
              </h2>

              <div className="mt-10">
                <p className="text-base leading-7 text-white/70">
                  This space can hold visuals, embedded audio, a statement, selected drops, behind-the-scenes ideas, or whatever best represents the OMNI ECHELON SOUNDS universe without turning it into a storefront.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">01</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Statement</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  A raw message about what the brand means and where it’s headed.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">02</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Audio</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  A featured player for one sound piece, reel, or sonic trailer.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">03</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Presence</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  Visual identity, mood imagery, and a clean contact point for serious work.
                </p>
              </div>
            </div>
          </div>
        </section>
      
      {/* 🔥 TRANSMISSION STRIP (FULL WIDTH) */}
<section className="relative w-full border-y border-white/10 bg-black">
  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
    <iframe
      className="absolute inset-0 h-full w-full"
      src="https://www.youtube.com/embed/rfip6Ix-SgA"
      title="Transmission"
      allowFullScreen
    />
  </div>

  {/* pulse line */}
  <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
</section>





        <section id="contact" className="bg-white/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10 lg:p-12">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.35em] text-white/45">Contact</div>
                <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                  Connect to the vision.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/70">
                  Add your email, Instagram, artist links, or one clean contact form here. Keep it direct. Keep it personal.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:Omniechelonsounds@gmail.com?subject=OMNI%20ECHELON%20INQUIRY&body=Name:%0AProject:%0ABudget:%0AMessage:"
                  className="rounded-2xl border border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:scale-105 active:scale-95"
                >
                  Email
                </a>

                <a
                  href="https://www.instagram.com/allwayzinthemixx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Instagram
                </a>

                <a
                  href="https://soundcloud.com/allwayzinthemixx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  SoundCloud
                </a>

                <a
                  href="https://www.youtube.com/@ALLWAYZWORLD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
