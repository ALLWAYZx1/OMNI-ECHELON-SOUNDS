export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
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
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">

            <h1 className="text-4xl font-black uppercase">
              ALL LEVELS of SOUNDS
            </h1>

            <div className="mt-6 text-white/60">
              Cinematic Pressure — Vision in motion
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">FILL THE VOID</h2>

            <p className="mt-4 text-white/70 max-w-2xl">
              OMNI ECHELON SOUNDS is where sound becomes identity.
            </p>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16">

            <h2 className="text-2xl font-bold uppercase">Sound</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                ["Cinematic", "Heavy emotion, movement, scale, and impact."],
                ["Dark", "Shadow, tension, weight."],
                ["Post-Time", "Beyond retro or futuristic."],
                ["Personal", "Signature sound world."],
              ].map(([title, body]) => (
                <div key={title} className="border border-white/10 rounded-2xl p-6">
                  <div className="font-semibold uppercase">{title}</div>
                  <p className="text-white/70 text-sm mt-2">{body}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">

            <h2 className="text-2xl font-bold uppercase">World</h2>

            <p className="mt-4 text-white/70">
              A page with presence — visuals, audio, and identity.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {["Statement", "Audio", "Presence"].map((t, i) => (
                <div key={t} className="border border-white/10 rounded-2xl p-6 bg-white/5">
                  <div className="text-yellow-400 text-xs">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-2 font-semibold uppercase">{t}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16">

            <h2 className="text-2xl font-bold uppercase">Contact</h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="px-6 py-3 bg-white text-black rounded-xl" href="mailto:Omniechelonsounds@gmail.com">
                Email
              </a>

              <a className="px-6 py-3 border rounded-xl" href="https://instagram.com/allwayzinthemixx">
                Instagram
              </a>

              <a className="px-6 py-3 border rounded-xl" href="https://soundcloud.com/allwayzinthemixx">
                SoundCloud
              </a>

              <a className="px-6 py-3 border rounded-xl" href="https://youtube.com/@ALLWAYZWORLD">
                YouTube
              </a>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
