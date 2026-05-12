import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Leaf, Recycle, TrendingUp, ShieldCheck, Linkedin, Mail, Award, ArrowRight } from "lucide-react";
import logo from "@/assets/medura-logo.png";
import layers from "@/assets/biomaterial-layers.png";
import { useFadeIn } from "@/hooks/use-fade-in";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEDURA — Biodegradable Biomaterials for Surgical Wraps" },
      {
        name: "description",
        content:
          "MEDURA builds biodegradable biomaterials for surgical wraps — clinical excellence meets environmental responsibility.",
      },
      { property: "og:title", content: "MEDURA — Heal. Sustain. Shield." },
      {
        property: "og:description",
        content:
          "Sustainable surgical care, by default. Biodegradable biomaterials for the operating room.",
      },
    ],
  }),
  component: Index,
});

const FORMSPREE_WAITLIST = "https://formspree.io/f/xpwagqkd";
const FORMSPREE_CONTACT = "https://formspree.io/f/xpwagqkd";

function Index() {
  useFadeIn();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <WhyNow />
      <Recognition />
      <Waitlist />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="MEDURA" className="h-14 md:h-16 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition">Problem</a>
          <a href="#solution" className="hover:text-foreground transition">Solution</a>
          <a href="#why-now" className="hover:text-foreground transition">Why Now</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#waitlist"
          className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Stay Updated
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--accent) 22%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-28 md:pt-32 md:pb-40 text-center fade-up">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Leaf className="h-3.5 w-3.5 text-accent" /> Heal. Sustain. Shield.
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Healing Shouldn't Cost <br className="hidden md:block" />
          <span className="text-primary">the Planet.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          MEDURA is building biodegradable biomaterials for surgical wraps — where
          clinical excellence meets environmental responsibility.
        </p>
        <div className="mt-10">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/15"
          >
            Stay Updated <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 text-center fade-in-section">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/70">The Problem</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          Millions of procedures. <br />
          <span className="text-muted-foreground">Mountains of waste.</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Every year, millions of surgical procedures generate enormous medical waste.
          Conventional surgical wraps are single-use, non-biodegradable, and destined
          for landfill. There is a better way.
        </p>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-secondary/40 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="fade-in-section">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/70">Our Solution</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            A new class of biodegradable biomaterials.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            MEDURA is developing a new class of biodegradable biomaterials designed
            specifically for surgical wraps — materials that match clinical performance
            standards while breaking down naturally after use.
          </p>
          <p className="mt-4 text-lg font-medium text-foreground">
            Sustainable surgical care, by default.
          </p>
        </div>
        <div className="fade-in-section">
          <div className="relative rounded-2xl p-6 md:p-10 bg-card/50">
            <img
              src={layers}
              alt="MEDURA proprietary multi-layer biomaterial architecture"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-4 text-sm italic text-muted-foreground text-center">
            Proprietary multi-layer biomaterial architecture — patent pending.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  const cards = [
    { icon: TrendingUp, stat: "$12B+", label: "global surgical drapes market" },
    { icon: ShieldCheck, stat: "Regulation", label: "growing pressure on medical waste" },
    { icon: Recycle, stat: "Mature", label: "biodegradable materials science ready to deliver" },
  ];
  return (
    <section id="why-now" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center fade-in-section">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/70">Why Now</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            The moment is here.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="fade-in-section rounded-2xl border border-border/70 bg-card p-8 hover:shadow-lg hover:-translate-y-1 transition"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-11 w-11 rounded-xl bg-accent/30 flex items-center justify-center">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-primary">
                {c.stat}
              </div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-6 fade-in-section">
        <div className="flex items-center justify-center gap-3 text-sm md:text-base text-muted-foreground border border-border/70 rounded-full px-5 py-3 bg-card">
          <Award className="h-4 w-4 text-accent" />
          <span>
            <span className="text-foreground font-medium">2nd Runner-Up</span> — HULT Nationals 2026, representing University of Galway.
          </span>
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_WAITLIST, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else setStatus("err");
    } catch {
      setStatus("err");
    }
  }
  return (
    <section id="waitlist" className="py-24 md:py-32 bg-secondary/40 border-y border-border/60">
      <div className="mx-auto max-w-2xl px-6 text-center fade-in-section">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Be part of the journey.
        </h2>
        <p className="mt-4 text-muted-foreground">
          We're in early stages and would love to keep you in the loop.
        </p>
        <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="you@domain.com"
            className="flex-1 px-5 py-3 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Join Waitlist"}
          </button>
        </form>
        {status === "ok" && (
          <p className="mt-4 text-sm text-primary">Thanks — you're on the list.</p>
        )}
        {status === "err" && (
          <p className="mt-4 text-sm text-destructive">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_CONTACT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else setStatus("err");
    } catch {
      setStatus("err");
    }
  }
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 fade-in-section">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get in Touch.</h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're an investor, researcher, or potential partner — we'd love to hear from you.
          </p>
        </div>
        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-5 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full px-5 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message"
            className="w-full px-5 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "ok" && (
            <p className="text-sm text-primary">Thanks — we'll be in touch shortly.</p>
          )}
          {status === "err" && (
            <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div className="max-w-md">
          <img src={logo} alt="MEDURA" className="h-10 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Reimagining surgical care through sustainable biomaterials.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-3 text-sm text-muted-foreground">
          <a
            href="https://www.linkedin.com/company/medura"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="mailto:hello@medura.ie"
            className="inline-flex items-center gap-2 hover:text-foreground transition"
          >
            <Mail className="h-4 w-4" /> hello@medura.ie
          </a>
          <span>medura.ie</span>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MEDURA. All rights reserved.
      </div>
    </footer>
  );
}
