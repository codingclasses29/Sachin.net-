import Image from "next/image";

const AVATAR_SIZE =
  "w-[104px] h-[104px] sm:w-[112px] sm:h-[112px] shrink-0";

export default function TeamAvatar({ member, large = false }) {
  const size = large
    ? "w-32 h-32 sm:w-40 sm:h-40"
    : AVATAR_SIZE;

  const ring = member.isFounder
    ? "border-primary/70 shadow-lg shadow-primary/25"
    : member.isCoFounder
      ? "border-indigo-400/70 shadow-lg shadow-indigo-500/20"
      : "border-slate-600/50";

  const imgClass = member.photoPosition || "object-cover object-center";

  if (member.photo) {
    return (
      <div
        className={`mx-auto ${size} rounded-full overflow-hidden border-[3px] ${ring} relative bg-dark-3`}
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes={large ? "160px" : "112px"}
          className={imgClass}
        />
      </div>
    );
  }

  return (
    <div
      className={`mx-auto ${size} rounded-full flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-white border-[3px] ${ring}`}
      style={{
        background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`,
      }}
    >
      {member.initials}
    </div>
  );
}
