"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const inputStyles = "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

const textareaStyles = "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"

const selectStyles = "flex h-10 w-[130px] items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      countryCode: formData.countryCode,
      phoneNumber: formData.phone,
      businessName: formData.company,
      businessDescription: formData.message,
    }

    try {
      const response = await fetch("https://pruebas-estudio-n8n.trw7ae.easypanel.host/webhook/novagen-website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: "",
          email: "",
          countryCode: "+1",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to submit. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSuccess) {
    return (
      <Card className="gradient-border p-8 md:p-10">
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-card-foreground">Thank You!</h2>
          <p className="text-muted-foreground mb-6">Your message has been sent successfully. We will get back to you shortly.</p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="gradient-btn"
          >
            Send Another Message
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="gradient-border p-8 md:p-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-card-foreground">Get in Touch</h2>
        <p className="text-muted-foreground">Fill out the form below and we will get back to you shortly.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-card-foreground">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={inputStyles}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-card-foreground">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={inputStyles}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
            Phone Number *
          </label>
          <div className="flex gap-2">
            <select
              value={formData.countryCode}
              onChange={(e) => handleInputChange("countryCode", e.target.value)}
              className={selectStyles}
            >
              <option value="+1">+1 (US/CA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+33">+33 (FR)</option>
              <option value="+49">+49 (DE)</option>
              <option value="+352">+352 (LU)</option>
              <option value="+57">+57 (CO)</option>
              <option value="+34">+34 (ES)</option>
              <option value="+39">+39 (IT)</option>
              <option value="+31">+31 (NL)</option>
              <option value="+32">+32 (BE)</option>
              <option value="+41">+41 (CH)</option>
              <option value="+43">+43 (AT)</option>
              <option value="+52">+52 (MX)</option>
              <option value="+55">+55 (BR)</option>
              <option value="+54">+54 (AR)</option>
              <option value="+51">+51 (PE)</option>
              <option value="+56">+56 (CL)</option>
              <option value="+61">+61 (AU)</option>
              <option value="+81">+81 (JP)</option>
              <option value="+86">+86 (CN)</option>
              <option value="+91">+91 (IN)</option>
              <option value="+971">+971 (UAE)</option>
            </select>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="123 456 7890"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`flex-1 ${inputStyles}`}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-card-foreground">
            Business Name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Your Business Inc."
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className={inputStyles}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-card-foreground">
            Brief Business Description <span className="text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us a bit about your business and goals..."
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={textareaStyles}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gradient-btn text-lg py-6"
          size="lg"
        >
          {isSubmitting ? "Sending..." : "Start Now"}
        </Button>
      </form>
    </Card>
  )
}
