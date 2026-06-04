export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <img
            src="/logo.png"
            alt="OMNI ECHELON SOUNDS"
            className="h-10 w-auto drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]"
          />

          <nav className="hidden md:flex gap-6 text-xs uppercase tracking-[0.25em] text-white/60">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#sound" className="hover:text-white">Sound</a>
            <a href="#world" className="hover:text-white">World</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        {/* cinematic glow field */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-[140px]" />
          <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-28">

          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            CINEMATIC PRESSURE SYSTEM
          </p>

          <h1 className="mt-6 text-4xl sm:text-6xl font-black uppercase leading-tight">
            ALL LEVELS OF
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-purple-500">
              SOUND DESIGN
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-white/60 leading-relaxed">
            A controlled collapse of emotion, rhythm, and atmosphere built into motion.
          </p>

          <div className="mt-10 flex gap-4">
            <a className="px-6 py-3 rounded-2xl bg-white text-black text-xs uppercase tracking-[0.2em]">
              Enter
            </a>
            <a className="px-6 py-3 rounded-2xl border border-white/20 text-xs uppercase tracking-[0.2em]">
              Instagram
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold uppercase">Identity Layer</h2>
          <p className="mt-6 text-white/70 max-w-2xl">
            OMNI ECHELON SOUNDS is not content. It is structure. Sound becomes identity, and identity becomes motion.
          </p>
        </div>
      </section>

      {/* SOUND GRID */}
      <section id="sound" className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20">

          <h2 className="text-3xl font-bold uppercase">Sound Architecture</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              ["Cinematic", "Scale, emotion, impact"],
              ["Dark", "Pressure, shadow, weight"],
              ["Post-Time", "Beyond eras and labels"],
              ["Personal", "Signature sonic fingerprint"],
            ].map(([t, d]) => (
              <div key={t} className="p-6 rounded-2xl border border-white/10 bg-black/30">
                <p className="uppercase tracking-[0.25em] text-white/80">{t}</p>
                <p className="mt-3 text-white/60">{d}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WORLD */}
      <section id="world" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-bold uppercase">World Layer</h2>
          <p className="mt-6 text-white/70 max-w-2xl">
            A living environment for sound, visuals, and narrative fragments.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20">

          <h2 className="text-3xl font-bold uppercase">Contact Signal</h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className="px-6 py-3 bg-white text-black rounded-xl uppercase text-xs tracking-[0.2em]">
              Email
            </a>
            <a className="px-6 py-3 border border-white/20 rounded-xl uppercase text-xs tracking-[0.2em]">
              Instagram
            </a>
            <a className="px-6 py-3 border border-white/20 rounded-xl uppercase text-xs tracking-[0.2em]">
              SoundCloud
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}"use client";

import { useEffect, useRef, useState } from "react";

/* ----------------------------
   SCENE REVEAL HOOK
---------------------------- */
function useScene() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

/* ----------------------------
   SCENE WRAPPER (FILM FRAME)
---------------------------- */
function Scene({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useScene();

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out transform ${
        inView
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-16 blur-sm"
      }`}
    >
      {children}
    </div>
  );
}

/* ----------------------------
   MAIN FILM
---------------------------- */
export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* 🌌 GLOBAL CINEMATIC FIELD */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-[-15%] top-[10%] h-[700px] w-[700px] bg-purple-500/10 blur-[180px] animate-pulse" />
        <div className="absolute right-[-20%] top-[30%] h-[900px] w-[900px] bg-blue-500/10 blur-[200px]" />
        <div className="absolute left-[20%] bottom-[-25%] h-[900px] w-[900px] bg-yellow-400/10 blur-[220px]" />

        {/* STAR FIELD */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1px_1px_at_25%_30%,white,transparent),radial-gradient(1px_1px_at_70%_60%,white,transparent)]" />
      </div>

      {/* 🎥 HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl flex justify-between items-center px-4 py-4">
          <img src="/logo.png" className="h-12" />

          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.35em] text-white/60">
            <a href="#about">About</a>
            <a href="#sound">Sound</a>
            <a href="#world">World</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>

        {/* 🎬 HERO SCENE (OPENING SHOT) */}
        <section className="relative h-[95vh] flex items-center justify-center text-center overflow-hidden border-b border-white/10">

          {/* camera glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

          {/* drift layer */}
          <div className="absolute inset-0 translate-y-6 scale-110 opacity-70 bg-gradient-to-b from-white/5 to-transparent" />

          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight">
              ALL LEVELS<br />OF SOUND
            </h1>

            <p className="mt-6 text-white/60 tracking-[0.4em] uppercase text-xs md:text-sm">
              cinematic pressure • motion identity • sonic architecture
            </p>

            <div className="mt-12 flex justify-center gap-4">
              <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition">
                Enter
              </button>
              <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                Explore
              </button>
            </div>
          </div>
        </section>

        {/* 🎞️ ABOUT SCENE */}
        <section id="about" className="py-32 border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6">
            <Scene>
              <h2 className="text-4xl font-bold uppercase">FILL THE VOID</h2>

              <p className="mt-8 text-white/70 leading-8">
                OMNI ECHELON SOUNDS exists as a cinematic identity system.
                Sound becomes structure. Emotion becomes architecture.
              </p>
            </Scene>
          </div>
        </section>

        {/* 🎞️ SOUND SCENE */}
        <section id="sound" className="py-32 bg-white/[0.02] border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6">
            <Scene>
              <h2 className="text-4xl font-bold uppercase">SOUND FIELD</h2>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                {[
                  ["Cinematic", "Scale • gravity • emotion"],
                  ["Dark", "Pressure • tension • shadow"],
                  ["Post-Time", "Beyond eras"],
                  ["Personal", "Signature identity"],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:scale-[1.02] transition"
                  >
                    <div className="text-xs uppercase tracking-[0.35em] text-white/60">
                      {t}
                    </div>
                    <p className="mt-3 text-white/80">{d}</p>
                  </div>
                ))}
              </div>
            </Scene>
          </div>
        </section>

        {/* 🌌 WORLD SCENE (DEPTH SHIFT) */}
        <section id="world" className="py-32 border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6">
            <Scene>
              <h2 className="text-4xl font-bold uppercase">WORLD LAYER</h2>

              <div className="mt-10 h-72 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-yellow-400/10" />

              <p className="mt-8 text-white/70">
                A visual echo chamber for sound, identity, and motion.
              </p>
            </Scene>
          </div>
        </section>

        {/* 🎬 CONTACT SCENE (FINAL FRAME) */}
        <section id="contact" className="py-32 bg-white/[0.02]">
          <div className="mx-auto max-w-5xl px-6">
            <Scene>
              <h2 className="text-4xl font-bold uppercase">CONTACT SIGNAL</h2>

              <div className="mt-10 flex flex-wrap gap-4">
                {["Email", "Instagram", "SoundCloud", "YouTube"].map((b) => (
                  <button
                    key={b}
                    className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </Scene>
          </div>
        </section>

      </main>
    </div>
  );
}"use client";

import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.15 });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

export default function OmniEchelonSoundsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* 🌌 AMBIENT FIELD */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] bg-purple-500/10 blur-[160px] animate-pulse" />
        <div className="absolute right-[-10%] top-[30%] h-[700px] w-[700px] bg-blue-500/10 blur-[180px]" />
        <div className="absolute left-[20%] bottom-[-20%] h-[800px] w-[800px] bg-yellow-400/10 blur-[200px]" />

        {/* subtle star field */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1px_1px_at_20%_30%,white,transparent),radial-gradient(1px_1px_at_60%_70%,white,transparent)]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl flex justify-between items-center px-4 py-4">
          <img src="/logo.png" className="h-12" />

          <nav className="hidden md:flex gap-8 text-xs tracking-[0.3em] uppercase text-white/60">
            <a href="#about">About</a>
            <a href="#sound">Sound</a>
            <a href="#world">World</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="relative h-[92vh] flex items-center justify-center text-center overflow-hidden border-b border-white/10">

          {/* parallax glow core */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
              ALL LEVELS<br />OF SOUND
            </h1>

            <p className="mt-6 text-white/60 tracking-[0.35em] uppercase text-xs">
              cinematic pressure • motion identity • sonic architecture
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition">
                Enter
              </button>
              <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
                Explore
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-28 border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6">
            <Section>
              <h2 className="text-3xl font-bold uppercase">FILL THE VOID</h2>
              <p className="mt-6 text-white/70 leading-7">
                OMNI ECHELON SOUNDS is a cinematic identity system built from motion, emotion, and sonic architecture.
              </p>
            </Section>
          </div>
        </section>

        {/* SOUND */}
        <section id="sound" className="py-28 bg-white/[0.02] border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6">
            <Section>
              <h2 className="text-3xl font-bold uppercase">Sound Field</h2>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                {[
                  ["Cinematic", "Scale, emotion, gravity"],
                  ["Dark", "Pressure, tension, shadow"],
                  ["Post-Time", "Beyond eras"],
                  ["Personal", "Signature sonic DNA"],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:scale-[1.02] transition"
                  >
                    <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {t}
                    </div>
                    <p className="mt-3 text-white/80">{d}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* WORLD */}
        <section id="world" className="py-28 border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6">
            <Section>
              <h2 className="text-3xl font-bold uppercase">World Layer</h2>

              <div className="mt-10 h-64 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-yellow-400/10" />

              <p className="mt-8 text-white/70">
                A living space where sound becomes visual identity.
              </p>
            </Section>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-28 bg-white/[0.02]">
          <div className="mx-auto max-w-5xl px-6">
            <Section>
              <h2 className="text-3xl font-bold uppercase">Contact Signal</h2>

              <div className="mt-10 flex flex-wrap gap-4">
                {["Email", "Instagram", "SoundCloud", "YouTube"].map((b) => (
                  <button
                    key={b}
                    className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </Section>
          </div>
        </section>

      </main>
    </div>
  );
}
