import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import ExperienceCard from "../ExperienceCard";
import TeamAvatar from "../TeamAvatar";
import { teamMembers } from "@/lib/data";

function teamCardSpan(index) {
  if (index < 3) return "lg:col-span-2";
  if (index === 3) return "lg:col-span-2 lg:col-start-2";
  return "lg:col-span-2 lg:col-start-4";
}

export default function TeamSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          badge="Our Team"
          title="Expert"
          highlight="Developers"
          desc="Experienced developers working together to deliver premium websites, software and AI solutions."
        />

        {/* 3 + 2 centered layout on desktop — fixed card width */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 100} className={teamCardSpan(i)}>
              <div
                className={`glass-card p-5 sm:p-6 h-full min-h-[420px] sm:min-h-[440px] text-center relative flex flex-col mx-auto max-w-[300px] ${
                  member.isFounder
                    ? "!border-primary/50 !bg-primary/[0.06]"
                    : member.isCoFounder
                      ? "!border-indigo-500/50 !bg-indigo-500/[0.06]"
                      : ""
                }`}
              >
                {member.isFounder && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 rounded-full whitespace-nowrap">
                    Founder
                  </span>
                )}
                {member.isCoFounder && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-violet-600 px-3 py-1 rounded-full whitespace-nowrap">
                    Co-Founder
                  </span>
                )}

                <div className="pt-2 pb-4 flex justify-center">
                  <TeamAvatar member={member} />
                </div>

                <h3 className="font-bold text-white text-base leading-snug">{member.name}</h3>
                <p className="mt-1.5 text-xs font-medium text-primary-light leading-snug px-1">
                  {member.role}
                </p>
                <p className="mt-2 text-[11px] sm:text-xs text-slate-400 leading-relaxed px-1 line-clamp-3">
                  {member.specialty}
                </p>

                {member.experience && (
                  <div className="mt-4 text-left flex-1">
                    <ExperienceCard
                      compact
                      icon={member.experience.icon}
                      title={member.experience.title}
                      desc={member.experience.desc}
                    />
                  </div>
                )}

                <div className="flex flex-wrap justify-center gap-1.5 mt-4 pt-2 border-t border-slate-700/40">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-medium text-slate-300 bg-white/[0.06] border border-slate-700/60 rounded-full px-2.5 py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <Reveal>
            <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8">
              Team <span className="gradient-text">Experience</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {teamMembers.map((member, i) =>
              member.experience ? (
                <Reveal key={`exp-${member.name}`} delay={(i % 3) * 80}>
                  <ExperienceCard
                    icon={member.experience.icon}
                    title={member.experience.title}
                    desc={`${member.name} — ${member.experience.desc}`}
                  />
                </Reveal>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
