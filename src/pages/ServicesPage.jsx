import { Link } from "react-router-dom";
import { FaCode, FaMobile, FaGlobe, FaPalette, FaRocket, FaUsers, FaServer, FaDatabase, FaCloud, FaLaptopCode } from "react-icons/fa";
import { SiPython, SiReact, SiFlutter, SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: <SiReact className="text-4xl text-blue-500" />,
      title: "Frontend Web Development",
      description: "Building modern, responsive, and interactive web applications using cutting-edge technologies. Specializing in React, Next.js, and advanced JavaScript frameworks with beautiful UI/UX design.",
      features: ["React & Next.js Apps", "Responsive Design", "Modern JavaScript", "Tailwind CSS Styling", "Performance Optimization", "SEO Implementation"],
      techStack: ["JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      id: 2,
      icon: <SiPython className="text-4xl text-green-500" />,
      title: "Backend & Python Development",
      description: "Creating robust server-side applications, APIs, and automation scripts with Python. From web backends to data processing and automation tools for your business needs.",
      features: ["REST API Development", "Database Integration", "Web Scraping", "Automation Scripts", "Data Processing", "Server Architecture"],
      techStack: ["Python", "Flask/Django", "PostgreSQL", "MongoDB"]
    },
    {
      id: 3,
      icon: <FaMobile className="text-4xl text-purple-500" />,
      title: "Cross-Platform Mobile Apps",
      description: "Developing mobile applications that work seamlessly on both iOS and Android platforms using React Native and Flutter. One codebase, multiple platforms.",
      features: ["React Native Development", "Flutter Applications", "Cross-platform Solutions", "App Store Deployment", "Push Notifications", "Native Performance"],
      techStack: ["React Native", "Flutter", "JavaScript", "Dart"]
    },
    {
      id: 4,
      icon: <FaServer className="text-4xl text-indigo-500" />,
      title: "Full-Stack Development",
      description: "Complete end-to-end application development combining frontend, backend, and database technologies. From concept to deployment with modern DevOps practices.",
      features: ["Complete Web Applications", "Database Design", "API Development", "Cloud Deployment", "Authentication Systems", "Real-time Features"],
      techStack: ["React", "Python", "Node.js", "PostgreSQL"]
    },
    {
      id: 5,
      icon: <FaPalette className="text-4xl text-pink-500" />,
      title: "UI/UX Design & Prototyping",
      description: "Creating intuitive and visually appealing user interfaces with focus on user experience. From wireframes to high-fidelity prototypes and implementation.",
      features: ["User Interface Design", "User Experience Research", "Wireframing & Prototyping", "Design Systems", "Responsive Design", "Accessibility"],
      techStack: ["Figma", "Adobe XD", "CSS3", "Tailwind CSS"]
    },
    {
      id: 6,
      icon: <FaCloud className="text-4xl text-cyan-500" />,
      title: "Web Automation & Scripting",
      description: "Automating repetitive tasks, data collection, and business processes using Python scripts and web technologies. Increase efficiency and reduce manual work.",
      features: ["Process Automation", "Web Scraping", "Data Collection", "Report Generation", "Task Scheduling", "Integration Solutions"],
      techStack: ["Python", "Selenium", "BeautifulSoup", "APIs"]
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
            <Link to="/services" className="text-orange-500 transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-orange-500 transition-colors">Portfolio</Link>
            <Link to="/contactme" className="hover:text-orange-500 transition-colors">Contact</Link>
          </div>
          <Link 
            to="/contactme"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition-colors"
          >
            Hire Me
          </Link>
        </nav>

        {/* Services Hero */}
        <section className="px-8 py-20 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">What I Offer</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Services</h1>
            <div className="max-w-4xl mx-auto bg-orange-500 text-black rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">My Mission</h2>
              <p className="text-lg leading-relaxed">
                My mission is to help create new ideas from an infant stage and bring them to maturity 
                by giving them life and purpose through the implementation of modern knowledge and cutting-edge technology.
              </p>
            </div>
          </div>

          {/* How Can I Help You Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16">How Can I Help You?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gray-900 p-4 rounded-full">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <span className="text-orange-500 text-2xl font-bold">0{service.id}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-500 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, index) => (
                          <span key={index} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium text-blue-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="px-8 py-20 lg:px-20 bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Me?</h2>
              <p className="text-gray-400 text-xl">What sets me apart from the competition</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                <FaRocket className="text-orange-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">
                  Quick turnaround times without compromising quality. Agile development with regular updates.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                <FaUsers className="text-blue-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Full-Stack Expertise</h3>
                <p className="text-gray-300 text-sm">
                  Complete solution from frontend to backend, handling every aspect of your project.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                <SiPython className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Python Automation</h3>
                <p className="text-gray-300 text-sm">
                  Streamline your business with custom Python scripts and automation solutions.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                <FaCode className="text-purple-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Modern Stack</h3>
                <p className="text-gray-300 text-sm">
                  Latest technologies: React, Next.js, Python, Flutter for cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-8 py-20 lg:px-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your ideas and turn them into reality with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactme"
                className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="border border-gray-600 hover:border-orange-500 px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesPage;
