export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="OMNI ECHELON SOUNDS" className="h-12 w-auto opacity-95 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]" />
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
      <section className="relative overflow-hidden border-b border-white/10">
  {/* Background effects */}
  <div className="pointer-events-none absolute inset-0 opacity-80">
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.9)_0%,_rgba(250,204,21,0.6)_20%,_rgba(168,85,247,0.4)_40%,_rgba(59,130,246,0.2)_60%,_transparent_80%)] blur-[40px] animate-pulse" />
    <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 blur-[2px]" />
    <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 blur-[2px]" />
    <div className="absolute inset-0 bg-[radial-gradient(1px_80px_at_50%_0%,rgba(255,255,255,0.2),transparent),radial-gradient(1px_100px_at_20%_100%,rgba(255,255,255,0.15),transparent),radial-gradient(1px_90px_at_80%_100%,rgba(255,255,255,0.15),transparent)] opacity-40" />
    <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20%_30%,rgba(255,255,255,0.7),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,0.5),transparent),radial-gradient(1.5px_1.5px_at_40%_80%,rgba(255,255,255,0.6),transparent),radial-gradient(1px_1px_at_80%_20%,rgba(255,255,255,0.4),transparent)]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.65))]" />
  </div>

  <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_520px]">
      
      {/* LEFT SIDE (TEXT) */}
      <div className="max-w-2xl">
        <div className="mb-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
          Entry point
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
          <span className="text-yellow-400 normal-case">ALL LEVELS of SOUND</span>
        </h1>

        <div className="mt-8 space-y-3">
          <p className="text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-white via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]">
            CINEMATIC PRESSURE
          </p>

          <p className="mt-4 text-sm sm:text-base tracking-[0.25em] text-white/60 max-w-xl italic">
            ENTER TO EXPERIENCE WHAT THIS ATMOSPHERE HAS IN VISION, SOUND AND MOTION ACROSS ALL SPECTRUMS
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#about"
            className="rounded-2xl border border-white/30 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition hover:scale-105 hover:opacity-95 active:scale-95"
          >
            Enter
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Connect
          </a>
        </div>
      </div>

      {/* RIGHT SIDE (MEDIA STACK) */}
      <div className="w-full max-w-[520px] justify-self-end">
        
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
          NOW PLAYING
        </p>

        {/* YOUTUBE VIDEO (SMALLER HEIGHT) */}
        <div className="max-h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(250,204,21,0.08)]">
          <div className="relative w-full" style={{ paddingBottom: "120%" }}>
            <iframe
              src="https://www.youtube.com/embed/HiryTilLQaI?rel=0"
              title="Bigger Than Life"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* SOUNDCLOUD */}
        <div className="mt-5">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
            SOUND
          </p>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            className="rounded-2xl"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/allwayzinthemixx/bigger-than-life&auto_play=false&show_artwork=false&show_comments=false&show_user=true&show_playcount=false&sharing=false"
          />
        </div>
      </div>
    </div>
  </div>
</section>
        <section id="about" className="border-b border-white/10">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">About</div>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold uppercase tracking-tight">FILL THE VOID</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-white/80">
                <p className="text-base sm:text-lg leading-7">
                  OMNI ECHELON SOUNDS is where sound turns into identity. The goal is not just to make something you hear. The goal is to make something you feel moving through you.
                </p>
                <p className="text-base sm:text-lg leading-7">
                  Dark edges. Cinematic weight. Motion. Tension. Release. This page is a personal space for the vision behind the sound and the energy driving it.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">Core signal</div>
              <div className="mt-6 space-y-4 text-white/85 text-base sm:text-lg">
                <p>Emotion in motion.</p>
                <p>Cinematic pressure.</p>
                <p>Sound with presence.</p>
                <p>Built from instinct, vision, and atmosphere.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sound" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">Sound</div>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">What lives in the world.</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                ["Cinematic", "Heavy emotion, movement, scale, and impact."],
                ["Dark", "Shadow, pressure, tension, and weight."],
                ["Post-Time", "Not retro. Not futuristic. Somewhere beyond both."],
                ["Personal", "A signature sound world, not filler for the shelf."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 p-6">
                  <div className="text-lg font-semibold uppercase tracking-wide">{title}</div>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/68">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="world" className="border-b border-white/10">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.35em] text-white/45">World</div>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">A page with presence.</h2>
            
             <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
          NOW PLAYING
          </p>

  <iframe
    width="100%"
    height="166"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    className="rounded-xl"
    src="https://w.soundcloud.com/player/?url=https://soundcloud.com/allwayzinthemixx/bigger-than-life&auto_play=false&show_artwork=false&show_comments=false&show_user=true&show_playcount=false&sharing=false"
  />
</div>

              <p className="mt-5 text-base leading-7 text-white/70">
                This space can hold visuals, embedded audio, a statement, selected drops, behind-the-scenes ideas, or whatever best represents the OMNI ECHELON SOUNDS universe without turning it into a storefront.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">01</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Statement</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">A raw message about what the brand means and where it’s headed.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">02</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Audio</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">A featured player for one sound piece, reel, or sonic trailer.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-yellow-400">03</div>
                <h3 className="mt-4 text-xl font-semibold uppercase">Presence</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">Visual identity, mood imagery, and a clean contact point for serious work.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/[0.02]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10 lg:p-12">
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-[0.35em] text-white/45">Contact</div>
                <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight sm:text-4xl">Connect to the vision.</h2>
                <p className="mt-5 text-base leading-7 text-white/70">
                  Add your email, Instagram, artist links, or one clean contact form here. Keep it direct. Keep it personal.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="rounded-2xl border border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black">Email</a>
                <a href="#" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white">Instagram</a>
                <a href="#" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white">Listen</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
