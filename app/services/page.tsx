import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { AnimatedSection } from "@/components/animated-section"
import { servicesPageData, processSteps } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceMangaSection } from "@/components/service-manga-section"

export default function ServicesPage() {
  const gradientClasses = [
    "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent", // Service 1
    "bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent", // Service 2
    "bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent", // Service 3
    "bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent", // Service 4
    "bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent", // Service 5
  ]



  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          title="事業内容"
          titleImage={{
            src: "/images/jcompass_logo_w.png",
            alt: "事業内容",
            width: 400,
            height: 100,
          }}
          description="多くのシステム開発が失敗する理由は技術ではなく、認識のズレと判断基準の曖昧さです。"
          backgroundImage="/services-hero-bg.jpg"
          backgroundAlt="Services background"
        />

        {/* Manga Section */}
        <ServiceMangaSection />

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance font-sans">
                サービス内容
              </h3>

            </AnimatedSection>

            <div className="space-y-8 lg:space-y-10 max-w-4xl mx-auto">
              {servicesPageData.map((service, index) => {
                const isDark = index % 2 === 0
                return (
                  <AnimatedSection key={index} delay={0.2}>
                    <div
                      className={`rounded-2xl px-6 py-8 lg:px-10 lg:py-10 ${isDark
                        ? "bg-zinc-800 shadow-xl"
                        : "bg-white border border-border shadow-lg"
                        }`}
                    >
                      <div
                        className={`inline-block px-4 py-1.5 rounded-full mb-4 ${isDark ? "bg-white/10" : "bg-zinc-800/5"
                          }`}
                      >
                        <span
                          className={`font-bold text-xs tracking-widest ${isDark ? "text-white/80" : "text-zinc-600"
                            }`}
                        >
                          SERVICE {service.number}
                        </span>
                      </div>

                      <h3
                        className={`text-2xl lg:text-3xl font-bold mb-4 font-serif ${gradientClasses[index]}`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`text-base lg:text-lg leading-relaxed ${isDark ? "text-white/80" : "text-muted-foreground"
                          }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 lg:px-8 py-12 lg:py-20 bg-neutral-50">
          <div className="container mx-auto px-8 lg:px-16 bg-white py-12 lg:py-16 rounded-3xl border border-border shadow-sm">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance font-serif">
                ご相談から導入までの流れ
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 text-neutral-50 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-zinc-800">
          <Card className="shadow-none rounded-none bg-zinc-800 border-0">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance text-white font-serif">
                まずはお気軽にご相談ください
              </h2>
              <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-white/80">
                御社の課題をお聞かせください。最適なソリューションをご提案いたします。
              </p>
              <Button asChild size="lg" className="text-base hover:bg-primary/90">
                <Link href="/contact">
                  無料相談を申し込む
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
