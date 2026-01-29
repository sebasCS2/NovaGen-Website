"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Language } from "@/lib/translations"

type TranslationContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.EN
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN")

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider")
  }
  return context
}
