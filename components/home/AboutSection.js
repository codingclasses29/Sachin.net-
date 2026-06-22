import Link from "next/link";
import PageSection from "@/components/PageSection";
import Icon from "../Icon";
import Reveal from "../Reveal";
import ExperienceCard from "../ExperienceCard";
import TeamAvatar from "../TeamAvatar";
import { site, founderProfile, teamMembers } from "@/lib/data";

const highlights = [
  { icon: "code", title: "Full Stack Developer", desc: "Frontend + Backend + Database" },
  { icon: "shield", title: "Trusted Partner", desc: "100+ successful projects" },
  { icon: "support", title: "Mission", desc: "Affordable premium tech for every business" },
];

const founderExperience = teamMembers.find((m) => m.isFounder)?.experience;

export default function AboutSection({ embedded = false }) {
  const inner = (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <Reveal>
        <div className="relative max-w-md mx-auto lg:mx-0">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/25 to-accent/15 blur-2xl" />
          <div className="relative card card-static card-p-lg text-center">
            <div className="flex justify-center py-2">
              <TeamAvatar
                member={{ ...teamMembers.find((m) => m.isFounder), photo: founderProfile.photo }}
                large
              />
            </div>
            <h3 className="mt-5 heading-sm">{site.founder}</h3>
            <p className="text-sm text-primary-light font-medium">{founderProfile.role}</p>
            <p className="mt-2 text-xs text-accent font-semibold">{founderProfile.institute}</p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { v: "1+", l: "Years" },
                { v: "100+", l: "Projects" },
                { v: "4.9★", l: "Rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-white/[0.04] border border-[var(--border)] py-3">
                  <p className="font-bold">{s.v}</p>
                  <p className="text-muted text-[11px]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <span className="section-badge">About Me</span>
          <h2 className="mt-3 heading-md">
            Hi, I&apos;m <span className="gradient-text">{site.founder}</span>
          </h2>
          <p className="mt-4 text-body">
            Full Stack Developer and founder of {site.name}. I build modern websites, web apps,
            school management systems and business software that help businesses grow online.
          </p>
          <p className="mt-3 text-body">
            My mission — premium quality technology at honest, affordable prices for every business in India.
          </p>
          <div className="mt-5">
            <p className="text-label uppercase tracking-wider">Certifications & Training</p>
            <div className="flex flex-wrap gap-2">
              {founderProfile.certifications.map((cert) => (
                <span key={cert} className="text-[11px] text-body bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {founderExperience && (
            <Reveal delay={0}>
              <ExperienceCard icon={founderExperience.icon} title={founderExperience.title} desc={founderExperience.desc} />
            </Reveal>
          )}
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={(i + 1) * 60}>
              <ExperienceCard icon={h.icon} title={h.title} desc={h.desc} />
            </Reveal>
          ))}
        </div>

        {!embedded && (
          <Reveal className="mt-8">
            <Link href="/about" className="btn-outline text-sm">
              More About Us <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </div>
  );

  if (embedded) return inner;
  return <PageSection alt id="about">{inner}</PageSection>;
}
