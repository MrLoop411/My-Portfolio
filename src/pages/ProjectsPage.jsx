import { useState } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { FaExternalLinkAlt, FaGithub, FaBars, FaTimes } from "react-icons/fa";

function ProjectsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const wildCollection1 = [
    {
      label: "first",
      url: "/oasis902.png",
    },
    {
      label: "second",
      url: "/oasis903.png",
    },
    {
      label: "third",
      url: "/oasis904.png",
    },
  ];
  const wildCollection2 = [
    {
      label: "first",
      url: "/wildweb1.png",
    },
    {
      label: "second",
      url: "/oasis900.png",
    },
    {
      label: "third",
      url: "/oasis901.png",
    },
  ];

  const wildCollection3 = [
    {
      label: "first",
      url: "/rating1.png",
    },
    {
      label: "second",
      url: "/rating900.png",
    },
  ];
  const wildCollection4 = [
    {
      label: "first",
      url: "/cwt-clean01.png",
    },
    {
      label: "second",
      url: "/cwt-clean02.png",
    },
    {
      label: "third",
      url: "/cwt-clean03.png",
    },
  ];

  const dripCoCollection = [
    {
      label: "first",
      url: "/fs-001.png",
    },
    {
      label: "second",
      url: "/fs-002.png",
    },
    {
      label: "third",
      url: "/fs-003.png",
    },
  ];

  const desireNgCollection = [
    {
      label: "first",
      url: "/shot1-food-website1.png",
    },
    {
      label: "second",
      url: "/shot2-food-website1.png",
    },
    {
      label: "third",
      url: "/shot3-food-website1.png",
    },
  ];

  const apartmentHubCollection = [
    {
      label: "first",
      url: "/ah400.png",
    },
    {
      label: "second",
      url: "/ah401.png",
    },
    {
      label: "third",
      url: "/ah402.png",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "The Apartment Hub",
      description:
        "A comprehensive apartment rental platform connecting tenants and landlords with modern search and booking features",
      slides: apartmentHubCollection,
      liveUrl: "https://the-apartment-hub-website.vercel.app",
      githubUrl: "#",
      technologies: ["React", "Next.js", "TypeScript"],
    },
    {
      id: 2,
      title: "Drip Co",
      description:
        "A modern fashion e-commerce website showcasing trendy clothing and accessories with an elegant design",
      slides: dripCoCollection,
      liveUrl: "https://drip-co-fashion-website-615m.vercel.app",
      githubUrl: "#",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "DesireNg",
      description:
        "A modern food and restaurant website showcasing delicious cuisines with an elegant user interface",
      slides: desireNgCollection,
      liveUrl: "https://my-food-cocktail-delivery-website.vercel.app",
      githubUrl: "#",
      technologies: ["React", "CSS3", "JavaScript"],
    },
    {
      id: 4,
      title: "The Wild Oasis - Admin",
      description:
        "A comprehensive admin dashboard for hotel management with booking and cabin management",
      slides: wildCollection1,
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["React", "Supabase", "React Query"],
    },
    {
      id: 5,
      title: "The Wild Oasis - Client",
      description:
        "Customer-facing hotel booking website with authentication and reservation system",
      slides: wildCollection2,
      liveUrl: "https://the-wild-oasis-website-demo-coral.vercel.app",
      githubUrl: "#",
      technologies: ["Next.js", "TypeScript", "Supabase"],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Animated Background */}
      <div className="animate-gradient-x absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="relative flex items-center justify-between px-8 py-6 lg:px-20">
          <Link
            to="/"
            className="text-2xl font-bold transition-colors hover:text-orange-500"
          >
            Tobias
          </Link>
          <div className="hidden items-center space-x-8 md:flex">
            <Link to="/" className="transition-colors hover:text-orange-500">
              Home
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-orange-500"
            >
              About
            </Link>
            <Link
              to="/services"
              className="transition-colors hover:text-orange-500"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="text-orange-500 transition-colors hover:text-orange-500"
            >
              Portfolio
            </Link>
            <Link
              to="/contactme"
              className="transition-colors hover:text-orange-500"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl transition-colors hover:text-orange-500 md:hidden"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <Link
              to="/contactme"
              className="hidden rounded-full bg-orange-500 px-6 py-2 transition-colors hover:bg-orange-600 md:block"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="bg-gray-900/98 absolute left-0 right-0 top-full z-[999] border-t border-gray-700 shadow-lg backdrop-blur-sm md:hidden">
              <div className="space-y-4 px-8 py-6">
                <Link
                  to="/"
                  className="block py-2 transition-colors hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block py-2 transition-colors hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block py-2 transition-colors hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  className="block py-2 text-orange-500 transition-colors hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/contactme"
                  className="block py-2 transition-colors hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/contactme"
                  className="mt-4 block rounded-full bg-orange-500 px-6 py-3 text-center transition-colors hover:bg-orange-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Projects Hero */}
        <section className="px-8 py-20 lg:px-20">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-wider text-orange-500">
              My Work
            </p>
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl">
              Our Projects
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Here are my best projects so far. Take a look!
            </p>
          </div>

          {/* Projects Grid */}
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-xl bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:transform"
              >
                {/* Project Image Slider */}
                <div className="h-64 overflow-hidden">
                  <ImageSlider slides={project.slides} parentWidth={400} />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                  <p className="mb-4 leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2 font-semibold text-black transition-colors hover:bg-orange-600"
                      >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-gray-600 px-6 py-2 font-semibold transition-colors hover:border-orange-500"
                      >
                        <FaGithub size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-800/50 px-8 py-20 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to start your project?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Let's work together to bring your ideas to life with modern web
              technologies.
            </p>
            <Link
              to="/contactme"
              className="inline-block rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-orange-600"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectsPage;
