export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <img src="/logo.png" className="h-12 w-auto" />

          <nav className="hidden gap-6 text-sm md:flex">
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
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <h1 className="text-4xl font-black uppercase">
                ALL LEVELS OF SOUNDS
              </h1>

              <p className="mt-4 text-white/70">
                Cinematic pressure. Motion. Emotion in sound.
              </p>

              {/* APPLE */}
              <div className="mt-10">
                <p className="mb-3 text-xs uppercase text-pink-400">
                  Apple Music
                </p>

                <iframe
                  src="https://embed.music.apple.com/us/album/emotions-in-motion/1895465650"
                  width="100%"
                  height="300"
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <p className="mb-3 text-xs uppercase text-orange-400">
                SoundCloud
              </p>

              <iframe
                width="100%"
                height="300"
                className="rounded-xl"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2329824383"
              />
            </div>

            {/* FULL WIDTH YOUTUBE */}
            <div className="lg:col-span-2 mt-10">
              <p className="mb-3 text-xs uppercase text-blue-400">
                Transmission
              </p>

              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.youtube.com/embed/rfip6Ix-SgA"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </section>

        {/* OTHER SECTIONS */}
        <section id="about" className="border-b border-white/10 p-16">
          About
        </section>

        <section id="sound" className="border-b border-white/10 p-16">
          Sound
        </section>

        <section id="world" className="border-b border-white/10 p-16">
          World
        </section>

        <section id="contact" className="p-16">
          Contact
        </section>

      </main>
    </div>
  );
}
