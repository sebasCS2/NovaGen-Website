"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Zap, Target, Award, Mail, Phone } from "lucide-react"
import { useState, useEffect, type FormEvent } from "react"
import { useTranslation } from "@/components/translation-context"

const countryCodes = [
  { code: "+1", label: "+1 (US/CA)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+33", label: "+33 (FR)" },
  { code: "+49", label: "+49 (DE)" },
  { code: "+352", label: "+352 (LU)" },
  { code: "+57", label: "+57 (CO)" },
  { code: "+34", label: "+34 (ES)" },
  { code: "+39", label: "+39 (IT)" },
  { code: "+31", label: "+31 (NL)" },
  { code: "+32", label: "+32 (BE)" },
  { code: "+41", label: "+41 (CH)" },
  { code: "+43", label: "+43 (AT)" },
  { code: "+52", label: "+52 (MX)" },
  { code: "+55", label: "+55 (BR)" },
  { code: "+54", label: "+54 (AR)" },
  { code: "+51", label: "+51 (PE)" },
  { code: "+56", label: "+56 (CL)" },
  { code: "+61", label: "+61 (AU)" },
  { code: "+81", label: "+81 (JP)" },
  { code: "+86", label: "+86 (CN)" },
  { code: "+91", label: "+91 (IN)" },
  { code: "+971", label: "+971 (UAE)" },
]

export default function ContactPage() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    businessName: "",
    description: "",
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Thank you for your interest! We will contact you shortly.")
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+1",
      phone: "",
      businessName: "",
      description: "",
    })
  }

  const whyCards = [
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

  const stats = [
    { value: "+331%", label: t.contact.impact.peakProfit },
    { value: "+178%", label: t.contact.impact.revenueGrowth },
    { value: "44.9%", label: t.contact.impact.peakMargin },
    { value: "7", label: t.contact.impact.monthsToPeak },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {t.contact.hero.title}{" "}
              <span className="gradient-text">{t.contact.hero.titleHighlight}</span>{" "}
              {t.contact.hero.titleEnd}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.contact.hero.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose NovaGen Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                {t.contact.why.title}
              </h2>
              <p className="text-xl text-muted-foreground">{t.contact.why.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {whyCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 100}>
                <Card className="gradient-border p-6 space-y-4 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <card.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{card.title}</h3>
                  <p className="text-card-foreground/80 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Card className="gradient-border p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-card-foreground">
                  {t.contact.impact.title}
                </h2>
                <p className="text-card-foreground/70">{t.contact.impact.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-card-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section - Two Columns */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t.contact.form.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.contact.form.subtitle}
                  </p>
                </div>

                {/* Email Card */}
                <Card className="gradient-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">
                        {t.contact.form.emailUs}
                      </h3>
                      <a
                        href="mailto:support@novagenengine.com"
                        className="text-primary hover:underline"
                      >
                        support@novagenengine.com
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Phone Card */}
                <Card className="gradient-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">
                        {t.contact.form.callUs}
                      </h3>
                      <p className="text-card-foreground">+1 (645) 400-5780</p>
                      <p className="text-sm text-card-foreground/70 mt-1">
                        {t.contact.form.hours}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Form */}
            <ScrollReveal delay={100}>
              <Card className="gradient-border p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {t.contact.form.title}
                  </h3>
                  <p className="text-card-foreground/70 text-sm">
                    Fill out the form below and we will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      {t.contact.form.fullName} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      {t.contact.form.phone}
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                        className="w-32 px-3 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      {t.contact.form.company} *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>

                  {/* Business Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full gradient-btn" size="lg">
                    Start Now
                  </Button>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              {t.contact.finalCta.title}
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              {t.contact.finalCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gradient-btn">
                <a href="mailto:support@novagenengine.com">{t.contact.finalCta.emailButton}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                <a href="tel:+16454005780">{t.contact.finalCta.callButton}</a>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  )
}
