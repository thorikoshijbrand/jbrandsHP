import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

const mangaPages = [
  {
    src: "/images/service_manga_01.jpg",
    alt: "漫画1: 新プロジェクト開始 - 小林課長がIT部門のプロジェクトに任命される",
  },
  {
    src: "/images/service_manga_02.jpg",
    alt: "漫画2: プロジェクトの課題 - 進まない会議、曖昧な仕様、追加請求、無茶ぶり",
  },
  {
    src: "/images/service_manga_03.jpg",
    alt: "漫画3: J-Compassとの出会い - プロジェクト伴走サービスで状況が改善",
  },
  {
    src: "/images/service_manga_04.jpg",
    alt: "漫画4: J-Compassの支援 - スムーズな会議進行、要件即決、ベンダー交渉",
  },
  {
    src: "/images/service_manga_05.jpg",
    alt: "漫画5: プロジェクト成功 - 無事完了し、チームで喜びを分かち合う",
  },
]

export function ServiceMangaSection() {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 mb-6">
            <span className="text-primary font-bold text-sm tracking-wider">
              MANGA
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance  text-foreground">
            漫画でわかるJ-Compass
          </h2>
        </AnimatedSection>

        <div className="mx-auto max-w-5xl flex flex-col gap-0">
          {mangaPages.map((page, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="relative w-full">
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={960}
                  height={1357}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 960px"
                  priority={index === 0}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
