"use client";

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "The Apartment Hub",
    description:
      "A comprehensive apartment rental platform connecting tenants and landlords with modern search and booking features.",
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://the-apartment-hub-website.vercel.app",
  },
  {
    id: 2,
    title: "Drip Co",
    description:
      "A modern fashion e-commerce website showcasing trendy clothing and accessories with an elegant design.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://drip-co-fashion-website-615m.vercel.app",
  },
  {
    id: 3,
    title: "DesireNg",
    description:
      "A food and restaurant website showcasing cuisines with a clean, elegant user interface.",
    technologies: ["React", "CSS3", "JavaScript"],
    liveUrl: "https://my-food-cocktail-delivery-website.vercel.app",
  },
  {
    id: 4,
    title: "The Wild Oasis — Admin",
    description:
      "A hotel management admin dashboard with booking, cabin, and staff management features.",
    technologies: ["React", "Supabase", "React Query"],
    liveUrl: null,
  },
  {
    id: 5,
    title: "The Wild Oasis — Client",
    description:
      "Customer-facing hotel booking website with authentication and reservation system.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    liveUrl: "https://the-wild-oasis-website-demo-coral.vercel.app",
  },
];

const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  Mobile: ["React Native", "Flutter"],
  "Security & Systems": [
    "Python",
    "Cybersecurity fundamentals",
    "Log analysis",
    "Security tooling",
  ],
};

const exploring = [
  "Cybersecurity practices",
  "Backend architecture and scalable systems",
  "AI-assisted development workflows",
  "Observability and log analysis",
];

const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Technologies", id: "technologies" },
  { label: "Contact", id: "contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#080e1a" }}>
      {/* Subtle fixed grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080e1a]/96 backdrop-blur-md border-b border-gray-800/60"
            : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-base font-semibold tracking-tight text-white hover:text-orange-400 transition-colors"
          >
            Tobias E.
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-500 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#080e1a]/98 border-t border-gray-800/60 px-6 py-6 space-y-5 text-sm text-gray-400">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Page content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* ── Hero ── */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center pt-24 pb-20 animate-fadeInUp"
        >
          <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-6">
            Software Engineer
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-5 text-white">
            Tobias E.
          </h1>
          <p className="text-lg text-gray-500 mb-6 font-light">
            Software Engineer • Builder • Mentor
          </p>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-10 text-sm">
            I design and build web and mobile systems, explore cybersecurity,
            and contribute to initiatives that help aspiring developers gain
            real-world experience through mentorship and collaborative learning.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-medium transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white px-6 py-3 text-sm font-medium transition-colors"
            >
              Contact
            </button>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-24 border-t border-gray-800/60">
          <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-10">
            About
          </p>
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold mb-5 text-white">
              Building practical digital systems
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              I&apos;m a software engineer focused on building practical digital
              systems and exploring how technology can solve real-world problems.
              My work spans web platforms, mobile systems, and cybersecurity
              exploration. I enjoy learning new technologies and understanding
              how modern systems are built and secured.
            </p>
          </div>
        </section>

        {/* ── Leadership ── */}
        <section id="leadership" className="py-24 border-t border-gray-800/60">
          <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-10">
            Leadership
          </p>
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-white mb-2">
              Co-Founder — The Wav Workshop
            </h2>
            <p className="text-gray-600 text-xs mb-5 font-mono">2022 – Present</p>
            <p className="text-gray-400 leading-relaxed text-sm">
              I co-founded The Wav Workshop, a mentorship initiative focused on
              helping aspiring developers gain real-world experience through
              guided projects and collaborative learning. The program encourages
              hands-on development and collaboration between mentors and
              aspiring engineers.
            </p>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-24 border-t border-gray-800/60">
          <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-10">
            Projects
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-800/80 p-6 hover:border-gray-700 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-orange-400 transition-colors ml-4 flex-shrink-0 mt-0.5"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-600 border border-gray-800 px-2 py-0.5 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technologies ── */}
        <section id="technologies" className="py-24 border-t border-gray-800/60">
          <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-10">
            Technologies
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {techs.map((tech) => (
                    <li
                      key={tech}
                      className="text-gray-500 text-xs flex items-center gap-2.5"
                    >
                      <span className="w-1 h-1 bg-orange-400 rounded-full flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── What I'm Exploring ── */}
        <section id="exploring" className="py-24 border-t border-gray-800/60">
          <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-10">
            What I&apos;m Exploring
          </p>
          <div className="max-w-2xl">
            <p className="text-gray-400 leading-relaxed text-sm mb-8">
              I enjoy constantly expanding my understanding of modern systems
              and security.
            </p>
            <ul className="space-y-3">
              {exploring.map((item) => (
                <li
                  key={item}
                  className="text-gray-500 text-xs flex items-start gap-3"
                >
                  <span className="w-1 h-1 bg-orange-400 rounded-full flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Mentorship & Community ── */}
        <section id="mentorship" className="py-24 border-t border-gray-800/60">
          <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-10">
            Mentorship &amp; Community
          </p>
          <div className="max-w-2xl space-y-4">
            <h2 className="text-xl font-semibold text-white">
              I believe technology grows stronger when knowledge is shared.
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              As a Co-Founder of The Wav Workshop, I help organize mentorship
              initiatives that connect aspiring developers with mentors and
              encourage collaborative learning through real-world projects.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Through this initiative, we aim to create an environment where
              developers can grow through practice, guidance, and community.
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24 border-t border-gray-800/60">
          <p className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-10">
            Contact
          </p>
          <div className="max-w-md">
            <h2 className="text-xl font-semibold text-white mb-3">
              Get in touch
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Available for collaborations, open-source contributions, and
              mentorship conversations.
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="https://github.com/MrLoop411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm group"
              >
                <FaGithub
                  size={15}
                  className="text-gray-700 group-hover:text-orange-400 transition-colors"
                />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm group"
              >
                <FaLinkedin
                  size={15}
                  className="text-gray-700 group-hover:text-orange-400 transition-colors"
                />
                LinkedIn
              </a>
              <a
                href="mailto:tobyeroms411@gmail.com"
                className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-sm group"
              >
                <FaEnvelope
                  size={15}
                  className="text-gray-700 group-hover:text-orange-400 transition-colors"
                />
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-gray-800/60 flex items-center justify-between text-gray-700 text-xs">
          <span>Tobias E.</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </div>
  );
}
