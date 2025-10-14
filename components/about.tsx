"use client"

import { Card } from "@/components/ui/card"
import { Calendar, GraduationCap, Briefcase, Phone, Mail, MapPin, CheckCircle } from "lucide-react"

export function About() {
  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "January 1, 2000" },
    { icon: GraduationCap, label: "Degree", value: "Bachelor in Systems Engineering" },
    { icon: Briefcase, label: "Experience", value: "2+ Years" },
    { icon: Phone, label: "Phone", value: "+507 1234-5678" },
    { icon: Mail, label: "Email", value: "your.email@example.com" },
    { icon: MapPin, label: "Location", value: "Panama City, Panama" },
    { icon: CheckCircle, label: "Freelance", value: "Available" },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                I'm a passionate UI/UX Designer and Web Developer dedicated to crafting accessible, pixel-perfect user
                interfaces that blend thoughtful design with robust engineering.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                My favorite work lies at the intersection of design and development, creating experiences that not only
                look great but are meticulously built for performance and usability.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                With a strong foundation in both technical skills and design principles, I bring ideas to life through
                clean code and intuitive interfaces.
              </p>
            </div>

            {/* Personal Information */}
            <Card className="p-6 sm:p-8 bg-card border-border">
              <div className="grid gap-4">
                {personalInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-base font-medium text-foreground truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
