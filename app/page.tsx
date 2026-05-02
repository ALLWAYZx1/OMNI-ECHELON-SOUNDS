export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <img src="/logo.png" alt="OMNI ECHELON SOUNDS" className="h-12" />

          <nav className="hidden md:flex gap-6 text-sm text-white/75">
            <a href="#about">About</a>
            <a href="#sound">Sound</a>
            <a href="#world">World</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl font-bold uppercase">
                <span className="text-yellow-400">ALL LEVELS of SOUND</span>
              </h1>

              <p className="mt-6 text-white/60">
                Cinematic pressure. Emotion in motion.
              </p>
            </div>

            {/* RIGHT SIDE PLAYERS */}
            <div>

              {/* YOUTUBE */}
              <p className="mb-2 text-xs uppercase text-yellow-400">Now Playing</p>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/5Bb81O1u2o0"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>

              {/* SPOTIFY */}
              <div className="mt-6">
                <p className="mb-2 text-xs uppercase text-green-400">Spotify</p>

                <iframe
                  src="https://open.spotify.com/embed/album/4BakOY0bxMN1r9ucDRSV9k"
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media"
                ></iframe>
              </div>

              {/* SOUNDCLOUD */}
              <div className="mt-6">
                <p className="mb-2 text-xs uppercase text-orange-400">SoundCloud</p>

                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2313545609&color=%23ff5500"
                ></iframe>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold uppercase">FILL THE VOID</h2>
            <p className="mt-4 text-white/70">
              OMNI ECHELON SOUNDS is where sound turns into identity.
            </p>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold uppercase">Sound</h2>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="py-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold uppercase">World</h2>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold uppercase">Contact</h2>

            <div className="mt-6 flex gap-4 flex-wrap">
              <a href="mailto:Omniechelonsounds@gmail.com" className="border px-4 py-2">Email</a>
              <a href="https://instagram.com/allwayzinthemixx" target="_blank">Instagram</a>
              <a href="https://soundcloud.com/allwayzinthemixx" target="_blank">SoundCloud</a>
              <a href="https://youtube.com/@ALLWAYZWORLD" target="_blank">YouTube</a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
