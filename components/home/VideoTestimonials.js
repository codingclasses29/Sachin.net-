import Icon from "@/components/Icon";
import { videoTestimonials, site } from "@/lib/data";

export default function VideoTestimonials() {
  return (
    <section id="videos" className="py-16 sm:py-20 bg-[#071120] text-white border-y border-slate-800">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Icon name="youtube" className="w-3.5 h-3.5" />
            Official YouTube Channel
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Watch Them <span className="text-rose-400">Shine</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Hear directly from our placed students and watch live project demos on YouTube by Sachin Kushwaha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {videoTestimonials.map((video) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-[#0f1f38] border border-slate-700/60 hover:border-rose-500/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-rose-500/10 overflow-hidden"
            >
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Big Glowing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-600/50 group-hover:scale-110 group-hover:bg-rose-500 transition-all">
                    <Icon name="play" className="w-6 h-6 ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-[10px] font-semibold text-white">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <h3 className="font-bold text-white text-base leading-snug group-hover:text-rose-400 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="mt-2 text-xs text-slate-400 flex items-center justify-between">
                  <span>{video.student}</span>
                  <span className="text-emerald-400 font-semibold">{video.role}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Subscribe Banner */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@BR_Siwan29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm shadow-xl shadow-rose-600/25 hover:shadow-rose-600/40 transition-all"
          >
            <Icon name="youtube" className="w-5 h-5" />
            Subscribe to YouTube Channel @BR_Siwan29
          </a>
        </div>
      </div>
    </section>
  );
}
