import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Vortex</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="/about" className="text-yellow-400">About Us</a>
              <a href="/services" className="hover:text-yellow-400 transition-colors">Services</a>
              <a href="/portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a>
              <a href="/blog" className="hover:text-yellow-400 transition-colors">Blog</a>
              <a href="/#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
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
                <a href="/" className="text-left hover:text-yellow-400 transition-colors">Home</a>
                <a href="/about" className="text-left text-yellow-400">About Us</a>
                <a href="/#services" className="text-left hover:text-yellow-400 transition-colors">Services</a>
                <a href="/#portfolio" className="text-left hover:text-yellow-400 transition-colors">Portfolio</a>
                <a href="/#contact" className="text-left hover:text-yellow-400 transition-colors">Contact</a>
                <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 w-fit">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">
              19
            </div>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">
              860
            </div>
          </div>
        </div>
      </section>

      {/* Quality Design Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-500">645 x 700</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate About <span className="text-yellow-400">Quality Design</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                With over 19 years of experience in the industry, we've mastered the art of creating exceptional digital experiences that drive real business results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Award-winning design solutions</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Industry-leading expertise</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Dedicated to client success</span>
                </div>
              </div>
              <Button className="mt-8 bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-yellow-400 text-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-7xl font-bold mb-4">28+</div>
              <div className="text-xl font-semibold">Expert Team Members</div>
              <p className="mt-2">
                Our diverse team brings together experts from design, development, and strategy backgrounds.
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-bold mb-4">427+</div>
              <div className="text-xl font-semibold">Successful Projects</div>
              <p className="mt-2">
                From startups to enterprise clients, we've delivered exceptional results across all industries.
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-bold mb-4">241+</div>
              <div className="text-xl font-semibold">Satisfied Customers</div>
              <p className="mt-2">
                Our client-first approach has earned us long-lasting partnerships and referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Working Process</h2>
              <p className="text-xl text-gray-300 mb-8">
                We follow a proven methodology that ensures consistent, high-quality results for every project.
              </p>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Get Started
              </Button>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-yellow-400 pl-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">Problem Labs</h3>
                <p className="text-gray-300">We dive deep into understanding your challenges, market position, and user needs to identify the core problems that need solving.</p>
              </div>
              <div className="border-l-2 border-gray-600 pl-6">
                <h3 className="text-2xl font-bold mb-2">Quick Mockup</h3>
                <p className="text-gray-300">Our team rapidly creates visual concepts and wireframes to explore different solutions and get early feedback on direction.</p>
              </div>
              <div className="border-l-2 border-gray-600 pl-6">
                <h3 className="text-2xl font-bold mb-2">Smart Pulse</h3>
                <p className="text-gray-300">We implement smart tracking and analytics to measure user behavior and optimize the experience based on real data.</p>
              </div>
              <div className="border-l-2 border-gray-600 pl-6">
                <h3 className="text-2xl font-bold mb-2">Move Web</h3>
                <p className="text-gray-300">Finally, we bring everything together in a cohesive, performant web experience that achieves your business objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="container mx-auto text-center">
          <div className="text-6xl md:text-8xl font-bold text-yellow-400 mb-8">1920 x 800</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Team Behind The Studio
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-xl text-gray-300">
                Meet the passionate professionals who bring creativity, expertise, and innovation to every project.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-full aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">360 x 360</span>
                </div>
                <h3 className="text-xl font-bold">Daniyel Gortez</h3>
                <p className="text-gray-400">Web Designer</p>
              </div>
              <div className="text-center">
                <div className="w-full aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">360 x 360</span>
                </div>
                <h3 className="text-xl font-bold">Reena Bhatman</h3>
                <p className="text-gray-400">UI Designer</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-full aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">360 x 360</span>
              </div>
              <h3 className="text-xl font-bold">Bruce Little</h3>
              <p className="text-gray-400">Developer</p>
            </div>
            <div className="text-center">
              <div className="w-full aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">360 x 360</span>
              </div>
              <h3 className="text-xl font-bold">Ryan Williams</h3>
              <p className="text-gray-400">Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                What Clients Say About the Tool
              </h2>
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-yellow-400 text-gray-900">4.9</Badge>
                <span className="text-xl">Out of 5.0 Reviews</span>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    "The team delivered exceptional results that exceeded our expectations. Their attention to detail and creative approach made all the difference."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                    <div>
                      <div className="font-semibold">Daniyel Gortez</div>
                      <div className="text-gray-400 text-sm">CEO, TechStart</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-yellow-400 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with our team and let's create something extraordinary together.
          </p>
          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
