import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Index() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Vortex</div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-yellow-400 transition-colors">Home</button>
              <a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a>
              <a href="/services" className="hover:text-yellow-400 transition-colors">Services</a>
              <a href="/portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a>
              <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition-colors">Contact</button>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">Get Started</Button>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 mt-4">
                <button onClick={() => scrollToSection('home')} className="text-left hover:text-yellow-400 transition-colors">Home</button>
                <a href="/about" className="text-left hover:text-yellow-400 transition-colors">About Us</a>
                <a href="/services" className="text-left hover:text-yellow-400 transition-colors">Services</a>
                <a href="/portfolio" className="text-left hover:text-yellow-400 transition-colors">Portfolio</a>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-yellow-400 transition-colors">Contact</button>
                <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 w-fit">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Creative Digital<br />
            <span className="text-yellow-400">Agency</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            We help brands create amazing digital experiences through innovative design and development solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Start Project
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">250+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">1920</div>
              <div className="text-gray-300">Hours of Work</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">5★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Solutions */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Latest Client Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge digital solutions that drive results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors cursor-pointer" onClick={() => window.location.href = '/services/web-development'}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-300 mb-6">
                  Custom websites and web applications built with modern technologies
                </p>
                <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                  Frontend & Backend
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors cursor-pointer" onClick={() => window.location.href = '/services/ui-ux-design'}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v8H4V4zm2 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
                <p className="text-gray-300 mb-6">
                  Beautiful and intuitive user interfaces that deliver exceptional experiences
                </p>
                <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                  Design Systems
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors cursor-pointer" onClick={() => window.location.href = '/services/digital-marketing'}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Digital Strategy</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive digital strategies that align with your business goals
                </p>
                <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                  Consulting
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Design Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate About <span className="text-yellow-400">Quality Design</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We believe great design is more than just aesthetics—it's about creating meaningful connections between brands and their audiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">User-centered design approach</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Responsive and accessible</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Performance optimized</span>
                </div>
              </div>
              <Button className="mt-8 bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-500">645 x 700</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's See Our Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our latest work and see how we've helped businesses transform their digital presence
            </p>
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              View All Projects
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group cursor-pointer" onClick={() => window.location.href = '/portfolio/e-commerce-platform'}>
              <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-gray-500">630 x 500</span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">E-commerce Platform</h3>
                  <p className="text-gray-300">Modern shopping experience</p>
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-gray-500">630 x 500</span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Corporate Website</h3>
                  <p className="text-gray-300">Professional business presence</p>
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-gray-500">630 x 500</span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Mobile App</h3>
                  <p className="text-gray-300">Native iOS & Android</p>
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="w-full h-80 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-gray-500">630 x 500</span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Brand Identity</h3>
                  <p className="text-gray-300">Complete visual identity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Working Process</h2>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Get Started
              </Button>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Discovery & Planning</h3>
                  <p className="text-gray-300">We start by understanding your business goals, target audience, and project requirements through detailed consultation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Design & Prototype</h3>
                  <p className="text-gray-300">Our design team creates wireframes and prototypes that align with your brand and user experience goals.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Development</h3>
                  <p className="text-gray-300">We bring your designs to life with clean, efficient code using the latest technologies and best practices.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Launch & Support</h3>
                  <p className="text-gray-300">After thorough testing, we launch your project and provide ongoing support and maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="text-6xl font-bold text-yellow-400 mb-4">1920 x 800</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Awards & Honors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2024</div>
                <div className="font-semibold mb-2">Best Web Design Award</div>
                <div className="text-gray-400">Digital Agency of the Year</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2023</div>
                <div className="font-semibold mb-2">Excellence in Design Award</div>
                <div className="text-gray-400">Creative Excellence Awards</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2023</div>
                <div className="font-semibold mb-2">Innovation Award</div>
                <div className="text-gray-400">Tech Innovation Summit</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2022</div>
                <div className="font-semibold mb-2">Outstanding Achievement</div>
                <div className="text-gray-400">Digital Excellence Awards</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Testimonials</h2>
              <div className="mb-8">
                <div className="text-6xl text-yellow-400 mb-4">"</div>
                <p className="text-xl text-gray-300 mb-6">
                  Working with this team was an absolute pleasure. They delivered exactly what we needed, on time and within budget. The quality of their work exceeded our expectations.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-gray-400">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Latest Blog & News</h2>
            </div>
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              View All Posts
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">350 x 200</span>
                </div>
                <div className="p-6">
                  <Badge className="mb-4 bg-yellow-400 text-gray-900">Design</Badge>
                  <h3 className="text-xl font-bold mb-2">The Future of Web Design</h3>
                  <p className="text-gray-300 mb-4">Exploring upcoming trends and technologies that will shape the future of digital design.</p>
                  <div className="text-gray-400 text-sm">March 15, 2024</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">350 x 200</span>
                </div>
                <div className="p-6">
                  <Badge className="mb-4 bg-yellow-400 text-gray-900">Development</Badge>
                  <h3 className="text-xl font-bold mb-2">Modern Development Practices</h3>
                  <p className="text-gray-300 mb-4">Best practices for building scalable and maintainable web applications.</p>
                  <div className="text-gray-400 text-sm">March 10, 2024</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-0">
                <div className="w-full h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">350 x 200</span>
                </div>
                <div className="p-6">
                  <Badge className="mb-4 bg-yellow-400 text-gray-900">Strategy</Badge>
                  <h3 className="text-xl font-bold mb-2">Digital Transformation Guide</h3>
                  <p className="text-gray-300 mb-4">How to successfully navigate your business's digital transformation journey.</p>
                  <div className="text-gray-400 text-sm">March 5, 2024</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-yellow-400 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with us and let's create something amazing together.
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/90 border-none text-gray-900 placeholder:text-gray-600"
            />
            <Textarea
              placeholder="Tell us about your project"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white/90 border-none text-gray-900 placeholder:text-gray-600"
              rows={4}
            />
            <Button size="lg" className="w-full bg-gray-900 text-white hover:bg-gray-800">
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">Vortex</div>
              <p className="text-gray-400 mb-4">
                Creative digital agency specializing in innovative design and development solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Digital Strategy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vortex Creative Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
