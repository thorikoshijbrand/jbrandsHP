import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Code, Settings, CheckCircle } from "lucide-react"

const trainingPrograms = [
  {
    number: "01",
    title: "ビジネスマナー研修",
    description:
      "社会人としての基本的なビジネスマナーを身につけます。挨拶、名刺交換、電話応対、メール作成など、現場で即実践できるスキルを習得します。",
    icon: Users,
  },
  {
    number: "02",
    title: "IT基礎研修",
    description:
      "ネットワーク、データベース、セキュリティなどITの基礎知識を体系的に学びます。御社の技術スタックに合わせた内容にカスタマイズが可能です。",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "ロジック研修",
    description:
      "プログラミングに必要な論理的思考力を養います。フローチャートの作成やアルゴリズムの基礎を通じて、問題解決能力を高めます。",
    icon: Settings,
  },
  {
    number: "04",
    title: "システム開発研修",
    description:
      "要件定義から設計、実装、テストまで、システム開発の一連の流れを実践形式で学びます。チーム開発の進め方やバージョン管理も含みます。",
    icon: Code,
  },
]

const customFeatures = [
  "御社独自の開発手法（アジャイル、ウォーターフォール等）に基づいたカリキュラム",
  "社内制度・ルールに沿った業務フローの理解",
  "御社の技術スタック・開発環境に合わせた実践演習",
  "現場配属を見据えたOJT連携プログラム",
  "メンター制度との連携による個別フォロー",
]

const flowSteps = [
  {
    number: "01",
    title: "ヒアリング",
    description: "御社の制度・開発手法・求める人材像をお伺いします。",
  },
  {
    number: "02",
    title: "カリキュラム設計",
    description: "基本研修に御社独自の内容を組み込んだプログラムを設計します。",
  },
  {
    number: "03",
    title: "研修実施",
    description: "経験豊富な講師が、実践重視の研修を行います。",
  },
  {
    number: "04",
    title: "現場配属・フォロー",
    description: "研修後も定着支援やフォローアップを実施します。",
  },
]

export default function SchoolPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          title="新卒IT研修"
          description="御社独自の制度・開発手法に基づいたプログラムで、新卒を即戦力へ。"
          backgroundImage="/services-hero-bg.jpg"
          backgroundAlt="School background"
        />

        {/* Intro Section */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance font-serif">
                基本研修 + 御社独自のプログラム
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                基本のビジネスマナー・IT基礎・ロジック・システム開発研修に加え、
                御社独自の制度や開発手法に基づいた研修を組み込むことで、
                現場で即活躍できる人材を育成します。
              </p>
            </AnimatedSection>

            {/* Training Programs */}
            <div className="space-y-8 lg:space-y-10 max-w-4xl mx-auto">
              {trainingPrograms.map((program, index) => {
                const isDark = index % 2 === 0
                const Icon = program.icon
                return (
                  <AnimatedSection key={index} delay={0.2}>
                    <div
                      className={`rounded-2xl px-6 py-8 lg:px-10 lg:py-10 ${
                        isDark
                          ? "bg-zinc-800 shadow-xl"
                          : "bg-white border border-border shadow-lg"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                            isDark ? "bg-white/10" : "bg-zinc-800/5"
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              isDark ? "text-white/80" : "text-zinc-600"
                            }`}
                          />
                        </div>
                        <div
                          className={`inline-block px-4 py-1.5 rounded-full ${
                            isDark ? "bg-white/10" : "bg-zinc-800/5"
                          }`}
                        >
                          <span
                            className={`font-bold text-xs tracking-widest ${
                              isDark ? "text-white/80" : "text-zinc-600"
                            }`}
                          >
                            STEP {program.number}
                          </span>
                        </div>
                      </div>

                      <h3
                        className={`text-2xl lg:text-3xl font-bold mb-4 font-serif ${
                          isDark ? "text-white" : "text-foreground"
                        }`}
                      >
                        {program.title}
                      </h3>

                      <p
                        className={`text-base lg:text-lg leading-relaxed ${
                          isDark ? "text-white/80" : "text-muted-foreground"
                        }`}
                      >
                        {program.description}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* Custom Program Section */}
        <section className="py-16 lg:py-24 bg-zinc-800">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance font-serif text-white">
                御社独自のカスタマイズ
              </h2>
              <p className="text-lg leading-relaxed text-white/80">
                基本研修に加え、御社の制度・開発手法に合わせた独自プログラムを組み込みます。
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection delay={0.2}>
                <div className="space-y-4">
                  {customFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-xl bg-white/5 px-6 py-5"
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-base lg:text-lg leading-relaxed text-white/90">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Flow Section */}
        <section className="px-4 lg:px-8 py-12 lg:py-20 bg-neutral-50">
          <div className="container mx-auto px-8 lg:px-16 bg-white py-12 lg:py-16 rounded-3xl border border-border shadow-sm">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance font-serif">
                導入の流れ
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {flowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 text-neutral-50 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
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
                研修プログラムのご相談はこちら
              </h2>
              <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-white/80">
                御社の新卒育成に最適なプログラムをご提案いたします。まずはお気軽にお問い合わせください。
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
