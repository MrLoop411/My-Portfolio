import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-gradient-x"></div>
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6 lg:px-20 relative">
          <Link to="/" className="text-2xl font-bold hover:text-orange-500 transition-colors">Tobias</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="text-orange-500 hover:text-orange-500 transition-colors">About</Link>
            <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-orange-500 transition-colors">Portfolio</Link>
            <Link to="/contactme" className="hover:text-orange-500 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl hover:text-orange-500 transition-colors"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            
            <Link 
              to="/contactme"
              className="hidden md:block bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition-colors"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-sm border-t border-gray-700 md:hidden z-[999] shadow-lg">
              <div className="px-8 py-6 space-y-4">
                <Link to="/" className="block py-2 hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className="block py-2 text-orange-500 hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/services" className="block py-2 hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/projects" className="block py-2 hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
                <Link to="/contactme" className="block py-2 hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Link to="/contactme" className="block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full transition-colors text-center mt-4" onClick={() => setMobileMenuOpen(false)}>Hire Me</Link>
              </div>
            </div>
          )}
        </nav>

        {/* About Hero Section */}
        <section className="px-8 py-20 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">About Me</p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Hi there!</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fuelled by passion for creating compelling products, I am on a continuous journey 
                to improve my work and share ideas. Learn more about my journey below.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="/portjpg.png" 
                    alt="Tobias" 
                    className="w-80 h-80 object-cover rounded-2xl border-4 border-orange-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-orange-500 text-black px-6 py-3 rounded-full font-semibold">
                    3+ Years
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">My Career So Far</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Always up for a challenge, I am currently the co-founder of THE WAV WORKSHOP, 
                  a Media and Tech start-up focused on building a community of brilliant minds 
                  working together to solve complex problems in the Media and Tech industry.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With over 3 years of experience in software development, I specialize in 
                  creating modern web and mobile applications that deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-8 py-20 lg:px-20 bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-gray-400">Technologies and tools I work with</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-center hover:border-orange-500 transition-colors">
                <span className="text-sm font-medium">UI Design</span>
              </div>
              <div className="bg-orange-500 text-black rounded-lg px-4 py-3 text-center">
                <span className="text-sm font-semibold">UX Design</span>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-center hover:border-orange-500 transition-colors">
                <span className="text-sm font-medium">Prototyping</span>
              </div>
              <div className="bg-orange-500 text-black rounded-lg px-4 py-3 text-center">
                <span className="text-sm font-semibold">HTML/CSS</span>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-center hover:border-orange-500 transition-colors">
                <span className="text-sm font-medium">JavaScript</span>
              </div>
              <div className="bg-orange-500 text-black rounded-lg px-4 py-3 text-center">
                <span className="text-sm font-semibold">React JS</span>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-center hover:border-orange-500 transition-colors">
                <span className="text-sm font-medium">Next JS</span>
              </div>
              <div className="bg-orange-500 text-black rounded-lg px-4 py-3 text-center">
                <span className="text-sm font-semibold">React Native</span>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-center hover:border-orange-500 transition-colors">
                <span className="text-sm font-medium">Python</span>
              </div>
              <div className="bg-orange-500 text-black rounded-lg px-4 py-3 text-center">
                <span className="text-sm font-semibold">Flutter</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="px-8 py-20 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Experience</h2>
              <p className="text-gray-400">My professional journey</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-orange-500 w-4 h-4 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Co-founder & Lead Developer</h3>
                    <p className="text-orange-500 mb-3">THE WAV WORKSHOP • 2022 - Present</p>
                    <p className="text-gray-300">
                      Leading a team of developers in creating innovative solutions for media and tech industry. 
                      Responsible for architecture decisions and full-stack development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-gray-600 w-4 h-4 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                    <p className="text-orange-500 mb-3">Previous Company • 2021 - 2022</p>
                    <p className="text-gray-300">
                      Developed responsive web applications using React and modern JavaScript frameworks. 
                      Collaborated with design teams to implement pixel-perfect interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
