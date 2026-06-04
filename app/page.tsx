export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <img src="/logo.png" alt="OMNI ECHELON SOUNDS" className="h-12 w-auto" />

          <nav className="hidden gap-6 text-sm text-white/75 md:flex">
            <a href="#about">About</a>
            <a href="#sound">Sound</a>
            <a href="#world">World</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8">

            {/* LEFT */}
            <div>
              <h1 className="text-4xl font-black uppercase">
                ALL LEVELS OF SOUNDS
              </h1>

              <p className="mt-6 text-white/70">
                Cinematic pressure. Motion. Emotion in sound.
              </p>

              {/* APPLE MUSIC */}
              <div className="mt-10">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-pink-400">
                  Apple Music
                </p>

                <iframe
                  src="https://embed.music.apple.com/us/album/emotions-in-motion/1895465650"
                  width="100%"
                  height="300"
                  className="rounded-xl"
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-orange-400">
                SoundCloud
              </p>

              <iframe
                width="100%"
                height="300"
                className="rounded-xl"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2329824383"
              />
            </div>

            {/* FULL WIDTH YOUTUBE (UNDER BOTH COLUMNS) */}
            <div className="lg:col-span-2 mt-10">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-400">
                Transmission
              </p>

              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.youtube.com/embed/rfip6Ix-SgA"
                  title="Transmission"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">About</h2>
            <p className="mt-4 text-white/70">
              Sound identity worldbuilding.
            </p>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">Sound</h2>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">World</h2>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">Contact</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
