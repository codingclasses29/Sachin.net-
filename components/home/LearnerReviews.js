import Icon from "@/components/Icon";
import { studentReviews } from "@/lib/data";

export default function LearnerReviews() {
  return (
    <section className="py-16 sm:py-20 bg-[#0a1628] text-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Student Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Learners <span className="text-blue-400">Transformed</span> every day
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Real feedback from graduates who built their dream software engineering careers with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentReviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#112340] to-[#0c182d] border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Icon key={i} name="star" className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-4">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <p className="text-xs text-blue-400 font-medium">{rev.course}</p>
                </div>
                <span className="text-[11px] text-slate-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
