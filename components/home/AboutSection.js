import Link from "next/link";
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

export default function AboutSection() {
  return (
    <section className="section-y bg-dark-2/60" id="about">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* photo / avatar block */}
        <Reveal>
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
            <div className="relative glass-card !rounded-2xl sm:!rounded-3xl p-6 sm:p-8 text-center">
              <div className="flex justify-center py-2">
                <TeamAvatar
                  member={{
                    ...teamMembers.find((m) => m.isFounder),
                    photo: founderProfile.photo,
                  }}
                  large
                />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{site.founder}</h3>
              <p className="text-sm text-primary-light font-medium">{founderProfile.role}</p>
              <p className="mt-2 text-xs text-accent font-semibold">{founderProfile.institute}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/[0.04] border border-slate-700/50 py-3">
                  <p className="font-bold text-white">1+</p>
                  <p className="text-[11px] text-slate-500">Years</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-slate-700/50 py-3">
                  <p className="font-bold text-white">100+</p>
                  <p className="text-[11px] text-slate-500">Projects</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-slate-700/50 py-3">
                  <p className="font-bold text-white">4.9★</p>
                  <p className="text-[11px] text-slate-500">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="section-badge">About Me</span>
            <h2 className="mt-3 sm:mt-4 heading-md font-bold text-white">
              Hi, I&apos;m <span className="gradient-text">{site.founder}</span>
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed">
              I&apos;m a Full Stack Developer and founder of {site.name}. I build
              modern websites, web applications, school management systems and
              business software solutions that help businesses grow online.
            </p>
            <p className="mt-3 text-slate-400 leading-relaxed">
              My mission is simple — premium quality technology at honest,
              affordable prices for every business, school and startup in India.
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Certifications & Training
              </p>
              <div className="flex flex-wrap gap-2">
                {founderProfile.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-[11px] text-slate-300 bg-primary/10 border border-primary/25 rounded-lg px-3 py-1.5 leading-snug"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {founderExperience && (
              <Reveal delay={0}>
                <ExperienceCard
                  icon={founderExperience.icon}
                  title={founderExperience.title}
                  desc={founderExperience.desc}
                />
              </Reveal>
            )}
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={(i + 1) * 80}>
                <ExperienceCard icon={h.icon} title={h.title} desc={h.desc} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <Link href="/about" className="btn-outline text-sm">
              More About Us <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
