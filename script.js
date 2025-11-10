// ===================================
// Navigation Scroll Effect
// ===================================

const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// ===================================
// Intersection Observer for Animations
// ===================================

// Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all elements with fade-in class
document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element)
})

// ===================================
// Skills Progress Bar Animation
// ===================================

const skillsSection = document.querySelector(".skills-section")
let skillsAnimated = false

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !skillsAnimated) {
        animateSkills()
        skillsAnimated = true
      }
    })
  },
  { threshold: 0.3 },
)

if (skillsSection) {
  skillsObserver.observe(skillsSection)
}

function animateSkills() {
  const skillItems = document.querySelectorAll(".skill-item")

  skillItems.forEach((item, index) => {
    // Stagger the animation
    setTimeout(() => {
      item.classList.add("visible")

      // Animate the progress bar
      const progressBar = item.querySelector(".skill-progress")
      const targetWidth = progressBar.getAttribute("data-progress")

      setTimeout(() => {
        progressBar.style.width = targetWidth + "%"
      }, 100)
    }, index * 100)
  })
}

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById("contact-form")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }

    // Simulate form submission (in a real application, you would send this to a server)
    console.log("Form submitted:", formData)

    // Show success message
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

// ===================================
// Active Navigation Link Highlighting
// ===================================

const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

function highlightNavigation() {
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", highlightNavigation)

// ===================================
// Parallax Effect for Background Decorations
// ===================================

const decorations = document.querySelectorAll(".bg-decoration")

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset

  decorations.forEach((decoration, index) => {
    const speed = 0.5 + index * 0.2
    const yPos = -(scrolled * speed)
    decoration.style.transform = `translateY(${yPos}px)`
  })
})

// ===================================
// Typing Effect for Hero Title (Optional Enhancement)
// ===================================

// Uncomment this section if you want a typing effect on the hero name
/*
const heroName = document.querySelector('.hero-name');
if (heroName) {
    const text = heroName.textContent;
    heroName.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroName.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}
*/

// ===================================
// Initialize Animations on Page Load
// ===================================

window.addEventListener("load", () => {
  // Add fade-in class to sections for animation
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Highlight current navigation on load
  highlightNavigation()
})

// ===================================
// Console Message (Optional)
// ===================================

console.log("%c👋 Welcome to my portfolio!", "color: #64ffda; font-size: 20px; font-weight: bold;")
console.log("%cInterested in the code? Check out my GitHub!", "color: #8892b0; font-size: 14px;")


