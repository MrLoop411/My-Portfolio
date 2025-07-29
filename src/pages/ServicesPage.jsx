import { Link } from "react-router-dom";
import { FaCode, FaMobile, FaGlobe, FaPalette, FaRocket, FaUsers } from "react-icons/fa";

function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: <FaPalette className="text-4xl text-orange-500" />,
      title: "UI/UX Design",
      description: "Designing the look and feel of interfaces optimized for different devices. Conducting tests to observe how users interact with prototypes to identify issues and areas for enhancement.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      id: 2,
      icon: <FaGlobe className="text-4xl text-orange-500" />,
      title: "Website Development",
      description: "Understanding your business goals, target audience, and industry to create websites that align with your objectives. Building responsive interfaces with HTML, CSS, and JavaScript.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Support"]
    },
    {
      id: 3,
      icon: <FaCode className="text-4xl text-orange-500" />,
      title: "Web App Development",
      description: "Assessing technical feasibility and market viability of web app ideas. Structuring and styling applications using React framework and modern CSS frameworks like Tailwind.",
      features: ["React Development", "API Integration", "Database Design", "Performance Testing"]
    },
    {
      id: 4,
      icon: <FaMobile className="text-4xl text-orange-500" />,
      title: "Mobile App Development",
      description: "Deciding what platforms to target and offering guidance on monetization models. Developing cross-platform apps that run on both iOS and Android using React Native.",
      features: ["React Native", "Cross-platform", "App Store Deployment", "Push Notifications"]
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
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-800/50 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gray-900 p-4 rounded-full">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <span className="text-orange-500 text-4xl font-bold">0{service.id}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-orange-500 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <FaRocket className="text-orange-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-300">
                  Quick turnaround times without compromising on quality. Your project will be delivered on time, every time.
                </p>
              </div>
              
              <div className="text-center p-6">
                <FaUsers className="text-orange-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Collaborative Approach</h3>
                <p className="text-gray-300">
                  I work closely with clients throughout the development process, ensuring your vision comes to life.
                </p>
              </div>
              
              <div className="text-center p-6">
                <FaCode className="text-orange-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Modern Technology</h3>
                <p className="text-gray-300">
                  Using the latest technologies and best practices to build scalable, maintainable applications.
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
