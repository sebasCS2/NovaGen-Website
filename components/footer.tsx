"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/components/translation-context"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">NovaGen</h3>
            <p className="text-sm text-secondary-foreground/80">{t.footer.tagline}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {t.nav.plans}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t.home.services.title}</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>{t.home.services.revenue.title}</li>
              <li>{t.home.services.efficiency.title}</li>
              <li>{t.home.services.alliances.title}</li>
              <li>{t.home.services.data.title}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail size={16} />
                <a
                  href="mailto:support@novagenengine.com"
                  className="hover:text-secondary-foreground transition-colors"
                >
                  support@novagenengine.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone size={16} />
                <span>+1 (645) 400-5780</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} NovaGen. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-secondary-foreground/60">{t.footer.language}:</span>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </footer>
  )
}
