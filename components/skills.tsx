"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "HTML/CSS", level: 95, color: "bg-accent" },
    { name: "JavaScript", level: 90, color: "bg-secondary" },
    { name: "React", level: 85, color: "bg-accent" },
    { name: "TypeScript", level: 80, color: "bg-secondary" },
    { name: "UI/UX Design", level: 90, color: "bg-accent" },
    { name: "Figma", level: 85, color: "bg-secondary" },
    { name: "Firebase", level: 60, color: "bg-accent" },
    { name: "Java", level: 50, color: "bg-secondary" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <Card className="p-6 sm:p-8 md:p-10 bg-card border-border">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm sm:text-base font-mono text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Additional Skills */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Node.js", "Git", "REST APIs", "Responsive Design", "Accessibility"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-lg border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Communication",
                  "Team Collaboration",
                  "Time Management",
                  "Creativity",
                  "Adaptability",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/10 text-secondary rounded-lg border border-secondary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
