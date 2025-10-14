"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "TimeBe",
      description:
        "Web application for digital moderation and time management with intuitive interface and real-time tracking.",
      image: "/time-management-app-dashboard.jpg",
      tags: ["React", "TypeScript", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "FoodWizz",
      description: "Inventory management system for restaurants with real-time updates and analytics dashboard.",
      image: "/restaurant-inventory-management-system.jpg",
      tags: ["Next.js", "Node.js", "Database"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design showcasing creative work.",
      image: "/modern-portfolio-website.png",
      tags: ["React", "Tailwind", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
      image: "/ecommerce-platform-interface.png",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A selection of projects that showcase my skills in design and development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                    <Button size="sm" variant="secondary" className="gap-2" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
