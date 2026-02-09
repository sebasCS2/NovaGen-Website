"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTranslation } from "@/components/translation-context"

export default function PlansPage() {
  const { t } = useTranslation()
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const exchangeRate = 0.92 // 1 USD = 0.92 EUR (approximate)

  const formatPrice = (usdPrice: number) => {
    if (currency === "EUR") {
      return `€${Math.round(usdPrice * exchangeRate).toLocaleString()}`
    }
    return `$${usdPrice.toLocaleString()}`
  }

  const plans = [
    {
      name: t.plans.omega.name,
      firstMonth: 4500,
      recurring: 2250,
      term: t.plans.omega.term,
      description: t.plans.omega.description,
      features: t.plans.omega.features,
    },
    {
      name: t.plans.delta.name,
      firstMonth: 6000,
      recurring: 3000,
      term: t.plans.delta.term,
      description: t.plans.delta.description,
      features: t.plans.delta.features,
      popular: true,
    },
    {
      name: t.plans.alpha.name,
      firstMonth: 8000,
      recurring: 4000,
      term: t.plans.alpha.term,
      description: t.plans.alpha.description,
      features: t.plans.alpha.features,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            {t.plans.hero.title} <span className="gradient-text">{t.plans.hero.titleHighlight}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.plans.hero.subtitle}</p>

          <div className="fixed top-24 right-6 z-10 flex gap-1 bg-card border border-border rounded-md p-0.5 shadow-sm text-xs">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                currency === "USD" ? "bg-primary text-primary-foreground" : "text-card-foreground hover:bg-muted"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency("EUR")}
              className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                currency === "EUR" ? "bg-primary text-primary-foreground" : "text-card-foreground hover:bg-muted"
              }`}
            >
              EUR
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 100}>
                <Card
                  className={`gradient-border relative p-8 space-y-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      {t.plans.common.mostPopular}
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-card-foreground">{plan.name}</h3>
                    <p className="text-sm text-card-foreground/80">{plan.description}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-card-foreground">{formatPrice(plan.firstMonth)}</span>
                      <span className="text-card-foreground/70">{t.plans.common.firstMonth}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-card-foreground/80">
                        {formatPrice(plan.recurring)}
                      </span>
                      <span className="text-sm text-card-foreground/70">{t.plans.common.monthAfter}</span>
                    </div>
                    <div className="text-xs text-card-foreground/60 mt-1">{plan.term}</div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-primary" size={14} />
                        </div>
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                    size="lg"
                  >
                    <Link href="/contact">{t.plans.common.getStarted}</Link>
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.plans.roi.title}</h2>
              <p className="text-xl text-muted-foreground">{t.plans.roi.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-border p-8 space-y-4">
                <h3 className="text-xl font-semibold text-card-foreground">{t.plans.roi.tpn.title}</h3>
                <p className="text-card-foreground/80 text-sm">{t.plans.roi.tpn.description}</p>
                <div className="pt-4 border-t border-border space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">{t.plans.roi.tpn.totalProfit}</div>
                    <div className="text-3xl font-bold gradient-text">{formatPrice(43200)}</div>
                    <div className="text-xs text-muted-foreground">{t.plans.roi.tpn.beyondBaseline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.plans.roi.tpn.monthlyIncrease}</div>
                    <div className="text-2xl font-bold gradient-text">+210%</div>
                  </div>
                </div>
              </Card>

              <Card className="gradient-border p-8 space-y-4">
                <h3 className="text-xl font-semibold text-card-foreground">{t.plans.roi.gld.title}</h3>
                <p className="text-card-foreground/80 text-sm">{t.plans.roi.gld.description}</p>
                <div className="pt-4 border-t border-border space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">{t.plans.roi.gld.peakProfit}</div>
                    <div className="text-3xl font-bold gradient-text">{formatPrice(23700)}</div>
                    <div className="text-xs text-muted-foreground">
                      Month 7 ({t.plans.roi.gld.vs} {formatPrice(5500)} {t.plans.roi.gld.baseline})
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.plans.roi.gld.peakIncrease}</div>
                    <div className="text-2xl font-bold gradient-text">+331%</div>
                  </div>
                </div>
              </Card>

              <Card className="gradient-border p-8 space-y-4 ring-2 ring-primary">
                <h3 className="text-xl font-semibold text-card-foreground">{t.plans.roi.mrr.title}</h3>
                <p className="text-card-foreground/80 text-sm">{t.plans.roi.mrr.description}</p>
                <div className="pt-4 border-t border-border space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">{t.plans.roi.mrr.peakProfit}</div>
                    <div className="text-3xl font-bold gradient-text">{formatPrice(40000)}</div>
                    <div className="text-xs text-muted-foreground">
                      Month 4 ({t.plans.roi.mrr.vs} {formatPrice(8000)} {t.plans.roi.mrr.baseline})
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.plans.roi.mrr.peakIncrease}</div>
                    <div className="text-2xl font-bold gradient-text">+190%</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg">
                <div className="text-sm text-secondary-foreground/80 mb-1">{t.plans.roi.averageRoi}</div>
                <div className="text-4xl font-bold">3-5X</div>
                <div className="text-sm text-secondary-foreground/80 mt-1">{t.plans.roi.returnOnInvestment}</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.plans.faq.title}</h2>

            <div className="space-y-6">
              <Card className="gradient-border p-6">
                <h3 className="font-semibold mb-2 text-card-foreground">{t.plans.faq.q1.question}</h3>
                <p className="text-card-foreground/80 text-sm">{t.plans.faq.q1.answer}</p>
              </Card>

              <Card className="gradient-border p-6">
                <h3 className="font-semibold mb-2 text-card-foreground">{t.plans.faq.q2.question}</h3>
                <p className="text-card-foreground/80 text-sm">{t.plans.faq.q2.answer}</p>
              </Card>

              <Card className="gradient-border p-6">
                <h3 className="font-semibold mb-2 text-card-foreground">{t.plans.faq.q3.question}</h3>
                <p className="text-card-foreground/80 text-sm">{t.plans.faq.q3.answer}</p>
              </Card>

              <Card className="gradient-border p-6">
                <h3 className="font-semibold mb-2 text-card-foreground">{t.plans.faq.q4.question}</h3>
                <p className="text-card-foreground/80 text-sm">{t.plans.faq.q4.answer}</p>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.plans.cta.title}</h2>
            <p className="text-xl text-secondary-foreground/80">{t.plans.cta.subtitle}</p>
            <Button asChild size="lg" className="gradient-btn">
              <Link href="/contact">{t.plans.cta.button}</Link>
            </Button>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  )
}
