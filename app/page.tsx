export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* FLOATING ATMOSPHERE LAYERS */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px] animate-pulse" />
        <div className="absolute right-[-10%] top-[30%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute left-[20%] bottom-[-20%] h-[700px] w-[700px] rounded-full bg-yellow-400/10 blur-[180px]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <img src="/logo.png" className="h-12 w-auto" />

          <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-white/60 md:flex">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#sound" className="hover:text-white transition">Sound</a>
            <a href="#world" className="hover:text-white transition">World</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">

        {/* HERO */}
        <section className="relative h-[90vh] flex items-center justify-center text-center border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
              ALL LEVELS <br /> OF SOUND
            </h1>

            <p className="mt-6 text-white/60 tracking-[0.3em] uppercase text-xs md:text-sm">
              cinematic pressure • motion identity • sonic architecture
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <a className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition">
                Enter
              </a>
              <a className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                Explore
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-28 border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold uppercase tracking-wide">
              FILL THE VOID
            </h2>

            <p className="mt-6 text-white/70 leading-7">
              OMNI ECHELON SOUNDS is a motion-based sound identity system.
              It exists between cinematic emotion and experimental space.
            </p>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="py-28 border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold uppercase">Sound Architecture</h2>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                ["Cinematic", "Scale, emotion, gravity"],
                ["Dark", "Pressure, tension, shadow"],
                ["Post-Time", "Beyond eras"],
                ["Personal", "Signature sonic DNA"],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <div className="uppercase tracking-[0.25em] text-xs text-white/60">
                    {t}
                  </div>
                  <p className="mt-3 text-white/80">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="py-28 border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold uppercase">World Layer</h2>

            <div className="mt-10 relative">
              <div className="h-64 rounded-3xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-yellow-400/10 blur-0 border border-white/10" />
            </div>

            <p className="mt-8 text-white/70">
              A living visual field for sound, identity, and motion artifacts.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-28 bg-white/[0.02]">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold uppercase">Contact Signal</h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <a className="px-6 py-3 bg-white text-black rounded-xl">
                Email
              </a>
              <a className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                Instagram
              </a>
              <a className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                SoundCloud
              </a>
              <a className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                YouTube
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
