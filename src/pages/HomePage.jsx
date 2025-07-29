import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStar,
  FaRocket,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiFlutter, SiPython } from "react-icons/si";
import { FaCode, FaMobile, FaGlobe } from "react-icons/fa";
import { useEffect, useState } from "react";

function HomePage() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
  });
  const fullText = "Tobias";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const targets = { years: 3, projects: 15, clients: 10 };
      const startTime = Date.now();

      const updateCounters = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setCounters({
          years: Math.floor(progress * targets.years),
          projects: Math.floor(progress * targets.projects),
          clients: Math.floor(progress * targets.clients),
        });

        if (progress < 1) {
          requestAnimationFrame(updateCounters);
        }
      };

      requestAnimationFrame(updateCounters);
    };

    const timer = setTimeout(animateCounters, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/portjpg.png')",
          filter: "blur(20px) brightness(0.3)",
          transform: "scale(1.1)",
        }}
      ></div>

      {/* Animated Gradient Overlay */}
      <div className="animate-gradient-x absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90"></div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {/* Large morphing blobs */}
        <div className="morphing-blob absolute left-20 top-20 h-32 w-32 rounded-full bg-orange-500/10"></div>
        <div
          className="morphing-blob absolute bottom-20 right-20 h-40 w-40 rounded-full bg-blue-500/10"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Small floating particles */}
        <div className="absolute left-20 top-20 h-2 w-2 animate-ping rounded-full bg-orange-500"></div>
        <div className="animate-float absolute right-32 top-40 h-3 w-3 animate-pulse rounded-full bg-blue-400"></div>
        <div className="absolute bottom-40 left-16 h-1 w-1 animate-bounce rounded-full bg-purple-400"></div>
        <div
          className="absolute bottom-20 right-20 h-2 w-2 animate-ping rounded-full bg-orange-300"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="animate-float absolute left-1/3 top-60 h-1 w-1 animate-pulse rounded-full bg-blue-300"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute right-1/4 top-80 h-2 w-2 animate-bounce rounded-full bg-purple-300"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Geometric shapes */}
        <div
          className="absolute left-1/2 top-32 h-6 w-6 rotate-45 animate-spin border-2 border-orange-500/30"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-32 left-1/4 h-4 w-4 animate-pulse border-2 border-blue-500/30"></div>

        {/* Stars */}
        <FaStar
          className="absolute right-1/3 top-24 animate-pulse text-yellow-400 opacity-60"
          style={{ animationDelay: "4s" }}
        />
        <FaStar
          className="absolute bottom-24 left-1/2 animate-pulse text-yellow-300 opacity-40"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6 lg:px-20">
          <div className="text-2xl font-bold">Tobias</div>
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
              className="transition-colors hover:text-orange-500"
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
          <Link
            to="/contactme"
            className="rounded-full bg-orange-500 px-6 py-2 transition-colors hover:bg-orange-600"
          >
            Hire Me
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="flex min-h-[80vh] items-center justify-between px-8 py-20 lg:px-20">
          <div className="animate-fadeInLeft max-w-2xl flex-1 opacity-0">
            <p className="animate-fadeInUp animate-delay-200 mb-4 text-sm uppercase tracking-wider text-orange-500 opacity-0">
              Hello My Name Is
            </p>
            <h1 className="animate-fadeInUp animate-delay-400 mb-6 text-5xl font-bold leading-tight opacity-0 lg:text-7xl">
              <span className="typewriter inline-block">{displayedText}</span>
              {currentIndex >= fullText.length && (
                <span className="ml-2 animate-pulse text-orange-500">
                  <FaRocket className="inline" />
                </span>
              )}
            </h1>
            <p className="animate-fadeInUp animate-delay-600 mb-8 text-xl leading-relaxed text-gray-300 opacity-0">
              I'm a Software Engineer specialized in frontend development of
              mobile and web applications with over 3 years of experience.
            </p>

            <div className="animate-fadeInUp animate-delay-800 mb-8 flex items-center gap-4 opacity-0">
              <Link
                to="/contactme"
                className="rounded-full bg-orange-500 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-orange-600"
              >
                Hire Me
              </Link>
              <Link
                to="/projects"
                className="rounded-full border border-gray-600 px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:border-orange-500"
              >
                View Portfolio
              </Link>
            </div>

            <div
              className="animate-fadeInUp flex items-center gap-4 opacity-0"
              style={{ animationDelay: "1s" }}
            >
              <a
                href="#"
                className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-orange-500"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-orange-500"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-orange-500"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          <div className="animate-fadeInRight animate-delay-600 hidden flex-1 justify-center opacity-0 lg:flex">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-orange-500 opacity-20 blur-xl"></div>
              <img
                src="/portjpg.png"
                alt="Tobias"
                className="relative h-96 w-96 rounded-full border-4 border-orange-500 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 animate-bounce rounded-full bg-orange-500 px-6 py-3 font-bold text-black">
                Available
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-800/80 px-8 py-20 lg:px-20">
          <div className="animate-fadeInUp mb-16 text-center opacity-0">
            <h2 className="mb-4 text-4xl font-bold">Services</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              I provide a wide range of digital services to help bring your
              ideas to life
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="animate-scaleIn animate-delay-200 group rounded-lg bg-gray-900/50 p-8 opacity-0 transition-all duration-300 hover:scale-105 hover:bg-gray-700/50">
              <FaCode className="mb-4 text-4xl text-orange-500 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-4 text-xl font-semibold">Web Development</h3>
              <p className="text-gray-400">
                Creating responsive and modern web applications using the latest
                technologies
              </p>
            </div>

            <div className="animate-scaleIn animate-delay-400 group rounded-lg bg-gray-900/50 p-8 opacity-0 transition-all duration-300 hover:scale-105 hover:bg-gray-700/50">
              <FaMobile className="mb-4 text-4xl text-orange-500 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-4 text-xl font-semibold">Mobile Development</h3>
              <p className="text-gray-400">
                Building cross-platform mobile applications with React Native
                and Flutter
              </p>
            </div>

            <div className="animate-scaleIn animate-delay-600 rounded-lg bg-orange-500 p-8 text-black opacity-0 transition-all duration-300 hover:scale-105">
              <FaGlobe className="mb-4 text-4xl" />
              <h3 className="mb-4 text-xl font-semibold">UI/UX Design</h3>
              <p className="">
                Designing intuitive and beautiful user interfaces that provide
                great user experience
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="relative px-8 py-20 lg:px-20">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5"></div>
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="animate-fadeInUp mb-4 text-4xl font-bold opacity-0">
                By The Numbers
              </h2>
              <p className="animate-fadeInUp animate-delay-200 text-gray-400 opacity-0">
                Achievements that speak for themselves
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
              <div className="animate-countUp card-hover rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 opacity-0">
                <h3 className="animate-glow mb-2 text-5xl font-bold text-orange-500">
                  {counters.years}+
                </h3>
                <p className="font-medium text-gray-300">Years Experience</p>
                <div className="mt-3 h-2 w-full rounded-full bg-gray-700">
                  <div
                    className="progress-bar h-2 rounded-full bg-orange-500"
                    style={{ "--progress-width": "75%" }}
                  ></div>
                </div>
              </div>
              <div className="animate-countUp animate-delay-200 card-hover rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 opacity-0">
                <h3 className="animate-glow mb-2 text-5xl font-bold text-blue-500">
                  {counters.projects}+
                </h3>
                <p className="font-medium text-gray-300">Projects Done</p>
                <div className="mt-3 h-2 w-full rounded-full bg-gray-700">
                  <div
                    className="progress-bar h-2 rounded-full bg-blue-500"
                    style={{ "--progress-width": "90%" }}
                  ></div>
                </div>
              </div>
              <div className="animate-countUp animate-delay-400 card-hover rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 opacity-0">
                <h3 className="animate-glow mb-2 text-5xl font-bold text-green-500">
                  {counters.clients}+
                </h3>
                <p className="font-medium text-gray-300">Happy Clients</p>
                <div className="mt-3 h-2 w-full rounded-full bg-gray-700">
                  <div
                    className="progress-bar h-2 rounded-full bg-green-500"
                    style={{ "--progress-width": "95%" }}
                  ></div>
                </div>
              </div>
              <div className="animate-countUp animate-delay-600 card-hover rounded-2xl border-2 border-orange-500/50 bg-orange-500/20 p-8 opacity-0">
                <h3 className="animate-glow mb-2 text-5xl font-bold text-orange-500">
                  24/7
                </h3>
                <p className="font-medium text-white">Support</p>
                <div className="mt-3 flex justify-center">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm text-green-400">
                    Always Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className="bg-gray-800/50 px-8 py-20 lg:px-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold animate-fadeInUp opacity-0">Tech Stack & Skills</h2>
              <p className="text-gray-400 animate-fadeInUp opacity-0 animate-delay-200">Technologies I master and work with daily</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { icon: <IoLogoJavascript className="text-5xl text-yellow-500" />, name: "JavaScript", level: 95 },
                { icon: <FaReact className="text-5xl text-blue-500" />, name: "React", level: 90 },
                { icon: <SiPython className="text-5xl text-green-500" />, name: "Python", level: 88 },
                { icon: <RiNextjsLine className="text-5xl text-white" />, name: "Next.js", level: 85 },
                { icon: <TbBrandReactNative className="text-5xl text-blue-400" />, name: "React Native", level: 80 },
                { icon: <RiTailwindCssFill className="text-5xl text-teal-500" />, name: "Tailwind CSS", level: 92 },
                { icon: <SiFlutter className="text-5xl text-blue-400" />, name: "Flutter", level: 75 }
              ].map((skill, index) => (
                <div key={skill.name} className={`card-hover bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 animate-scaleIn opacity-0`} style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gray-800 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <div className="mt-2 bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full progress-bar"
                          style={{'--progress-width': `${skill.level}%`}}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400 mt-1">{skill.level}% Proficiency</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm border border-gray-600/50 rounded-full px-8 py-4">
                <FaRocket className="text-orange-500 animate-bounce" />
                <span className="font-medium">Always learning new technologies</span>
                <FaStar className="text-yellow-500 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="px-8 py-20 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold animate-fadeInUp opacity-0">Featured Projects</h2>
            <p className="text-gray-400 mb-6 animate-fadeInUp opacity-0 animate-delay-200">Showcasing my latest and greatest work</p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-fadeInUp opacity-0 animate-delay-400"
            >
              View All Projects <FaRocket className="text-sm" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-gray-800 transition-all hover:scale-105 hover:transform">
              <img
                src="/cwt-clean01.png"
                alt="CWT Cleaning Co."
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  The CWT Cleaning Co.
                </h3>
                <p className="mb-4 text-sm text-gray-400">Business Website</p>
                <div className="flex gap-2">
                  <span className="rounded bg-orange-500 px-2 py-1 text-xs">
                    React
                  </span>
                  <span className="rounded bg-blue-500 px-2 py-1 text-xs">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-800 transition-all hover:scale-105 hover:transform">
              <img
                src="/oasis903.png"
                alt="Wild Oasis Admin"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  The Wild Oasis Admin
                </h3>
                <p className="mb-4 text-sm text-gray-400">Admin Dashboard</p>
                <div className="flex gap-2">
                  <span className="rounded bg-orange-500 px-2 py-1 text-xs">
                    React
                  </span>
                  <span className="rounded bg-green-500 px-2 py-1 text-xs">
                    Node.js
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-800 transition-all hover:scale-105 hover:transform">
              <img
                src="/wildweb1.png"
                alt="Wild Oasis Client"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  The Wild Oasis Client
                </h3>
                <p className="mb-4 text-sm text-gray-400">Client Portal</p>
                <div className="flex gap-2">
                  <span className="rounded bg-orange-500 px-2 py-1 text-xs">
                    Next.js
                  </span>
                  <span className="rounded bg-blue-500 px-2 py-1 text-xs">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
