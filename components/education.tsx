"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"

export function Education() {
  const education = [
    {
      year: "2016 - 2020",
      title: "Bachelor in Systems Engineering",
      institution: "Centro Educativo G.E.G",
      description: "Comprehensive education in computer science, software development, and system design.",
    },
    {
      year: "2021",
      title: "Advanced UI/UX Design Course",
      institution: "Centro ¡Supérate!",
      description:
        "Specialized training in user interface design, user experience principles, and modern design tools.",
    },
    {
      year: "2023",
      title: "Python Programming Certification",
      institution: "Online Platform",
      description: "Advanced Python programming and data structures.",
    },
  ]

  const experience = [
    {
      year: "2024 - 2025",
      title: "Customer Service & Administrative Assistant",
      company: "Ocean Blue Services",
      description:
        "Supported daily administrative operations including data entry, document management, and scheduling. Assisted in customer service by handling inquiries and ensuring client satisfaction.",
      skills: ["Communication", "Organization", "Problem-solving"],
    },
    {
      year: "2024 - 2025",
      title: "Technology Assistant",
      company: "Banco Mercantil",
      description:
        "Provided technical support including troubleshooting and hardware/software maintenance. Assisted in digitalization of documents and organization of internal records.",
      skills: ["Technical Support", "Documentation", "System Maintenance"],
    },
    {
      year: "2023 - Present",
      title: "Freelance UI/UX Designer",
      company: "Self-Employed",
      description:
        "Working on personal projects and client work, creating modern web applications with focus on user experience and accessibility.",
      skills: ["UI/UX Design", "Web Development", "Client Management"],
    },
  ]

  return (
    <section id="education" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Education & Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Education Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-accent text-accent-foreground">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                    <div className="space-y-2">
                      <p className="text-sm text-accent font-mono">{item.year}</p>
                      <h4 className="text-lg sm:text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-base text-muted-foreground font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-secondary text-secondary-foreground">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                    <div className="space-y-3">
                      <p className="text-sm text-secondary font-mono">{item.year}</p>
                      <h4 className="text-lg sm:text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-base text-muted-foreground font-medium">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
