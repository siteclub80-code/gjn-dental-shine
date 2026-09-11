import { useEffect } from "react";
import { CLINIC } from "@/lib/clinic";

const POSTS = [
  { id: "DVhSy86jmSi", type: "reel", caption: "Reabilitação e autoestima" },
  { id: "DWZvYRVR5Tz", type: "reel", caption: "Bastidores da clínica" },
  { id: "DX_uAOMiib2", type: "reel", caption: "Saúde bucal no dia a dia" },
  { id: "DQMMrjbjYeX", type: "p", caption: "Prótese protocolo e implantes" },
] as const;

export function InstagramFeed() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Instagram</p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Fotos e vídeos <span className="text-gilded">reais</span>
          </h2>
        </div>
        <a
          href={CLINIC.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-soft"
        >
          @gjn.odontologia →
        </a>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {POSTS.map((post) => (
          <figure key={post.id} className="surface-lux overflow-hidden">
            <div className="aspect-[9/14] w-full">
              <iframe
                title={post.caption}
                src={`https://www.instagram.com/${post.type}/${post.id}/embed/captioned/`}
                loading="lazy"
                allowFullScreen
                scrolling="no"
                className="h-full w-full border-0"
              />
            </div>
            <figcaption className="border-t border-gold/15 px-4 py-3 text-xs tracking-[0.12em] uppercase text-muted-foreground">
              {post.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
