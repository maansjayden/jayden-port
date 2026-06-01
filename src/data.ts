import { Project, SkillGroup, ExperienceItem, EducationItem } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "lume",
    title: "LUME",
    subtitle: "AI Accessibility PWA",
    description: "An advanced, installable Accessibility Progressive Web App designed to empower visually impaired and neurodivergent individuals. It delivers real-time hazard detection and transforms complex text into easily digestible summaries using edge-AI models.",
    tech: ["React", "Vite", "Gemini 2.5 Flash", "Picovoice Porcupine", "Tailwind CSS", "PWA"],
    features: [
      "Voice-activated wake word ('Porcupine') for completely hands-free physical search functions.",
      "Real-time object mapping and hazard detection powered by Gemini 2.5 Flash API proxy.",
      "Instant, plain-language text summarization of physical document screenshots and pamphlets.",
      "Highly accessible low-vision UI featuring extreme color contrast, adjustable typography, and full ARIA coverage."
    ],
    accessibilityNote: "Conforms to WCAG 2.2 AAA standards with high-contrast ratios, complete keyboard support, and dynamic Aria-live announcement regions.",
    links: {
      github: "https://github.com/maansjayden/Lume-AI",
      live: "https://lumesystems.co.za"
    }
  },
  {
    id: "fun-ex",
    title: "Fun-Ex Code Clinics",
    subtitle: "Command-line Booking System",
    description: "A robust Command-Line Interface (CLI) system designed to manage and automate code clinic scheduling between software engineering students and academic mentors.",
    tech: ["Python", "Google Calendar API", "TDD", "JSON Schema", "Git"],
    features: [
      "Full integration with the Google Calendar API for real-time slot synchronization and automated calendar invite dispatching.",
      "Engineered strictly using Test-Driven Development (TDD) methodology to guarantee 100% path coverage and bulletproof input validation.",
      "Automated role-based scheduling conflicts detection to prevent duplicate bookings across overlapping time slots."
    ],
    accessibilityNote: "Command line design compatible with keyboard-only keyboard navigation and native tactile terminal screen readers (eg. NVDA/JAWS text echo).",
    links: {
      github: "https://github.com/maansjayden56",
      live: null
    }
  },
  {
    id: "mars-rover",
    title: "Mars Rover Simulation",
    subtitle: "Coordinate & Collision Engine",
    description: "A mathematical grid simulation of interplanetary Mars Rover movement, utilizing algorithmic pathfinding to guide autonomous terrain traversal.",
    tech: ["Python", "TDD", "Algorithms", "PyTest", "CI/CD"],
    features: [
      "Developed directional control and precise boundary detection coordinates for a rover traversing non-uniform grid barriers.",
      "Applied TDD to handle and gracefully recover from edge-case sensory inputs without program crash.",
      "Modular routing design allowing coordinate data dumps to export seamlessly into visualization canvas formats."
    ],
    accessibilityNote: "Complete verbal readouts for state coordinates and tactile input profiles designed for full accessibility.",
    links: {
      github: "https://github.com/maansjayden56",
      live: null
    }
  },
  {
    id: "javjer",
    title: "JAVJer",
    subtitle: "Interactive Java Learning System",
    description: "An educational web platform built to lower the barrier of entry for mastering object-oriented Java programming. The app guides developers through interactive tutorials and acts as a personalized programming mentor.",
    tech: ["React", "Vite", "Google AI Studio", "Tailwind CSS", "TypeScript"],
    features: [
      "Interactive tutorial builder powered by custom-prompted systems in Google AI Studio.",
      "Dynamic grading engine providing feedback on syntax, best practices, and logical correctness.",
      "Integrated code visualizer helping students conceptualize pointers, references, and class hierarchies.",
      "Keyboard-only navigable workspace designed to allow fully inclusive navigation."
    ],
    accessibilityNote: "Fully compliant with screen readers, leveraging structured landmarks, role descriptions, and accessible interactive code views.",
    links: {
      github: "https://github.com/maansjayden/JAVJer",
      live: null
    }
  },
  {
    id: "hjr-auto",
    title: "HJR Auto and Panel",
    subtitle: "Corporate Digital Platform Rebuild",
    description: "A complete responsive rebuild of the digital workspace and online presence for an auto body repair and panel beating workshop. Promotes digital invoices and POPIA legal compliant protocols.",
    tech: ["React", "Tailwind CSS", "Vite", "Single-Page Architecture", "Base64 Gallery"],
    features: [
      "Base64-encoded lightweight image pipeline ensuring instant load times even on slow mobile networks.",
      "Dynamic billing module containing embedded POPIA-compliant strict invoice processing policies.",
      "Mobile-optimized high-visibility interface designed for workshops and on-and-go clients.",
      "Optimized SEO tags and structural schema markup scoring a perfect 100/100 on web audits."
    ],
    accessibilityNote: "Focus-ring visibility, accessible alt-text for vehicle transformation images, and high-readability form labels.",
    links: {
      github: "https://github.com/maansjayden/hjr-web",
      live: "https://hjrgrouppaarl.co.za"
    }
  },
  {
    id: "reo-systems",
    title: "REO Systems",
    subtitle: "AI Real Estate Operating System",
    description: "A B2B SaaS CRM built specifically for real estate agents and agencies. Uses vector embeddings and semantic AI to match clients to properties based on intent — not just filters — while automating lead pipelines, eligibility checks, and social media distribution.",
    tech: ["Next.js 15", "FastAPI", "Supabase", "PostgreSQL", "pgvector", "Gemini API", "Docker", "TypeScript", "Tailwind CSS"],
    features: [
      "Semantic property-client matching using 384-dimensional vector embeddings (all-MiniLM-L6-v2) — understands intent like 'pet-friendly loft feel', not just checkboxes.",
      "Eligibility guardrails that flag documentation gaps before an agent contacts a client, reducing wasted viewings.",
      "Kanban lead pipeline with drag-and-drop for managing the full sales and rental funnel.",
      "One-click social media distribution — converts a listing into an Instagram Reel, carousel, and WhatsApp blast automatically."
    ],
    accessibilityNote: "Keyboard-navigable Kanban board with full focus management and ARIA live regions for real-time lead updates.",
    links: {
      github: "https://github.com/maansjayden/real-estate-crm",
      live: "https://reosystems.eu"
    }
  }
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
  },
  {
    category: "Frameworks & Runtimes",
    skills: ["React", "Vite", "FastAPI", "Node.js", "TDD Paradigms"]
  },
  {
    category: "Tools, APIs & Databases",
    skills: ["Git", "VS Code", "IntelliJ IDEA", "PostgreSQL", "SQLite", "Docker", "RESTful APIs", "Google Calendar API", "Fidelio", "iTravel"]
  }
];

export const SPOKEN_LANGUAGES = [
  { lang: "Afrikaans", level: "Native" },
  { lang: "English", level: "Fluent" },
  { lang: "Dutch", level: "Studying" },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "lume-systems",
    role: "Founder & Lead Developer",
    organization: "Lume Systems",
    location: "Cape Town, South Africa",
    period: "2024 - Present",
    description: [
      "Founded and directed Lume Systems to pioneer assistive, intelligent, and highly accessible web products for underserved users.",
      "Architected LUME, the core AI Accessibility PWA, integrating WebRTC, Picovoice SDK, and Google's Gemini 2.5 Flash engine for low-latency visual support.",
      "Championed digital accessibility principles, designing interfaces optimized for WCAG AAA compliance and seamless screen-reader integrations."
    ],
    achievements: [
      "Secured positive initial user feedback from assistive beta testers, achieving a 45% reduction in daily physical text recognition overhead.",
      "Crafted a voice-based interaction framework with 100% voice command reliability on Edge devices without external server dependency."
    ],
    isFounding: true
  },
  {
    id: "wtc-coordinator",
    role: "Front Desk Coordinator",
    organization: "WeThinkCode_",
    location: "Cape Town, South Africa",
    period: "Mar 2026 - Present",
    description: [
      "Primary point of contact for campus operations, managing access control and daily logistics for students and corporate partners.",
      "Liaison between internal teams and external visitors, ensuring smooth communication and a professional campus environment."
    ],
    achievements: [
      "Optimized visitor checking structures and unified local communication protocols.",
      "Coordinated daily campus resource allocation and direct operational compliance."
    ]
  },
  {
    id: "wtc-facilitator",
    role: "Placement Facilitator",
    organization: "WeThinkCode_",
    location: "Cape Town, South Africa",
    period: "Sep 2025 - Feb 2026",
    description: [
      "Coordinated the student placement module, connecting WeThinkCode_ graduates with industry hiring partners.",
      "Managed scheduling, communication, and documentation to streamline the end-to-end recruitment process for multiple cohorts."
    ],
    achievements: [
      "Facilitated career-readiness onboarding and tracking interfaces for student-to-employer matching channels."
    ]
  },
  {
    id: "freelance-arrival",
    role: "Check-in Clerk & Arrival Escort",
    organization: "Freelance",
    location: "V&A Waterfront, Cape Town",
    period: "2024 - Present",
    description: [
      "Delivered premium guest check-in services for Ritz-Carlton Yacht Collection, Royal Caribbean, Azamara, and Regent Seven Seas.",
      "Processed secure passenger data and managed arrival logistics using Fidelio and iTravel, maintaining strict accuracy and confidentiality."
    ],
    achievements: [
      "Maintained 100% accuracy in high-pressure entry data verification audits.",
      "Successfully coordinated arrivals for luxury travel vessels with stringent regulatory standards."
    ]
  },
  {
    id: "iec-electoral",
    role: "Electoral Officer",
    organization: "Independent Electoral Commission (IEC)",
    location: "South Africa",
    period: "May 2024",
    description: [
      "Managed voting station setup, flow, and logistics for the 2024 National and Provincial Elections.",
      "Ensured data integrity and procedural compliance throughout the voting process at an active polling station."
    ],
    achievements: [
      "Maintained clean audit logs and delivered 100% compliant data transmission records for polling results."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "wtc",
    diploma: "NQF Level 6 Software Engineering",
    institution: "WeThinkCode_",
    period: "2025 - Present",
    description: "An intensive software product construction curriculum focusing on high-performance algorithms, object-oriented design, test-driven development (TDD), agile methodologies, database modeling, and end-to-end application delivery.",
    skillsAcquired: [
      "Object-Oriented Design in Python & Java",
      "Test-Driven Development (TDD) and PyTest/JUnit testing",
      "Relational Databases and SQL scripting",
      "System Architecture & Agile Team Lead roles"
    ]
  },
  {
    id: "harvard",
    diploma: "CS50P: Introduction to Programming with Python",
    institution: "Harvard University (edX)",
    period: "In Progress",
    description: "An international curriculum focused on developing algorithms, file input/output patterns, regular expressions, and unit testing paradigms under Python.",
    skillsAcquired: [
      "Advanced regular expressions, pattern matching, and error correction mechanisms",
      "Unit testing infrastructure using Python pytest suites",
      "Optimized procedural and object-oriented paradigms in Python"
    ]
  },
  {
    id: "matric",
    diploma: "National Senior Certificate (Matric)",
    institution: "Klein Nederburg High School",
    period: "2020 Completed",
    description: "Completed secondary school certification with rigorous performance benchmarks in computing and logical theory.",
    skillsAcquired: [
      "Critical reasoning, logic construction, and verbal/written communication mastery"
    ]
  }
];
