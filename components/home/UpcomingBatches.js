"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import CourseModal from "@/components/CourseModal";
import { upcomingBatches } from "@/lib/data";

export default function UpcomingBatches() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleReserve = (batch) => {
    setSelectedCourse({ title: `${batch.course} (${batch.timings})` });
    setModalOpen(true);
  };

  return (
    <>
      <section id="batches" className="py-16 sm:py-20 bg-[#0a1628] text-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Interactive Batches
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Upcoming <span className="text-blue-400">Live Classes</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Small batch sizes for personalized 1:1 code reviews and direct doubt clearance.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block rounded-2xl bg-[#0e1c33] border border-slate-700/80 shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#142646] text-xs uppercase tracking-wider text-slate-300 border-b border-slate-700">
                  <tr>
                    <th className="py-4 px-6 font-bold">Course Name</th>
                    <th className="py-4 px-6 font-bold">Start Date</th>
                    <th className="py-4 px-6 font-bold">Timings</th>
                    <th className="py-4 px-6 font-bold">Mode</th>
                    <th className="py-4 px-6 font-bold">Availability</th>
                    <th className="py-4 px-6 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {upcomingBatches.map((batch) => (
                    <tr
                      key={batch.id}
                      className="hover:bg-blue-600/5 transition-colors group"
                    >
                      <td className="py-4 px-6 font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {batch.course}
                      </td>
                      <td className="py-4 px-6 text-slate-300 flex items-center gap-1.5 pt-5">
                        <Icon name="calendar" className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{batch.date}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-300">
                        {batch.timings}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                          <Icon name="globe" className="w-3 h-3 text-blue-400" />
                          {batch.mode}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                          {batch.seats}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          onClick={() => handleReserve(batch)}
                          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-600/20"
                        >
                          Reserve Seat
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {upcomingBatches.map((batch) => (
              <div
                key={batch.id}
                className="p-5 rounded-2xl bg-[#0e1c33] border border-slate-700/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-[11px] font-bold">
                    {batch.badge}
                  </span>
                  <span className="text-xs font-semibold text-amber-400">
                    {batch.seats}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base">
                  {batch.course}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Icon name="calendar" className="w-3.5 h-3.5 text-blue-400" />
                    <span>{batch.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="clock" className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{batch.timings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="globe" className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{batch.mode}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleReserve(batch)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
                >
                  Reserve Seat
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        course={selectedCourse}
      />
    </>
  );
}
