import { Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* Logo/Name */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Your Name</h3>
              <p className="text-sm sm:text-base text-primary-foreground/80">UI/UX Designer & Web Developer</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-primary-foreground/20 w-full">
              <p className="text-sm text-primary-foreground/70">© {currentYear} Your Name. All rights reserved.</p>
              <p className="text-xs text-primary-foreground/60 mt-2">Designed & Built with passion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
