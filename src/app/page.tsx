import { readdirSync } from "fs";
import { join } from "path";
import models from "@/data/models.json";
import { HeroCarousel } from "@/components/hero-carousel";
import { SocialLinks } from "@/components/social-links";
import { CtaButtons } from "@/components/cta-buttons";
import { StarsBackground } from "@/components/stars-background";

const model = models[0];

const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getModelPhotos(): string[] {
  try {
    const dir = join(process.cwd(), "public", "models", model.username);
    const photos = readdirSync(dir)
      .filter((f) => SUPPORTED.has(f.slice(f.lastIndexOf(".")).toLowerCase()))
      .map((f) => `/models/${model.username}/${f}`);
    return shuffleArray(photos);
  } catch {
    return [];
  }
}

export const metadata = {
  title: model.name,
  description: model.description,
};

export default function ModelPage() {
  const photos = getModelPhotos();

  return (
    <main className="relative flex flex-col items-center justify-center px-6 py-12 text-white min-h-screen bg-[#05051a]">
      <StarsBackground />
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-center mb-2">
          {model.name}
        </h1>
        <p className="text-white/50 text-sm sm:text-base text-center mb-10 max-w-xs">
          {model.tagline}
        </p>

        <HeroCarousel photos={photos} name={model.name} />

        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-center mt-10 mb-2">
          {model.heading}
        </h2>
        <p className="text-white/60 text-sm sm:text-base text-center max-w-sm leading-relaxed">
          {model.description}
        </p>

        <CtaButtons onlyfans={model.onlyfans} chatterbot={model.chatterbot} />

        <div className="mt-8">
          <SocialLinks socials={model.socials as Record<string, string>} />
        </div>
      </div>
    </main>
  );
}
