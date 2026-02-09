"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Users, Zap, Target, BarChart3, Award, Quote } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/components/translation-context"
import { useState, useEffect } from "react"

export default function HomePage() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const slides = [
    {
      value: "+331%",
      label: t.home.hero.peakProfit,
      sublabel: t.home.hero.inMonths,
    },
    {
      value: "2-5X",
      label: "Average ROI",
      sublabel: "Return on Investment",
    },
    {
      value: "90 Days",
      label: "Average Time to Profit Growth",
      sublabel: "Results-driven approach",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                {t.home.hero.title} <span className="gradient-text">{t.home.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{t.home.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-btn">
                  <Link href="/contact">
                    {t.home.hero.getStarted} <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/plans">{t.home.hero.viewPlans}</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                className="gradient-border overflow-hidden p-8 flex items-center justify-center"
                style={{ aspectRatio: "100 / 70" }}
              >
                <div className="text-center space-y-4 relative h-full flex flex-col justify-center">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                        currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      <div className="text-6xl font-bold gradient-text">{slide.value}</div>
                      <div className="text-card-foreground text-xl mt-4">{slide.label}</div>
                      <div className="text-muted-foreground text-sm mt-2">{slide.sublabel}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text">+210%</div>
                <div className="text-sm text-secondary-foreground/80">{t.home.stats.tpn}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text">+331%</div>
                <div className="text-sm text-secondary-foreground/80">{t.home.stats.gldPeak}</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text">+178%</div>
                <div className="text-sm text-secondary-foreground/80">{t.home.stats.gldRevenue}</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{t.home.services.title}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.home.services.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: t.home.services.revenue.title,
                description: t.home.services.revenue.description,
              },
              {
                icon: Zap,
                title: t.home.services.efficiency.title,
                description: t.home.services.efficiency.description,
              },
              {
                icon: Users,
                title: t.home.services.team.title,
                description: t.home.services.team.description,
              },
              {
                icon: Target,
                title: t.home.services.alliances.title,
                description: t.home.services.alliances.description,
              },
              {
                icon: BarChart3,
                title: t.home.services.data.title,
                description: t.home.services.data.description,
              },
              {
                icon: Award,
                title: t.home.services.results.title,
                description: t.home.services.results.description,
              },
            ].map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <Card className="gradient-border p-6 space-y-4 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - TPN */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
                {t.home.caseStudies.title}
              </h2>
              <p className="text-xl text-muted-foreground">{t.home.caseStudies.subtitle}</p>
            </div>

            <Card className="gradient-border p-8 md:p-12 mb-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{t.home.caseStudies.tpn.name}</h3>
                <p className="text-muted-foreground">{t.home.caseStudies.tpn.industry}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.tpn.before}</div>
                    <div className="text-3xl font-bold text-card-foreground">$7.5K</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.tpn.monthlyProfit}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.tpn.after}</div>
                    <div className="text-3xl font-bold gradient-text">$23.3K</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.tpn.monthlyProfit}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.tpn.netMargin}</div>
                    <div className="text-3xl font-bold gradient-text">19% → 36%</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.tpn.peakProfitability}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.tpn.ordersPerDay}</div>
                    <div className="text-3xl font-bold gradient-text">20 → 35</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.tpn.productivity}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#EDEDED]">
                <h4 className="font-semibold mb-4 text-card-foreground">{t.home.caseStudies.tpn.keyTransformations}</h4>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {t.home.caseStudies.tpn.transforms.map((transform, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{transform}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary">
                <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.tpn.additionalProfit}</div>
                <div className="text-2xl font-bold gradient-text">$43,200</div>
                <div className="text-xs text-muted-foreground mt-1">{t.home.caseStudies.tpn.beyondBaseline}</div>
              </div>
            </Card>

            <Card className="gradient-border p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <Quote className="text-primary" size={40} />
                <p className="text-lg italic text-card-foreground leading-relaxed max-w-3xl">
                  {t.home.caseStudies.tpn.testimonial}
                </p>
                <div className="pt-4">
                  <div className="font-semibold text-card-foreground">{t.home.caseStudies.tpn.companyName}</div>
                  <div className="text-sm text-muted-foreground">{t.home.caseStudies.tpn.companyType}</div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Study - GLD */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <Card className="gradient-border p-8 md:p-12 mb-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{t.home.caseStudies.gld.name}</h3>
                <p className="text-muted-foreground">{t.home.caseStudies.gld.industry}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.gld.baselineRevenue}</div>
                    <div className="text-3xl font-bold text-card-foreground">$19K</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.gld.monthlyAverage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.gld.peakMonth}</div>
                    <div className="text-3xl font-bold gradient-text">$52.76K</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.gld.monthlyRevenue}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.gld.profitMargin}</div>
                    <div className="text-3xl font-bold text-card-foreground">28% → 44.9%</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.gld.peakProfitability}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.gld.clientsPerDay}</div>
                    <div className="text-3xl font-bold gradient-text">7 → 19</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.gld.volumeIncrease}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#EDEDED]">
                <h3 className="font-semibold mb-4 text-card-foreground">{t.home.caseStudies.gld.growthLevers}</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {t.home.caseStudies.gld.levers.map((lever, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{lever}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">{t.home.caseStudies.gld.servicesOffered}</div>
                  <div className="text-sm font-medium text-card-foreground">{t.home.caseStudies.gld.services}</div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">{t.home.caseStudies.gld.serviceTime}</div>
                  <div className="text-sm font-medium text-card-foreground">{t.home.caseStudies.gld.timeRange}</div>
                </div>
              </div>
            </Card>

            <Card className="gradient-border p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <Quote className="text-primary" size={40} />
                <p className="text-lg italic text-card-foreground leading-relaxed max-w-3xl">
                  {t.home.caseStudies.gld.testimonial}
                </p>
                <div className="pt-4">
                  <div className="font-semibold text-card-foreground">{t.home.caseStudies.gld.companyName}</div>
                  <div className="text-sm text-muted-foreground">{t.home.caseStudies.gld.companyType}</div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Study - MR Roofing */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-5xl mx-auto">
            <Card className="gradient-border p-8 md:p-12 mb-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{t.home.caseStudies.mrr.name}</h3>
                <p className="text-muted-foreground">{t.home.caseStudies.mrr.industry}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.mrr.baselineRevenue}</div>
                    <div className="text-3xl font-bold text-card-foreground">$40K</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.mrr.monthlyAverage}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.mrr.peakMonth}</div>
                    <div className="text-3xl font-bold gradient-text">$116K</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.mrr.monthlyRevenue}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.mrr.netMargin}</div>
                    <div className="text-3xl font-bold gradient-text">$8K → $40K</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.mrr.netMarginGrowth}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.mrr.clientsPerWeek}</div>
                    <div className="text-3xl font-bold gradient-text">1-2 → 4-8</div>
                    <div className="text-sm text-muted-foreground">{t.home.caseStudies.mrr.clientsGrowth}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#EDEDED]">
                <h4 className="font-semibold mb-4 text-card-foreground">{t.home.caseStudies.mrr.keyTransformations}</h4>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {t.home.caseStudies.mrr.transforms.map((transform, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold">{"•"}</span>
                      <span>{transform}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">{t.home.caseStudies.mrr.headcount}</div>
                  <div className="text-sm font-medium text-card-foreground">{t.home.caseStudies.mrr.teamGrowth}</div>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">{t.home.caseStudies.mrr.profitability}</div>
                  <div className="text-sm font-medium text-card-foreground">{t.home.caseStudies.mrr.profitabilityGrowth}</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary">
                <div className="text-sm text-muted-foreground mb-1">{t.home.caseStudies.mrr.additionalProfit}</div>
                <div className="text-2xl font-bold gradient-text">$128,000</div>
                <div className="text-xs text-muted-foreground mt-1">{t.home.caseStudies.mrr.beyondBaseline}</div>
              </div>
            </Card>

            <Card className="gradient-border p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <Quote className="text-primary" size={40} />
                <p className="text-lg italic text-card-foreground leading-relaxed max-w-3xl">
                  {t.home.caseStudies.mrr.testimonial}
                </p>
                <div className="pt-4">
                  <div className="font-semibold text-card-foreground">{t.home.caseStudies.mrr.companyName}</div>
                  <div className="text-sm text-muted-foreground">{t.home.caseStudies.mrr.companyType}</div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-secondary-foreground">
              {t.home.cta.title}
            </h2>
            <p className="text-xl text-secondary-foreground/80">{t.home.cta.subtitle}</p>
            <Button asChild size="lg" className="gradient-btn">
              <Link href="/contact">
                {t.home.cta.button} <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  )
}
