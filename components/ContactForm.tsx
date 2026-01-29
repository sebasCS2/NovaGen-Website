"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const inputStyles = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

const textareaStyles = "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"

const selectStyles = "flex h-10 w-[130px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will contact you shortly.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
            Phone Number
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

        <Button
          type="submit"
          className="w-full gradient-btn text-lg py-6"
          size="lg"
        >
          Start Now
        </Button>
      </form>
    </Card>
  )
}
