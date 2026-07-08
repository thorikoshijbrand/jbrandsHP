import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-neutral-800">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-50">株式会社ｊブランド</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <p className="leading-relaxed text-slate-300">
                  東京都千代田区神田駿河台3-4
                  <br />
                  龍名館本店ビル5階
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:03-6206-0460" className="hover:text-primary transition-colors text-slate-300">
                  03-6206-0460
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:contact@jbrands.co.jp" className="hover:text-primary transition-colors text-slate-300">
                  contact@jbrands.co.jp
                </a>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">サイトマップ</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform text-slate-300">ホーム</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform text-slate-300">会社情報</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform text-slate-300">事業内容</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/school"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform text-slate-300">新卒IT研修</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform text-slate-300">ニュース</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform text-slate-300">お問い合わせ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">サービス</h4>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">リンク</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform text-slate-300">プライバシーポリシー</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 株式会社ｊブランド. All Rights Reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                サイトマップ
              </Link>
              <Link href="/accessibility" className="hover:text-primary transition-colors">
                アクセシビリティ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
