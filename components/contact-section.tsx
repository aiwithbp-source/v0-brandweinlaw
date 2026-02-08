"use client"

import React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-accent uppercase">
            Get in Touch
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Contact Us
          </h2>
          <div className="mx-auto mb-6 h-px w-16 bg-accent" />
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Every great estate plan begins with a conversation. Reach out to
            discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    Our Office
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    1707 Shermer Rd, Suite 126
                    <br />
                    Northbrook, IL 60062
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    Phone
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Phone:{" "}
                    <a href="tel:8475099200" className="text-accent hover:underline">
                      (847) 509-9200
                    </a>
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Fax: (847) 509-9207
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    Email
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Contact us using the form below
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    Office Hours
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-8 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Brandwein & Brandwein office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.0!2d-87.83!3d42.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5e0!2s1707+Shermer+Rd+Northbrook+IL!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-sm border border-accent/30 bg-accent/5 p-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Send className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
                  Thank You
                </h3>
                <p className="text-sm text-muted-foreground">
                  We have received your inquiry and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium tracking-wide text-foreground uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium tracking-wide text-foreground uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium tracking-wide text-foreground uppercase"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium tracking-wide text-foreground uppercase"
                  >
                    Please Describe Your Issue
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="resize-none rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="Tell us briefly about your situation and how we may assist you..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Submit Inquiry
                </button>

                <p className="text-xs text-muted-foreground">
                  Your information is kept strictly confidential under
                  attorney-client privilege.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
