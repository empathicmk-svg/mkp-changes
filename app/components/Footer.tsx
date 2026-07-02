import Link from "next/link";
import { CONTACT } from "@/app/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-graphite bg-void" style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
      <div className="mx-auto max-w-[1400px]" style={{ padding: "0 clamp(1.25rem, 5vw, 3rem)" }}>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl uppercase tracking-[0.02em] text-pearl">MK Parrish</p>
            <p className="mt-1 font-serif text-base italic text-smoke" style={{ fontWeight: 500 }}>
              Growth strategy, websites, and messaging.
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              <a href={`mailto:${CONTACT.email}`} className="font-body text-[0.7rem] tracking-[0.08em] text-iron transition hover:text-petal">
                {CONTACT.email}
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="font-body text-[0.7rem] tracking-[0.08em] text-iron transition hover:text-petal">
                /in/mkparrish
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-3">
              <p className="font-body text-[0.6rem] font-bold uppercase tracking-[0.28em] text-petal/70">Services</p>
              <Link href="/#offerings" className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iron transition hover:text-pearl">All Offerings</Link>
              <Link href="/studio" className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iron transition hover:text-pearl">Web Design</Link>
              <Link href="/growth" className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iron transition hover:text-pearl">Growth</Link>
              <Link href="/brand" className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iron transition hover:text-pearl">Messaging</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-body text-[0.6rem] font-bold uppercase tracking-[0.28em] text-petal/70">Company</p>
              <Link href="/how-i-work" className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iron transition hover:text-pearl">How I Work</Link>
              <Link href="/resources" className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iron transition hover:text-pearl">Resources</Link>
              <Link href="/about" className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iron transition hover:text-pearl">About</Link>
              <Link href="/contact" className="nav-link font-body text-[0.7rem] font-medium uppercase tracking-[0.15em] text-iron transition hover:text-pearl">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/book" className="btn-primary px-5 py-2.5 font-body text-[0.7rem] font-bold uppercase tracking-[0.2em] text-void">Book a Call</Link>
            <Link href="/resources" className="btn-ghost px-5 py-2.5 font-body text-[0.7rem] font-bold uppercase tracking-[0.2em]">Free Resources</Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-graphite pt-8">
          <p className="font-body text-[0.7rem] font-light tracking-[0.1em] text-iron">
            Websites, outbound, and messaging that turn how you&apos;re seen into revenue.
          </p>
          <p className="font-body text-[0.7rem] font-light tracking-[0.06em] text-iron">
            &copy; {new Date().getFullYear()} MK Parrish
          </p>
        </div>
      </div>
    </footer>
  );
}
