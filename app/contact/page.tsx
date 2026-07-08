import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-20 -mt-16 pt-40 lg:pt-48 shadow-none bg-zinc-800">
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance font-serif text-neutral-50">
                お問い合わせ
              </h1>
              <p className="mt-6 text-lg leading-relaxed font-sans text-neutral-50">
                ITに関するお悩み、ベンダーとのやりとりへの不安など、お気軽にご相談ください。初回のご相談は無料です
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl">
              <div className="flex flex-col items-center gap-8 rounded-xl border border-border bg-card p-10 text-center md:p-16">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl font-serif">
                    {"お問い合わせフォーム"}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {"下記ボタンよりGoogle Formのお問い合わせフォームに遷移します。ご質問やご相談内容をお気軽にお書きください。"}
                  </p>
                </div>

                <Button asChild size="lg" className="text-base font-sans">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdXB7OCM5XTmtRXFDr8ee71kIfbfNZ5k3zXspTh3hbp9fCqlw/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"お問い合わせフォームを開く"}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <p>{"通常3営業日以内にご連絡いたします。"}</p>
                  <p>{"お急ぎの場合はその旨をフォームにご記入ください。"}</p>
                </div>
              </div>

              {/* Additional info */}
              <div className="mt-12 flex flex-col gap-6 rounded-lg border border-border bg-secondary p-8">
                <h3 className="text-lg font-bold text-foreground font-serif">
                  {"ご相談の流れ"}
                </h3>
                <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                  <div className="flex gap-4">
                    <span className="shrink-0 font-bold text-primary">{"1."}</span>
                    <p>{"フォームよりお問い合わせ内容をお送りください。"}</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="shrink-0 font-bold text-primary">{"2."}</span>
                    <p>{"担当者より3営業日以内にメールまたはお電話でご連絡いたします。"}</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="shrink-0 font-bold text-primary">{"3."}</span>
                    <p>{"初回の無料相談（オンライン・対面いずれも可）の日程を調整いたします。"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
