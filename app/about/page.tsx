import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <PageHero title="会社情報" backgroundImage="/about-hero-bg.jpg" backgroundAlt="About background" />

        {/* Representative Message */}
        <section className="py-12 lg:py-20 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-balance text-center font-serif">
                代表メッセージ
              </h2>
              <Card className="shadow-none opacity-100 border-0">
                <CardContent className="p-8 lg:p-12">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                      システム開発は、失敗してから問題が顕在化します。
                      「要件が曖昧だった。」
                      「認識がズレていた。」
                      「費用が膨らんだ。」
                      こうした事象は、偶然の事故ではありません。
                      準備と構造が欠けたまま始めてしまったことによる、「必然」です。
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      多くの企業は、問題が表面化してから助けを求めます。
                      しかし私は、これまで数多くの現場を見てきて確信しています。
                      本質は、個人の能力不足ではなく、プロジェクトの設計思想にあるのです。
                      「誰が優秀か」ではなく「どのような構造で始めたか」
                      そこがすべてを決めます。
                    </p>
                    <p className="text-lg leading-relaxed">
                      J-Compassは、人に依存しません。
                      始める前であれば、意思決定の整理から要求の構造化までを設計します。
                      すでに始まっているのであれば、崩れた責任と合意の構造を再設計します。
                      私たちが守るのは、プロジェクトの進行そのものではありません。
                      企業が自ら意思決定し、主導権を握り続けられる構造です。
                      「システム開発を、運任せの挑戦にしない。」
                      それが、J-Compassの役割です。
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="font-semibold text-lg">代表取締役 堀越</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-4 lg:py-12 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col gap-8">
                <Card className="shadow-none border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 font-serif">ミッション</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      私たちはプロジェクト進行のにおける課題に取り組み、
                      すべての企業が、システム開発で主導権を失わない社会を目指します。
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-none border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 font-serif">ビジョン</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      私たちは、お客様にシステム開発の交渉力と思考整理力を実装し、
                      すべての企業が、テクノロジーの恩恵を受けられる社会実現に貢献します。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-balance text-center font-serif">
                会社概要
              </h2>
              <Card className="shadow-none border-0">
                <CardContent className="p-8">
                  <dl className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <dt className="font-semibold text-muted-foreground">会社名</dt>
                      <dd className="sm:col-span-2">株式会社ｊブランド</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <dt className="font-semibold text-muted-foreground">法人番号</dt>
                      <dd className="sm:col-span-2">2010001159725</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <dt className="font-semibold text-muted-foreground">所在地</dt>
                      <dd className="sm:col-span-2">東京都世田谷区北烏山５丁目１８番１８号</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <dt className="font-semibold text-muted-foreground">事業所</dt>
                      <dd className="sm:col-span-2">東京都千代田区神田駿河台3-4
                        <br />
                        龍名館本店ビル5階</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <dt className="font-semibold text-muted-foreground">設立</dt>
                      <dd className="sm:col-span-2">2014年4月</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <dt className="font-semibold text-muted-foreground">代表者</dt>
                      <dd className="sm:col-span-2">堀越太陽</dd>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <dt className="font-semibold text-muted-foreground">事業内容</dt>
                      <dd className="sm:col-span-2">
                        ITコンサルティング事業
                        <br />
                        システム開発支援事業
                        <br />
                        IT人材育成事業
                      </dd>
                    </div>
                  </dl>
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
