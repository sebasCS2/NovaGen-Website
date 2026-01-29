"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import { Mail, Phone, TrendingUp, Zap, Target, Award } from "lucide-react"
import { useEffect } from "react"
import { useTranslation } from "@/components/translation-context"

export default function ContactPage() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const advantages = [
    {
      icon: TrendingUp,
      title: t.contact.why.proven.title,
      description: t.contact.why.proven.description,
    },
    {
      icon: Zap,
      title: t.contact.why.operational.title,
      description: t.contact.why.operational.description,
    },
    {
      icon: Target,
      title: t.contact.why.strategic.title,
      description: t.contact.why.strategic.description,
    },
    {
      icon: Award,
      title: t.contact.why.expertise.title,
      description: t.contact.why.expertise.description,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="gradient-text">{t.contact.hero.title}</span> <span className="gradient-text">{t.contact.hero.titleHighlight}</span>{" "}
            <span className="gradient-text">{t.contact.hero.titleEnd}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.contact.hero.subtitle}</p>
        </div>
      </section>

      {/* Why Choose NovaGen */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
                {t.contact.why.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.contact.why.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={advantage.title} delay={index * 100}>
                <Card className="gradient-border p-8 space-y-4 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <advantage.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Impact Stats */}
          <ScrollReveal>
            <Card className="gradient-border p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-card-foreground">{t.contact.impact.title}</h3>
                <p className="text-muted-foreground">{t.contact.impact.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">+331%</div>
                  <div className="text-sm text-muted-foreground">{t.contact.impact.peakProfit}</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">+178%</div>
                  <div className="text-sm text-muted-foreground">{t.contact.impact.revenueGrowth}</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">44.9%</div>
                  <div className="text-sm text-muted-foreground">{t.contact.impact.peakMargin}</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">7</div>
                  <div className="text-sm text-muted-foreground">{t.contact.impact.monthsToPeak}</div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t.contact.form.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t.contact.form.subtitle}</p>
                </div>

                <div className="space-y-6">
                  <Card className="gradient-border p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-card-foreground">{t.contact.form.emailUs}</h3>
                        <a
                          href="mailto:support@novagenengine.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          support@novagenengine.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="gradient-border p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-card-foreground">{t.contact.form.callUs}</h3>
                        <p className="text-muted-foreground">+1 (645) 400-5780</p>
                        <p className="text-sm text-muted-foreground mt-1">{t.contact.form.hours}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-secondary-foreground">
              {t.contact.finalCta.title}
            </h2>
            <p className="text-xl text-secondary-foreground/80">{t.contact.finalCta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@novagenengine.com">
                <Button
                  size="lg"
                  className="gradient-btn"
                >
                  {t.contact.finalCta.emailButton}
                </Button>
              </a>
              <a href="tel:+16454005780">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary-foreground/20 hover:bg-secondary-foreground/10 bg-transparent"
                >
                  {t.contact.finalCta.callButton}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  )
}
