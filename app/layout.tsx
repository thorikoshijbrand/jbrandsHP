import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ｊブランド | 御社の永遠の社外CIO",
  description: "ITに強くなくても、システムで失敗しない。要件定義からリリース後まで、伴走型IT支援サービス",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans ${notoSansJP.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
