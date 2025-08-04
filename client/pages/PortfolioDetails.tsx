import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const portfolioProjects = {
  'website-design': {
    title: 'Website UI UX Design',
    client: 'Jessica Brown',
    budget: 'USD 1,50,499',
    duration: 'Digital Marketing',
    date: '20 October 2023',
    description: 'When an unknown printer took a galley of type and scrambled make cover lorem ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Dolore lorem lorem sunt qui nostrud mollit veniam. Contrary to popular belief, lorem ipsum is not simply random text.',
    challenge: 'Aenxa, an AI startup from the industry to technological innovation and sustainable building practices to deliver long-lasting value for its clients.',
    result: 'For almost 10 years together Asia, one of the region\'s largest and most respected construction companies, has worked with our brand development to build a brand that expertise with local intelligence, to find time together has delivered hundreds of best-in-practice strategy and implementation infrastructure projects across multiple industries.'
  },
  'mobile-app-design': {
    title: 'Mobile App UI/UX Design',
    client: 'Tech Innovations Inc',
    budget: 'USD 2,75,000',
    duration: 'Mobile Development',
    date: '15 November 2023',
    description: 'Complete mobile application design for iOS and Android platforms with focus on user experience and modern design principles.',
    challenge: 'Creating a unified experience across different platforms while maintaining native feel and performance.',
    result: 'Successfully launched mobile app with 4.8 star rating and over 100k downloads in the first month.'
  },
  'e-commerce-platform': {
    title: 'E-commerce Platform Design',
    client: 'Retail Solutions Ltd',
    budget: 'USD 3,25,000',
    duration: 'Web Development',
    date: '05 December 2023',
    description: 'Full-scale e-commerce platform with advanced features and seamless shopping experience.',
    challenge: 'Integrating complex payment systems and inventory management while maintaining speed and security.',
    result: 'Delivered a robust platform that increased client\'s online sales by 300% within six months.'
  },
  'brand-identity': {
    title: 'Complete Brand Identity',
    client: 'StartUp Ventures',
    budget: 'USD 95,000',
    duration: 'Branding',
    date: '28 September 2023',
    description: 'Comprehensive brand identity including logo, color palette, typography, and brand guidelines.',
    challenge: 'Creating a memorable brand that stands out in a crowded market while reflecting company values.',
    result: 'Brand recognition increased by 250% and client secured major partnerships within three months.'
  },
  'saas-dashboard': {
    title: 'SaaS Dashboard Interface',
    client: 'DataFlow Systems',
    budget: 'USD 1,85,000',
    duration: 'UI/UX Design',
    date: '12 January 2024',
    description: 'Advanced dashboard interface for data analytics platform with complex data visualization.',
    challenge: 'Simplifying complex data sets into intuitive and actionable insights for users.',
    result: 'User engagement increased by 180% and customer retention improved significantly.'
  },
  'marketing-website': {
    title: 'Marketing Website Design',
    client: 'Growth Agency',
    budget: 'USD 1,20,000',
    duration: 'Web Design',
    date: '18 February 2024',
    description: 'High-converting marketing website with focus on lead generation and conversion optimization.',
    challenge: 'Balancing aesthetic appeal with conversion optimization and fast loading speeds.',
    result: 'Conversion rate increased by 220% and bounce rate decreased by 40%.'
  }
};

const relatedProjects = [
  {
    id: 'web-app-design',
    title: 'Web Site & App Design',
    category: 'Branding Design',
    image: '420 x 500'
  },
  {
    id: 'mobile-interface',
    title: 'Mobile Interface',
    category: 'UI/UX Design',
    image: '420 x 500'
  },
  {
    id: 'dashboard-design',
    title: 'Dashboard Design',
    category: 'Web Development',
    image: '420 x 500'
  }
];

export default function PortfolioDetails() {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const project = portfolioId ? portfolioProjects[portfolioId as keyof typeof portfolioProjects] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
          <p className="text-gray-400 mb-8">The portfolio item you're looking for doesn't exist.</p>
          <Button asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
            <a href="/portfolio">Back to Portfolio</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Vortex</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a>
              <a href="/services" className="hover:text-yellow-400 transition-colors">Services</a>
              <a href="/portfolio" className="text-yellow-400">Portfolio</a>
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
                <a href="/about" className="text-left hover:text-yellow-400 transition-colors">About Us</a>
                <a href="/services" className="text-left hover:text-yellow-400 transition-colors">Services</a>
                <a href="/portfolio" className="text-left text-yellow-400">Portfolio</a>
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
            Portfolio Details
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto mb-8">
            <div className="text-8xl md:text-9xl font-bold text-gray-600">1920</div>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">560</div>
          </div>
          <div className="mt-6">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold">
              HOME / PORTFOLIO DETAILS
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Main Project Image */}
              <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center mb-12">
                <span className="text-6xl font-bold text-gray-500">1320 x 700</span>
              </div>

              {/* Project Content */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
                <p className="text-xl text-gray-300 mb-8">{project.description}</p>
                <p className="text-gray-300 mb-8">{project.description}</p>
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-500">405 x 375</span>
                </div>
                <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-500">405 x 375</span>
                </div>
              </div>

              <p className="text-gray-300 mb-16">{project.description}</p>

              {/* Challenge & Solution */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6">Challenge & Solution</h3>
                <p className="text-gray-300 mb-8">{project.challenge}</p>
              </div>

              {/* Final Result */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold mb-6">Final Result</h3>
                <p className="text-gray-300">{project.result}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Information */}
              <Card className="bg-gray-800 border-gray-700 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Project Information</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-gray-400 text-sm">Client</div>
                      <div className="font-semibold">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Budget</div>
                      <div className="font-semibold">{project.budget}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Duration</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Date</div>
                      <div className="font-semibold">{project.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our Recently Completed Work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="bg-gray-700 border-gray-600 hover:border-yellow-400 transition-colors cursor-pointer group overflow-hidden"
                  onClick={() => window.location.href = `/portfolio/${project.id}`}
                >
                  <CardContent className="p-0 relative">
                    <div className="w-full h-80 bg-gray-600 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-400">{project.image}</span>
                    </div>
                    {index === 0 && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white text-gray-900 p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-bold">{project.title}</h3>
                              <p className="text-gray-600 text-sm">{project.category}</p>
                            </div>
                            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index !== 0 && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-300">{project.category}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
      <footer className="py-16 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">Vortex</div>
              <p className="text-gray-400 mb-4">
                Creative design agency specializes in innovative visual solutions
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                  <span>f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                  <span>t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                  <span>in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                  <span>ig</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/ui-ux-design" className="hover:text-yellow-400 transition-colors">UI/UX Design</a></li>
                <li><a href="/services/mobile-apps" className="hover:text-yellow-400 transition-colors">Mobile Apps Design</a></li>
                <li><a href="/services/web-development" className="hover:text-yellow-400 transition-colors">Web Development</a></li>
                <li><a href="/services/saas-design" className="hover:text-yellow-400 transition-colors">SaaS Design</a></li>
                <li><a href="/services/animation-design" className="hover:text-yellow-400 transition-colors">Webflow Design</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Activities</a></li>
                <li><a href="/portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Expert Team</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog & News</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">I agree with the Terms and Conditions</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 outline-none"
                />
                <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                  →
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-gray-400 text-sm">
            <p>Copyright © 2024 designing-world</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms & conditions</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
