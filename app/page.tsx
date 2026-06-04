export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <img
            src="/logo.png"
            alt="OMNI ECHELON SOUNDS"
            className="h-12 w-auto"
          />

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
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
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1fr_520px]">

            {/* LEFT */}
            <div>
              <h1 className="text-4xl font-bold uppercase">
                ALL LEVELS OF SOUND
              </h1>

              <p className="mt-4 text-white/60">
                Cinematic pressure across motion and emotion.
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
                  allow="autoplay *; encrypted-media *;"
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full">

              {/* SPOTIFY */}
              <div className="mb-4">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-green-400">
                  Spotify
                </p>

                <iframe
                  src="https://open.spotify.com/embed/artist/7lu8CK1gQztFv3rlB0hqsb"
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write"
                  className="rounded-xl"
                />
              </div>

              {/* SOUNDCLOUD */}
              <div className="mb-6">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-orange-400">
                  SoundCloud
                </p>

                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  allow="autoplay"
                  className="rounded-xl"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2329824383"
                />
              </div>

              {/* YOUTUBE (UNDER SOUND, FULL WIDTH OF RIGHT SIDE) */}
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-yellow-400">
                  YouTube Transmission
                </p>

                <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <div className="relative pb-[56.25%]">
                    <iframe
                      className="absolute left-0 top-0 h-full w-full"
                      src="https://www.youtube.com/embed/rfip6Ix-SgA"
                      title="Omni Echelon Transmission"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold uppercase">About</h2>
            <p className="mt-4 text-white/70">
              OMNI ECHELON SOUNDS is cinematic identity through sound.
            </p>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="border-b border-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold uppercase">Sound</h2>
            <p className="mt-4 text-white/70">
              Dark, emotional, atmospheric sound design.
            </p>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="border-b border-white/10 px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold uppercase">World</h2>
            <p className="mt-4 text-white/70">
              A cinematic universe built from sound and motion.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold uppercase">Contact</h2>

            <a
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-black"
              href="mailto:Omniechelonsounds@gmail.com"
            >
              Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
