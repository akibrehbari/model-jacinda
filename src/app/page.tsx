import models from "@/data/models.json";
import { SocialLinks } from "@/components/social-links";
import { ButterflyGame } from "@/components/butterfly-game";

const model = models[0];

const gradients: Record<string, string> = {
  a: "from-[#3d1f4a] via-[#1a1a2e] to-[#2a1850]",
  b: "from-[#1a3d3d] via-[#1a1a2e] to-[#1a2d50]",
  c: "from-[#3d3a1a] via-[#1a1a2e] to-[#3d1f3d]",
  d: "from-[#1a3d28] via-[#1a1a2e] to-[#3d1a40]",
  e: "from-[#2a1a4a] via-[#1a1a2e] to-[#1a3d38]",
  f: "from-[#3d1a28] via-[#1a1a2e] to-[#1a3d3d]",
  g: "from-[#1a3d28] via-[#1a1a2e] to-[#1a2850]",
  h: "from-[#3d2a1a] via-[#1a1a2e] to-[#1a3d40]",
  i: "from-[#1a283d] via-[#1a1a2e] to-[#3d1a38]",
  j: "from-[#3d1a1a] via-[#1a1a2e] to-[#1a3d50]",
  k: "from-[#1a3d30] via-[#1a1a2e] to-[#3d1a3d]",
  l: "from-[#1a3d28] via-[#1a1a2e] to-[#1a2850]",
  m: "from-[#3d1a38] via-[#1a1a2e] to-[#1a3d30]",
  n: "from-[#1a3d3d] via-[#1a1a2e] to-[#3d1a28]",
  o: "from-[#281a3d] via-[#1a1a2e] to-[#1a3d40]",
  p: "from-[#3d281a] via-[#1a1a2e] to-[#1a303d]",
  q: "from-[#1a3d28] via-[#1a1a2e] to-[#3d1a40]",
  r: "from-[#3d1a30] via-[#1a1a2e] to-[#1a3d3d]",
  s: "from-[#1a303d] via-[#1a1a2e] to-[#3d1a28]",
  t: "from-[#3d3a1a] via-[#1a1a2e] to-[#1a283d]",
  u: "from-[#1a3d38] via-[#1a1a2e] to-[#3d1a30]",
  v: "from-[#301a3d] via-[#1a1a2e] to-[#1a3d28]",
  w: "from-[#1a3d1a] via-[#1a1a2e] to-[#3d1a3d]",
  x: "from-[#3d1a40] via-[#1a1a2e] to-[#1a3d28]",
  y: "from-[#1a383d] via-[#1a1a2e] to-[#3d2a1a]",
  z: "from-[#3d1a28] via-[#1a1a2e] to-[#1a3d38]",
};

export const metadata = {
  title: model.name,
  description: model.description,
  openGraph: {
    title: model.name,
    description: model.description,
    images: ["/og-image.jpg"],
  },
};

export default function ModelPage() {
  const gradient = gradients[model.username.charAt(0).toLowerCase()] ?? gradients["a"];

  return (
    <main
      className={`flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br ${gradient} text-white min-h-screen`}
    >
      <h1 className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-center mb-3">
        {model.name}
      </h1>
      <p className="text-white/50 text-sm text-center mb-12 max-w-xs">
        {model.tagline}
      </p>

      <p
        className="font-heading font-bold text-center whitespace-nowrap mb-12"
        style={{ fontSize: "clamp(1.6rem, 7.5vw, 3rem)" }}
      >
        {model.description}
      </p>

      <ButterflyGame />

      <div className="mt-10">
        <SocialLinks socials={model.socials as Record<string, string>} />
      </div>
    </main>
  );
}
