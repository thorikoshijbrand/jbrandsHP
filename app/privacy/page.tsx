import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-16 lg:py-20">
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                プライバシーポリシー
              </h1>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Card className="border-2">
                <CardContent className="p-8 lg:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      株式会社ｊブランド（以下「当社」）は、お客様の個人情報保護の重要性について認識し、
                      個人情報の保護に関する法律（以下「個人情報保護法」）を遵守すると共に、
                      以下のプライバシーポリシー（以下「本ポリシー」）に従い、適切な取扱い及び保護に努めます。
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">1. 個人情報の定義</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、
                      すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                      特定の個人を識別することができるもの、及び個人識別符号が含まれるものを指します。
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">2. 個人情報の収集方法</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      当社は、お客様が当社のサービスをご利用される際に、お客様の個人情報を収集することがあります。
                      収集する情報は、氏名、メールアドレス、電話番号、会社名などです。
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">3. 個人情報の利用目的</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      当社は、収集した個人情報を以下の目的で利用いたします。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>お客様からのお問い合わせへの対応</li>
                      <li>当社サービスの提供及び改善</li>
                      <li>当社サービスに関する情報のご案内</li>
                      <li>その他、上記利用目的に付随する目的</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4">4. 個人情報の第三者提供</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      当社は、法令に基づく場合を除き、お客様の同意を得ることなく、
                      第三者に個人情報を提供することはありません。
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">5. お問い合わせ</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      個人情報の取扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
                    </p>

                    <p className="text-sm text-muted-foreground mt-12">制定日：2025年10月1日</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
