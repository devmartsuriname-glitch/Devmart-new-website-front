import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto mb-12">
            <div className="text-8xl md:text-9xl font-bold text-gray-600">1920</div>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">560</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <div className="mt-6">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold">
              HOME / CONTACT US
            </span>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Phone number</h3>
                <p className="text-2xl font-bold text-yellow-400">+44 204 577 0077</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email address</h3>
                <p className="text-2xl font-bold text-yellow-400">Vortex@gmail.com</p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Office Address</h3>
                <p className="text-2xl font-bold text-yellow-400">Washington Ave, NY</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-gray-800/30">
        <div className="container mx-auto text-center">
          <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-6xl font-bold text-gray-500">1920 x 800</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have Questions?<br />
              <span className="text-yellow-400">Contact us!</span>
            </h2>
          </div>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Select subject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
                <Textarea
                  placeholder="Type your message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-32"
                  required
                />
                <div className="text-center">
                  <Button type="submit" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-yellow-400 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Studio operates as a creative design design, branding, and visual elements, offering comprehensive solutions for businesses design across graphic platforms.
          </p>
          <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
