"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "ｊブランドについて" },
    { href: "/about", label: "会社情報" },
    { href: "/services", label: "事業内容" },
    { href: "/school", label: "新卒IT研修" },
    { href: "/health-check", label: "システム開発健康度チェック" },
    { href: "/news", label: "お知らせ" },
    { href: "/contact", label: "お問い合わせ" },
  ]

  return (
    <header className="z-50 w-full shadow-none opacity-100 border-b-2 border-t-0 border-l-0 border-r-0 bg-zinc-800 border-neutral-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8 opacity-100 shadow-none">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-1">
            <Image src="/j-brush.png" alt="J" width={32} height={48} className="h-12" style={{ width: "auto" }} priority />
            <Image src="/brand-text.png" alt="BRAND" width={120} height={48} className="h-10" style={{ width: "auto" }} priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium hover:text-neutral-50/20 transition-colors text-base font-serif text-neutral-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="メニュー">
          {mobileMenuOpen ? <X className="h-6 w-6 text-neutral-50" /> : <Menu className="h-6 w-6 text-zinc-500" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium hover:text-neutral-50/20 transition-colors text-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
