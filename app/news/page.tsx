import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { newsItems } from "@/lib/data"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-zinc-800 py-16 lg:py-24 -mt-16 pt-40 lg:pt-48">
          <Image src="/news-hero-bg.jpg" alt="News background" fill className="object-cover opacity-70" priority />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance font-serif text-neutral-50">
                {"お知らせ"}
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
                最新のお知らせや活動情報をご覧いただけます
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer shadow-none border-0 bg-card">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <time>{item.date}</time>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
