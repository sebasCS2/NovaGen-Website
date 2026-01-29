"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/components/translation-context"
import type { Language } from "@/lib/translations"

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation()

  const languages: { code: Language; name: string }[] = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
    { code: "DE", name: "Deutsch" },
    { code: "PT", name: "Português" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Globe size={16} />
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
