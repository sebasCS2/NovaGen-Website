"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/translation-context"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const handleNavClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-bold text-foreground"
            onClick={handleNavClick}
          >
            <Image src="/images/novagen-logo.png" alt="NovaGen Logo" width={40} height={40} className="rounded-lg" />
            NovaGen
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors" onClick={handleNavClick}>
              {t.nav.home}
            </Link>
            <Link
              href="/plans"
              className="text-foreground hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              {t.nav.plans}
            </Link>
            <Button
              asChild
              className="gradient-btn"
            >
              <Link href="/plans" onClick={handleNavClick}>
                {t.home.hero.getStarted}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/plans"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              {t.nav.plans}
            </Link>
            <Button
              asChild
              className="w-full gradient-btn"
            >
              <Link href="/plans" onClick={handleNavClick}>
                {t.home.hero.getStarted}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
