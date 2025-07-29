import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectsPage() {
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

  const projects = [
    {
      id: 1,
      title: "The CWT Cleaning Co.",
      description: "A modern business website for a cleaning service company with booking functionality",
      slides: wildCollection4,
      liveUrl: "https://the-cwt-cleaning-co.vercel.app",
      githubUrl: "#",
      technologies: ["React", "Tailwind CSS", "Node.js"]
    },
    {
      id: 2,
      title: "The Wild Oasis - Admin",
      description: "A comprehensive admin dashboard for hotel management with booking and cabin management",
      slides: wildCollection1,
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["React", "Supabase", "React Query"]
    },
    {
      id: 3,
      title: "The Wild Oasis - Client",
      description: "Customer-facing hotel booking website with authentication and reservation system",
      slides: wildCollection2,
      liveUrl: "https://the-wild-oasis-website-demo-coral.vercel.app",
      githubUrl: "#",
      technologies: ["Next.js", "TypeScript", "Supabase"]
    },
    {
      id: 4,
      title: "iRating",
      description: "Interactive rating and review application with user authentication",
      slides: wildCollection3,
      liveUrl: "https://i-rating-app.vercel.app",
      githubUrl: "#",
      technologies: ["React", "Firebase", "Material-UI"]
    }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-gradient-x"></div>
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6 lg:px-20">
          <div className="text-2xl font-bold">Tobias</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <Link to="/projects" className="text-orange-500 transition-colors">Portfolio</Link>
            <Link to="/contactme" className="hover:text-orange-500 transition-colors">Contact</Link>
          </div>
          <Link 
            to="/contactme"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition-colors"
          >
            Hire Me
          </Link>
        </nav>

        {/* Projects Hero */}
        <section className="px-8 py-20 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">My Work</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are my best projects so far. Take a look!
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                {/* Project Image Slider */}
                <div className="h-64 overflow-hidden">
                  <ImageSlider slides={project.slides} parentWidth={400} />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-orange-500 text-black text-xs px-3 py-1 rounded-full font-medium"
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
                        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-full font-semibold transition-colors"
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
                        className="flex items-center gap-2 border border-gray-600 hover:border-orange-500 px-6 py-2 rounded-full font-semibold transition-colors"
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
        <section className="px-8 py-20 lg:px-20 bg-gray-800/50">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to bring your ideas to life with modern web technologies.
            </p>
            <Link
              to="/contactme"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-colors"
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
