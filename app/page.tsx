export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <img
            src="/logo.png"
            alt="OMNI ECHELON SOUNDS"
            className="h-12 w-auto opacity-95 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]"
          />

          <nav className="hidden gap-6 text-sm text-white/75 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#sound" className="hover:text-white">Sound</a>
            <a href="#world" className="hover:text-white">World</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative border-b border-white/10">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_520px]">

              {/* LEFT SIDE */}
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
                  Entry point
                </div>

                <h1 className="text-4xl font-black uppercase tracking-tight text-yellow-400">
                  ALL LEVELS of SOUND
                </h1>

                <p className="mt-6 text-sm italic tracking-[0.25em] text-white/60">
                  ENTER TO EXPERIENCE WHAT THIS ATMOSPHERE HAS IN VISION, SOUND AND MOTION
                </p>

                <div className="mt-8 flex gap-4">
                  <a href="#about" className="rounded-xl border px-6 py-3">ENTER</a>
                  <a href="https://instagram.com" className="rounded-xl border px-6 py-3">INSTAGRAM</a>
                </div>

                {/* SPOTIFY */}
                <div className="mt-8 w-full">
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-green-400">
                    SPOTIFY
                  </p>

                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <iframe
                      src="https://open.spotify.com/embed/album/4BakOY0bxMN1r9ucDRSV9k"
                      width="100%"
                      height="200"
                      allow="autoplay; clipboard-write; encrypted-media"
                    ></iframe>
                  </div>

                  <a
                    href="https://open.spotify.com/album/4BakOY0bxMN1r9ucDRSV9k"
                    target="_blank"
                    className="mt-2 block text-xs text-green-400"
                  >
                    Open in Spotify →
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full max-w-[520px] justify-self-end">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-yellow-400">
                  NOW PLAYING
                </p>

                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <iframe
                    className="w-full h-[400px]"
                    src="https://www.youtube.com/embed/5Bb81O1u2o0"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">
                    SOUND
                  </p>

                  <iframe
                    className="w-full mt-2 rounded-xl"
                    height="166"
                    src="https://w.soundcloud.com/player/?url=https://soundcloud.com/allwayzinthemixx/toxic_city_freestyle"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-4xl font-bold">FILL THE VOID</h2>
            <p className="mt-4 text-white/70">
              OMNI ECHELON SOUNDS is where sound turns into identity.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
