import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const portfolioItems = [
  {
    id: 'website-design',
    title: 'Website Design',
    category: 'Branding Design',
    image: '630 x 500',
    featured: true
  },
  {
    id: 'mobile-app-design',
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    image: '630 x 500'
  },
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '630 x 500'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    category: 'Branding',
    image: '630 x 500'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    image: '630 x 500'
  },
  {
    id: 'marketing-website',
    title: 'Marketing Website',
    category: 'Web Design',
    image: '630 x 500'
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header currentPage="portfolio" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto mb-12">
            <div className="text-8xl md:text-9xl font-bold text-gray-600">1920</div>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">560</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-yellow-400">Portfolio</span>
          </h1>
          <div className="mt-6">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold">
              HOME / Portfolio
            </span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card 
                key={item.id}
                className="bg-gray-700 border-gray-600 hover:border-yellow-400 transition-colors cursor-pointer group overflow-hidden"
                onClick={() => window.location.href = `/portfolio/${item.id}`}
              >
                <CardContent className="p-0 relative">
                  <div className="w-full h-80 bg-gray-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-400">{item.image}</span>
                  </div>
                  {item.featured && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white text-gray-900 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-gray-600">{item.category}</p>
                          </div>
                          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {!item.featured && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.category}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
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
      <Footer />
    </div>
  );
}
