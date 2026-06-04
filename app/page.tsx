export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
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
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[18%] top-[48%] h-[420px] w-[420px] rounded-full bg-yellow-400/20 blur-[120px]" />
            <div className="absolute right-[18%] top-[35%] h-[380px] w-[380px] rounded-full bg-blue-500/15 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_75%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-20">
            <h1 className="text-4xl font-black uppercase">
              ALL LEVELS of SOUNDS
            </h1>

            <p className="mt-6 text-white/60">
              CINEMATIC PRESSURE — SOUND, MOTION, IDENTITY
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">FILL THE VOID</h2>
            <p className="mt-4 text-white/70">
              OMNI ECHELON SOUNDS is where sound becomes identity.
            </p>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">Sound</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                ["Cinematic", "Heavy emotion, movement, scale"],
                ["Dark", "Pressure and tension"],
                ["Post-Time", "Beyond eras"],
                ["Personal", "Signature identity"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 p-6">
                  <div className="font-semibold uppercase">{t}</div>
                  <p className="mt-2 text-white/60">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">World</h2>
            <p className="mt-4 text-white/70">
              A space for visuals, audio, and identity.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold uppercase">Contact</h2>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:test@email.com"
                className="rounded-xl bg-white px-5 py-2 text-black"
              >
                Email
              </a>

              <a
                href="https://instagram.com/allwayzinthemixx"
                className="rounded-xl border px-5 py-2"
              >
                Instagram
              </a>

              <a
                href="https://soundcloud.com/allwayzinthemixx"
                className="rounded-xl border px-5 py-2"
              >
                SoundCloud
              </a>

              <a
                href="https://www.youtube.com/@ALLWAYZWORLD"
                className="rounded-xl border px-5 py-2"
              >
                YouTube
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
