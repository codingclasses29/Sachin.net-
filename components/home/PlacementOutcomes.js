import Icon from "@/components/Icon";
import { placedStudents } from "@/lib/data";

export default function PlacementOutcomes() {
  return (
    <section id="placements" className="py-16 sm:py-20 lg:py-24 bg-[#0a1628] text-white">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Placement Wall of Fame
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Real Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Outcomes</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Meet our students who transformed their careers through sachin.Net&apos;s practical training and 100% placement support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placedStudents.map((student, idx) => (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#112340] to-[#0c182d] border border-slate-700/60 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Top row: Avatar & Company */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center font-bold text-white text-sm">
                    {student.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base leading-tight">
                      {student.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {student.role}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                  {student.tag}
                </span>
              </div>

              {/* Placed at & Package Details */}
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 mb-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Placed At:</span>
                  <span className="font-bold text-blue-400">{student.company}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Package / Hike:</span>
                  <span className="font-extrabold text-emerald-400">{student.package} ({student.hike})</span>
                </div>
              </div>

              {/* Course Taken */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Icon name="bookOpen" className="w-3.5 h-3.5 text-blue-400" />
                  {student.course}
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <Icon name="check" className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 mb-3">
            Want to be on this Wall of Fame?
          </p>
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all"
          >
            <Icon name="rocket" className="w-4 h-4" />
            Start Your Placement Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
