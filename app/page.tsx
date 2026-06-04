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
          <div className="mx-auto w-full max-w-6xl px-4 py-16 lg:py-24">

            <h1 className="text-4xl font-black uppercase">
              ALL LEVELS of SOUNDS
            </h1>

          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
            <h2 className="text-3xl font-bold uppercase">FILL THE VOID</h2>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">

            <h2 className="text-3xl font-bold uppercase">Sound</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                ["Cinematic", "Heavy emotion, movement, scale, and impact."],
                ["Dark", "Shadow, pressure, tension, and weight."],
                ["Post-Time", "Beyond retro and futuristic."],
                ["Personal", "A signature sound world."],
              ].map(([title, body]) => (
                <div key={title} className="border border-white/10 p-6 rounded-2xl">
                  <div className="font-bold uppercase">{title}</div>
                  <p className="text-white/70">{body}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">

            <h2 className="text-3xl font-bold uppercase">World</h2>

            <p className="mt-6 text-white/70">
              A page with presence.
            </p>

          </div>
        </section>

        {/* TRANSMISSION */}
        <section className="border-b border-white/10">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/rfip6Ix-SgA"
              title="Transmission"
              allowFullScreen
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">

            <h2 className="text-3xl font-bold uppercase">Contact</h2>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="mailto:Omniechelonsounds@gmail.com">Email</a>
              <a href="https://instagram.com/allwayzinthemixx">Instagram</a>
              <a href="https://soundcloud.com/allwayzinthemixx">SoundCloud</a>
              <a href="https://youtube.com/@ALLWAYZWORLD">YouTube</a>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
