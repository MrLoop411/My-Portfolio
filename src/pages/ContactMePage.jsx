import { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SpinnerMini from "../components/SpinnerMini";
import { FaThumbsUp } from "react-icons/fa";

function ContactMePage() {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d44ddb58-8860-4799-9e27-f12b0a78c4b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "Thank you for getting in touch! I'll get back in touch with you soon!",
      );
      setSubmitted(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setSubmitting(false);
  };

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
              className="transition-colors hover:text-orange-500"
            >
              Portfolio
            </Link>
            <Link
              to="/contactme"
              className="text-orange-500 transition-colors hover:text-orange-500"
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
                  className="block py-2 transition-colors hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/contactme"
                  className="block py-2 text-orange-500 transition-colors hover:text-orange-500"
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

        {/* Contact Content */}
        <section className="px-8 py-20 lg:px-20">
          <div className="mx-auto max-w-6xl">
            {/* Back Link */}
            <Link
              to="/"
              className="mb-12 inline-flex items-center gap-2 text-lg text-orange-500 transition-colors hover:text-orange-400"
            >
              ← Go back Home
            </Link>

            {submitted ? (
              <div className="py-20 text-center">
                <div className="mx-auto max-w-2xl">
                  <FaThumbsUp className="mx-auto mb-8 animate-bounce text-8xl text-orange-500" />
                  <h2 className="mb-6 text-4xl font-bold">Thank You!</h2>
                  <p className="text-xl leading-relaxed text-gray-300">
                    {result}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-16 lg:grid-cols-2">
                {/* Contact Form */}
                <div className="space-y-8">
                  <div>
                    <p className="mb-4 text-sm uppercase tracking-wider text-orange-500">
                      Get In Touch
                    </p>
                    <h1 className="mb-4 text-5xl font-bold">Say Hello!</h1>
                    <h2 className="mb-6 text-3xl font-semibold">
                      Let's Work Together
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                      I would love to meet with you and discuss potential
                      collaborations and ventures. Let's turn your ideas into
                      reality!
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={onSubmitHandler}>
                    <div className="grid gap-6 md:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-6 py-4 text-white transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-6 py-4 text-white transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 px-6 py-4 text-white transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:outline-none"
                    />

                    <textarea
                      name="message"
                      rows="6"
                      required
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-6 py-4 text-white transition-colors placeholder:text-gray-400 focus:border-orange-500 focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-orange-600"
                    >
                      {submitting ? <SpinnerMini /> : "Let's Talk"}
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  {/* <div className="bg-gray-800/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                          <FaEnvelope className="text-black" />
                        </div>
                        <div>
                          <p className="text-gray-400">Email</p>
                          <p className="text-white">your.email@example.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                          <FaPhone className="text-black" />
                        </div>
                        <div>
                          <p className="text-gray-400">Phone</p>
                          <p className="text-white">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                          <FaMapMarkerAlt className="text-black" />
                        </div>
                        <div>
                          <p className="text-gray-400">Location</p>
                          <p className="text-white">Nigeria</p>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* Social Connect */}
                  <div className="rounded-2xl bg-orange-500 p-8 text-black">
                    <h3 className="mb-6 text-2xl font-bold">Let's Connect!</h3>
                    <p className="mb-6">
                      Follow me on social media for updates and
                      behind-the-scenes content.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="rounded-lg bg-black/20 p-4 text-center transition-colors hover:bg-black/30"
                      >
                        <FaInstagram className="mx-auto mb-2 text-2xl" />
                        <span className="text-sm font-semibold">Instagram</span>
                      </a>

                      <a
                        href="#"
                        className="rounded-lg bg-black/20 p-4 text-center transition-colors hover:bg-black/30"
                      >
                        <FaLinkedinIn className="mx-auto mb-2 text-2xl" />
                        <span className="text-sm font-semibold">LinkedIn</span>
                      </a>

                      <a
                        href="#"
                        className="rounded-lg bg-black/20 p-4 text-center transition-colors hover:bg-black/30"
                      >
                        <FaTwitter className="mx-auto mb-2 text-2xl" />
                        <span className="text-sm font-semibold">Twitter</span>
                      </a>

                      <a
                        href="#"
                        className="rounded-lg bg-black/20 p-4 text-center transition-colors hover:bg-black/30"
                      >
                        <FaGithub className="mx-auto mb-2 text-2xl" />
                        <span className="text-sm font-semibold">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactMePage;
