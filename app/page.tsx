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
                <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(250,204,21,0.35)]">
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

                  <a
                    href="https://www.instagram.com/allwayzinthemixx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.22em]"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full max-w-[520px] justify-self-end space-y-6">

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <iframe
                    className="h-[300px] w-full"
                    src="https://embed.music.apple.com/us/album/emotions-in-motion/1895465650"
                  />
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/10 px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase">FILL THE VOID</h2>
            <p className="mt-4 text-white/70">
              OMNI ECHELON SOUNDS is where sound becomes identity.
            </p>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="border-b border-white/10 bg-white/[0.02] px-4 py-16">
          <div className="mx-auto max-w-6xl">
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
        <section id="world" className="border-b border-white/10 px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase">World</h2>
            <p className="mt-4 text-white/70">
              A space for visuals, audio, and identity.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white/[0.02] px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold uppercase">Contact</h2>

            <div className="mt-6 flex gap-4">
              <a className="rounded-xl bg-white px-5 py-2 text-black" href="mailto:test@email.com">
                Email
              </a>
              <a className="rounded-xl border px-5 py-2" href="https://instagram.com/allwayzinthemixx">
                Instagram
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
