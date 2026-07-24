export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
{/* HEADER */}
<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/45">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

    {/* TOP ROW */}
    <div className="flex items-center justify-between">

      {/* LOGO */}
      <img
        src="/logo.png"
        alt="OMNI ECHELON SOUNDS"
        className="h-11 sm:h-14 w-auto transition duration-500 hover:scale-105"
      />

      {/* NAV */}
<nav className="flex items-center gap-8 text-[11px] uppercase tracking-[0.28em] text-white/55">
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
<div className="relative -mt-1 flex flex-col items-center text-center">

  {/* Main Brand */}
  <h1 className="bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 bg-clip-text text-[11px] font-black uppercase tracking-[0.4em] text-transparent sm:text-sm">
    OMNI ECHELON SOUNDS
  </h1>

  {/* Signal Status */}
  <div className="mt-2 flex items-center gap-2">
    <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse"></span>

    <p className="text-[8px] uppercase tracking-[0.35em] text-green-300">
      SIGNAL ACTIVE
    </p>
  </div>

  {/* Artist */}
  <p className="mt-2 text-[8px] uppercase tracking-[0.35em] text-white/80">
    TRANSMISSION • ALLWAYZintheMIXX
  </p>

  {/* Building Dreams */}
  <p className="mt-1 text-[7px] uppercase tracking-[0.4em] text-yellow-400/80">
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
{/* LEFT SIDE */}
<div className="relative max-w-2xl">

  {/* Watermark */}
  <div className="pointer-events-none absolute -left-8 -top-10 -z-10 text-[180px] font-black uppercase tracking-tight text-white/[0.03]">
    OMNI
  </div>

  {/* Live Signal */}
  <div className="mb-5 flex items-center gap-3">
    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(74,222,128,.9)]"></span>

    <span className="text-[10px] uppercase tracking-[0.45em] text-emerald-300">
      SIGNAL LIVE
    </span>
  </div>

  {/* Transmission Badge */}
  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,.03)]">
    <span className="text-[10px] uppercase tracking-[0.42em] text-yellow-300">
      TRANSMISSION 001
    </span>
  </div>

  <p className="mt-3 text-[10px] uppercase tracking-[0.38em] text-white/45">
    EMOTIONS IN MOTION
  </p>

  {/* Headline */}
  <h1 className="mt-8 max-w-xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
    <span className="block text-white">
      ALL LEVELS
    </span>

    <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(250,204,21,.4)]">
      OF SOUND.
    </span>
  </h1>

  {/* Artist Roles */}
  <div className="mt-8 flex flex-wrap gap-8 text-xs uppercase tracking-[0.32em] text-white/40">

    <div>
      <p className="text-yellow-400">01</p>
      <p>Artist</p>
    </div>

    <div>
      <p className="text-cyan-400">02</p>
      <p>Producer</p>
    </div>

    <div>
      <p className="text-purple-400">03</p>
      <p>Engineer</p>
    </div>

  </div>

  {/* Subtitle */}
  <div className="mt-10 space-y-4">

    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-transparent bg-gradient-to-r from-white via-indigo-300 to-purple-300 bg-clip-text">
      CINEMATIC PRESSURE
    </p>

    <p className="max-w-xl text-base leading-8 text-white/65">
      Enter a world where cinematic production, visual storytelling,
      and modern sound move together across every frequency.
    </p>

    <p className="text-[11px] uppercase tracking-[0.42em] text-white/35">
      EMOTION • FREQUENCY • MOTION • CINEMA
    </p>

  </div>

  {/* Buttons */}
  <div className="mt-10 flex flex-wrap gap-4">

    <a
      href="#about"
      className="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 text-sm font-bold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(250,204,21,.45)]"
    >
      ENTER
    </a>

    <a
      href="https://www.instagram.com/allwayzinthemixx"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-3 text-sm uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/[0.05]"
    >
      INSTAGRAM
    </a>

  </div>

  {/* Divider */}
  <div className="my-10 h-px w-40 bg-gradient-to-r from-yellow-400 via-white/40 to-transparent" />

  {/* Apple Music */}
  <div>

    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-pink-400">
      LISTEN
    </p>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,.03)]">

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

</div>

{/* RIGHT SIDE */}
<div className="relative w-full max-w-[560px] justify-self-end">

  {/* Ambient Glow */}
  <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-[130px]" />
  <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[150px]" />

  {/* HEADER */}
  <div className="mb-6 flex items-center justify-between">

    <div>

      <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-emerald-300">

        <span className="relative flex h-2 w-2">

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"></span>

          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300"></span>

        </span>

        SIGNAL ACTIVE

      </p>

      <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.18em]">
        ARTIST DEVELOPMENT
      </h3>

      <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/45">
        OMNI SIGNAL // ALLWAYZ
      </p>

    </div>

    <div className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-300 backdrop-blur-xl">
      4K LIVE
    </div>

  </div>

  {/* VIDEO */}
  <div className="overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-black/60 to-black backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,.55)] transition-all duration-500 hover:border-yellow-400/20">

    {/* HUD */}
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

      <div>

        <p className="text-[10px] uppercase tracking-[0.4em] text-yellow-300">
          CURRENT TRANSMISSION
        </p>

        <h4 className="mt-1 text-lg font-bold uppercase">
          ARTIST DEVELOPMENT
        </h4>

      </div>

      <div className="flex items-center gap-2">

        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

        <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-300">
          LIVE
        </span>

      </div>

    </div>

    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>

      <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl">

        <span className="text-[10px] uppercase tracking-[0.35em] text-white">
          OES SIGNAL
        </span>

      </div>

      <iframe
        className="absolute inset-0 h-full w-full"
        src="https://www.youtube.com/embed/MLIAyB5Efq8"
        title="ARTIST DEVELOPMENT SIGNAL"
        allowFullScreen
      />

    </div>

  </div>

  {/* ACTION BUTTONS */}

  <div className="mt-5 grid grid-cols-2 gap-3">

    <a
      href="https://youtube.com/shorts/5Bb81O1u2o0"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/5"
    >

      <p className="text-[10px] uppercase tracking-[0.4em] text-yellow-300">
        WATCH
      </p>

    </a>

    <a
      href="https://www.youtube.com/@ALLWAYZWORLD"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
    >

      <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-300">
        CHANNEL
      </p>

    </a>

  </div>

  {/* LIBRARY */}

  <div className="mt-10">

    <div className="mb-6 flex items-center justify-between">

      <div>

        <p className="text-[10px] uppercase tracking-[0.45em] text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text">
          SIGNAL LIBRARY
        </p>

        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-white/35">
          STREAM EVERY FREQUENCY
        </p>

      </div>

      <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
        MULTI PLATFORM
      </span>

    </div>

    {/* Spotify */}

    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition hover:border-green-400/20 hover:shadow-[0_0_40px_rgba(34,197,94,.08)]">

      <iframe
        src="https://open.spotify.com/embed/artist/7lu8CK1gQztFv3rlB0hqsb?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media"
      />

    </div>

    <div className="my-6 h-px bg-gradient-to-r from-transparent via-yellow-400/25 to-transparent" />

    {/* SoundCloud */}

    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition hover:border-orange-400/20 hover:shadow-[0_0_40px_rgba(251,146,60,.08)]">

      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2329824383&color=%232a1a26&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />

    </div>

    {/* Status */}

    <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">

      <div className="flex justify-between text-xs uppercase tracking-[0.3em]">
        <span className="text-white/45">SIGNAL</span>
        <span className="text-emerald-300">ONLINE</span>
      </div>

      <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.3em]">
        <span className="text-white/45">LOCATION</span>
        <span>CALIFORNIA</span>
      </div>

      <div className="mt-4 flex justify-between text-xs uppercase tracking-[0.3em]">
        <span className="text-white/45">VERSION</span>
        <span>OES 2.0</span>
      </div>

    </div>

  </div>

{/* 🔥 TRANSMISSION STRIP */}
<section className="relative w-full overflow-hidden border-y border-white/10 bg-black">
  <div className="relative h-[320px] w-full overflow-hidden md:h-[380px] lg:h-[420px]">
    <iframe
      className="absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2"
      src="https://www.youtube.com/embed/rfip6Ix-SgA?rel=0&modestbranding=1&playsinline=1"
      title="Transmission"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
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

<section id="merch" className="bg-black">
  <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="text-xs uppercase tracking-[0.35em] text-yellow-400">
      Merch
    </div>

    <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
      We Rise Above Collection
    </h2>

    <p className="mt-5 text-base leading-7 text-white/70">
      Premium streetwear inspired by resilience, creativity, and rising above.
      Shop the latest collection and wear the movement.
    </p>

    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {[
        {
          name: "Golden Sunrise Portal Hoodie",
          price: "From $56.80",
          img: "https://cdn.shopify.com/s/files/1/0760/8280/6829/files/Golden_SUnrise.jpg?v=1784711087",
          href: "https://weriseabove.life/products/golden-sunrise-portal-hoodie",
        },
        {
          name: "Through the Darkest Nights",
          price: "From $59.99",
          img: "https://cdn.shopify.com/s/files/1/0760/8280/6829/files/darkest_nights.png?v=1784674067",
          href: "https://weriseabove.life/products/through-the-darkest-nights",
        },
        {
          name: "Still Rising No Final Form",
          price: "From $59.99",
          img: "https://cdn.shopify.com/s/files/1/0760/8280/6829/files/C6376E47-18F7-42EA-9C3B-A85918D3D1B2.png?v=1784674595",
          href: "https://weriseabove.life/products/still-rising-no-final-form",
        },
        {
          name: "Darkest Nights Classic Tee",
          price: "$29.99",
          img: "https://cdn.shopify.com/s/files/1/0760/8280/6829/files/unisex-classic-tee-black-front-6a538910c4949.png?v=1784673607",
          href: "https://weriseabove.life/products/darkest-nights-classic-tee",
        },
      ].map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="overflow-hidden rounded-xl border border-white/10">
            <img
              src={item.img}
              alt={item.name}
              className="w-full object-cover transition group-hover:scale-105"
            />
          </div>
          <p className="mt-2 text-sm text-white/70">{item.name}</p>
          <p className="text-sm font-semibold text-yellow-400">{item.price}</p>
        </a>
      ))}
    </div>

    <a
      href="https://weriseabove.life/collections/all"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 inline-block rounded-full border border-yellow-400 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
    >
      Shop We Rise Above →
    </a>
  </div>
</section>





        <section
  id="contact"
  className="relative overflow-hidden border-t border-white/10 bg-black"
>
  {/* Background */}
  <div className="pointer-events-none absolute inset-0">

    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[170px]" />

    <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.85)_80%)]" />

  </div>

  <div className="relative mx-auto max-w-6xl px-4 py-24">

    <div className="rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,.55)]">

      <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">

        {/* LEFT */}

        <div>

          <p className="text-[11px] uppercase tracking-[0.45em] text-yellow-400">
            FINAL TRANSMISSION
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-6xl">

            LET'S BUILD
            <br />
            SOMETHING
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              {" "}BIGGER.
            </span>

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">

            Music.
            Visual identity.
            Artist development.
            Brand worlds.

            If your vision deserves cinematic execution,
            this is where the signal starts.

          </p>

        </div>

        {/* RIGHT */}

        <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">

          <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">
            SIGNAL STATUS
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex justify-between text-sm uppercase tracking-[0.22em]">
              <span className="text-white/45">Studio</span>
              <span className="text-emerald-300">ONLINE</span>
            </div>

            <div className="flex justify-between text-sm uppercase tracking-[0.22em]">
              <span className="text-white/45">Response</span>
              <span>24-48 Hours</span>
            </div>

            <div className="flex justify-between text-sm uppercase tracking-[0.22em]">
              <span className="text-white/45">Projects</span>
              <span>Worldwide</span>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            <a
              href="mailto:Omniechelonsounds@gmail.com?subject=OMNI%20ECHELON%20INQUIRY"
              className="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.28em] text-black transition hover:scale-105"
            >
              EMAIL
            </a>

            <a
              href="https://www.instagram.com/allwayzinthemixx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.28em] hover:bg-white/5"
            >
              INSTAGRAM
            </a>

            <a
              href="https://soundcloud.com/allwayzinthemixx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.28em] hover:bg-white/5"
            >
              SOUNDCLOUD
            </a>

            <a
              href="https://www.youtube.com/@ALLWAYZWORLD"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.28em] hover:bg-white/5"
            >
              YOUTUBE
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
