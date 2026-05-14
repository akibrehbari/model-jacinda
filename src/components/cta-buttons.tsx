import type { SVGProps } from "react";

function OnlyFansIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173 0 0-2.399.585-4.43 0 4.018-.777 6.333-3.037 7.005-5.995zM5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996 7.996 7.996 0 0 0-7.996-7.996Zm0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z" />
    </svg>
  );
}

function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

interface CtaButtonsProps {
  onlyfans: string;
  chatterbot: string;
}

export function CtaButtons({ onlyfans, chatterbot }: CtaButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full max-w-sm">
      <a
        href={onlyfans}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full bg-blue-500 text-white font-medium text-sm transition-all duration-300 hover:bg-blue-400 hover:scale-[1.02]"
      >
        <OnlyFansIcon className="w-5 h-5" />
        Message me
      </a>
      {/* <a
        href={chatterbot}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
      >
        <ChatIcon className="w-5 h-5" />
        Chatterbot
      </a> */}
    </div>
  );
}
