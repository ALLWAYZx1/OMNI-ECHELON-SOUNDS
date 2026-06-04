export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="OMNI ECHELON SOUNDS"
              className="h-12 w-auto opacity-95 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]"
            />
          </div>

          <nav className="hidden gap-6 text-sm text-white/75 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#sound" className="transition hover:text-white">Sound</a>
            <a href="#world" className="transition hover:text-white">World</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[18%] top-[48%] h-[420px] w-[420px] rounded-full bg-yellow-400/20 blur-[120px]" />
            <div className="absolute right-[18%] top-[35%] h-[380px] w-[380px] rounded-full bg-blue-500/15 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_75%)]" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute left-[20%] top-[55%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_rgba(250,204,21,0.7)_25%,_rgba(168,85,247,0.5)_45%,_rgba(59,130,246,0.25)_65%,_transparent_80%)] blur-[35px] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,0.6),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,0.4),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.7))]" />
          </div>

          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_520px]">

              {/* LEFT */}
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
                  Entry point
                </div>

                <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    ALL LEVELS of SOUNDS
                  </span>
                </h1>

                <div className="mt-8 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-transparent bg-gradient-to-r from-white via-indigo-300 to-purple-300 bg-clip-text">
                    CINEMATIC PRESSURE
                  </p>

                  <p className="max-w-xl text-sm italic tracking-[0.25em] text-white/60 sm:text-base">
                    ENTER TO EXPERIENCE WHAT THIS ATMOSPHERE HAS IN VISION, SOUND AND MOTION ACROSS ALL SPECTRUMS
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#about" className="rounded-2xl border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.22em]">
                    Enter
                  </a>

                  <a href="https://www.instagram.com/allwayzinthemixx" target="_blank" rel="noopener noreferrer"
                    className="rounded-2xl border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.22em]">
                    Instagram
                  </a>
                </div>

                {/* Apple */}
                <div className="mt-10">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-pink-400">
                    APPLE MUSIC
                  </p>

                  <iframe
                    src="https://embed.music.apple.com/us/album/emotions-in-motion/1895465650"
                    width="100%"
                    height="300"
                    style={{ borderRadius: "12px" }}
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full max-w-[520px] space-y-6">

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
                    NOW PLAYING
                  </p>

                  <iframe
                    className="w-full aspect-video rounded-2xl"
                    src="https://www.youtube.com/embed/5Bb81O1u2o0"
                    allowFullScreen
                  />
                </div>

                <div className="flex gap-4 text-xs uppercase text-white/60">
                  <a href="https://youtube.com/shorts/5Bb81O1u2o0">Watch →</a>
                  <a href="https://www.youtube.com/@ALLWAYZWORLD">Channel →</a>
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
                    SOUND
                  </p>

                  <iframe
                    src="https://open.spotify.com/embed/artist/7lu8CK1gQztFv3rlB0hqsb?theme=0"
                    width="100%"
                    height="152"
                  />

                  <iframe
                    className="mt-4 rounded-2xl"
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2329824383"
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* TRANSMISSION */}
        <section className="relative w-full border-y border-white/10 bg-black">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/rfip6Ix-SgA"
              allowFullScreen
            />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </section>

        {/* ARTIST DEV */}
        <section className="relative w-full border-b border-white/10 bg-black overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 py-10">
            <iframe
              className="w-full aspect-[16/9] rounded-xl"
              src="https://www.youtube.com/embed/MLIAyB5Efq8"
              allowFullScreen
            />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2>FILL THE VOID</h2>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2>Sound</h2>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2>World</h2>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2>Contact</h2>
          </div>
        </section>

      </main>
    </div>
  );
}
