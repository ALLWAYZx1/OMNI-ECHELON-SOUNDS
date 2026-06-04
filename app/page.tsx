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

   <section className="relative overflow-hidden border-b border-white/10">

  {/* BACKGROUND */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[18%] top-[48%] h-[420px] w-[420px] rounded-full bg-yellow-400/20 blur-[120px]" />
    <div className="absolute right-[18%] top-[35%] h-[380px] w-[380px] rounded-full bg-blue-500/15 blur-[120px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_75%)]" />
  </div>

  {/* COSMIC LAYER */}
  <div className="pointer-events-none absolute inset-0 opacity-80">
    <div className="absolute left-[20%] top-[55%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_rgba(250,204,21,0.7)_25%,_rgba(168,85,247,0.5)_45%,_rgba(59,130,246,0.25)_65%,_transparent_80%)] blur-[35px] animate-pulse" />
    <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,0.6),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,0.4),transparent)]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.7))]" />
  </div>

  {/* HERO */}
<section className="relative overflow-hidden border-b border-white/10">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[18%] top-[48%] h-[420px] w-[420px] rounded-full bg-yellow-400/20 blur-[120px]" />
    <div className="absolute right-[18%] top-[35%] h-[380px] w-[380px] rounded-full bg-blue-500/15 blur-[120px]" />
    <div className="absolute inset-0 bg-black/80" />
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
          <div className="uppercase font-semibold">{t}</div>
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

              <div className="mt-10">
                <p className="text-base leading-7 text-white/70">
                  This space can hold visuals, embedded audio, a statement, selected drops, behind-the-scenes ideas, or whatever best represents the OMNI ECHELON SOUNDS universe without turning it into a storefront.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">01</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Statement</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  A raw message about what the brand means and where it’s headed.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">02</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Audio</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  A featured player for one sound piece, reel, or sonic trailer.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">03</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Presence</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  Visual identity, mood imagery, and a clean contact point for serious work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10 lg:p-12">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.35em] text-white/45">Contact</div>
                <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                  Connect to the vision.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/70">
                  Add your email, Instagram, artist links, or one clean contact form here. Keep it direct. Keep it personal.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:Omniechelonsounds@gmail.com?subject=OMNI%20ECHELON%20INQUIRY&body=Name:%0AProject:%0ABudget:%0AMessage:"
                  className="rounded-2xl border border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black transition hover:scale-105 active:scale-95"
                >
                  Email
                </a>

                <a
                  href="https://www.instagram.com/allwayzinthemixx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Instagram
                </a>

                <a
                  href="https://soundcloud.com/allwayzinthemixx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  SoundCloud
                </a>

                <a
                  href="https://www.youtube.com/@ALLWAYZWORLD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
