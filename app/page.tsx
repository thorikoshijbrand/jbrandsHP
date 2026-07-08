"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBackgroundSlideshow } from "@/components/hero-background-slideshow"
import { AnimatedSection } from "@/components/animated-section"
import { problems, jCompassServices, strengths, newsItems } from "@/lib/data"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-zinc-800 py-28 lg:py-44">
          <HeroBackgroundSlideshow />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl font-bold tracking-tight text-primary-foreground text-balance mb-6 sm:text-4xl font-serif lg:text-5xl"
              >
                勝ち筋の９割は、着手前に描ける。
                <br />
                途中からでも、戦局は変えられる。
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-lg leading-relaxed mb-8 font-serif"
              >

              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" variant="secondary" className="text-base font-sans">
                  <Link href="/contact">
                    お問い合わせ
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base bg-primary-foreground text-[#D5080B] hover:bg-primary-foreground/20 border-2 border-solid border-secondary font-sans"
                >
                  <Link href="/services">マンガで知る</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 lg:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance text-foreground font-serif">
                {"お知らせ"}
              </h2>
            </AnimatedSection>
            <div className="mx-auto max-w-4xl space-y-0">
              {newsItems.slice(0, 3).map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="border-b border-border py-5 px-2 hover:bg-background/60 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground shrink-0">
                        <Calendar className="h-4 w-4" />
                        <time>{item.date}</time>
                      </div>
                      <span className="inline-flex items-center self-start rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary shrink-0">
                        {item.category}
                      </span>
                      <p className="text-base leading-relaxed flex-1">{item.title}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.3} className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="text-base hover:bg-primary/90 font-sans">
                <Link href="/news">
                  一覧を見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 lg:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance text-foreground font-serif">
                {"こんな状況ありませんか？"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {problems.map((problem, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }} className="h-full">
                    <Card className="overflow-hidden shadow-none border-0 bg-neutral-50 h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative w-full h-48 bg-muted/50">
                          <img
                            src={problem.image || "/placeholder.svg"}
                            alt={problem.text}
                            className="w-full object-contain shadow-none h-full bg-neutral-50"
                          />
                        </div>
                        <div className="flex items-start gap-4 p-6">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-1">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                          </div>
                          <p className="text-base leading-relaxed">{problem.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
            <div className="mt-10 rounded-lg border-2 border-primary bg-neutral-50 p-6 text-center">
              <p className="text-lg font-bold text-foreground md:text-xl">
                {"1つでも当てはまれば、"}
                <span className="text-primary">{"J-Compass"}</span>
                {"の出番です。"}
              </p>
            </div>
          </div>
        </section>

        {/* J-Compass Services Section */}
        <section className="py-16 lg:py-20 bg-zinc-800">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Image
                  src="/images/jcompass_logo_w.png"
                  alt="J-Compass"
                  width={800}
                  height={160}
                  className="h-20 md:h-24 lg:h-28 w-auto"
                  priority
                />
              </div>
              <p className="text-lg leading-relaxed text-neutral-50/80">御社の立場で考え、決めて、伝えるパートナー</p>
            </AnimatedSection>

            <div className="space-y-8 max-w-6xl mx-auto">
              {jCompassServices.map((service, index) => (
                <AnimatedSection key={index} delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="inline-block px-4 py-2 bg-neutral-50/10 rounded-full mb-4">
                        <span className="text-neutral-50 font-bold text-sm tracking-wider">
                          {service.number}
                        </span>
                      </div>
                      <h4 className="text-2xl lg:text-3xl font-bold mb-4 text-neutral-50 font-serif">
                        {service.title}
                      </h4>
                      <p className="text-base leading-relaxed text-neutral-50/80">{service.descriptions[0]}</p>
                    </motion.div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3} className="mt-16 text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base bg-neutral-50/10 text-neutral-50 hover:bg-neutral-50/20 border-2 border-[#D5080B] font-sans"
              >
                <Link href="/services">
                  サービス詳細を見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="py-16 lg:py-20 bg-neutral-50 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <AnimatedSection className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance text-foreground font-serif">
                {"私たちが選ばれる理由"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {strengths.map((strength, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }} className="h-full">
                    <Card className="shadow-none border-0 h-full hover:shadow-xl transition-shadow duration-300 bg-neutral-50">
                      <CardContent className="p-8 text-center">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          className="mb-6 flex justify-center"
                        >
                          <div className="relative w-48 h-48">
                            <Image
                              src={strength.image || "/placeholder.svg"}
                              alt={strength.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </motion.div>
                        <h3 className="text-xl font-bold mb-4 font-serif">{strength.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance text-foreground font-serif">
                まずはお気軽にご相談ください
              </h2>
              <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-muted-foreground">
                ITに関するお悩み、ベンダーととのやり取りに不安を感じている方、
                <br />
                初回のご相談が無料です。お気がるにお問い合せください。
              </p>
              <Button asChild variant="outline" size="lg" className="text-base hover:bg-primary/90 font-sans">
                <Link href="/contact">
                  無料相談を申し込む
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
