import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Designed and delivered components to provide user experiences and a great user experience. Designed thinking and a great user experience.',
    icon: '📊',
    featured: true
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    icon: '</>'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: '📱'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that deliver exceptional user experiences.',
    icon: '🎨'
  },
  {
    id: 'saas-design',
    title: 'SaaS Design',
    description: 'Scalable software-as-a-service platforms with modern design patterns.',
    icon: '☁️'
  },
  {
    id: 'animation-design',
    title: 'Animation Design',
    description: 'Engaging animations and micro-interactions that bring your brand to life.',
    icon: '✨'
  }
];

const pricingPlans = [
  {
    name: 'Start Plus',
    price: 110,
    period: 'per month',
    description: 'Get unlimited access to thousands of elite authentic relationships',
    features: [
      'UI Design',
      'UI Design Couple',
      'Blockchain Development',
      'Full Website Design System',
      'One Year Support Included'
    ]
  },
  {
    name: 'Professional',
    price: 130,
    period: 'per month',
    description: 'Get unlimited access to thousands of elite authentic relationships',
    features: [
      'UI Design',
      'UI Design Couple',
      'Blockchain Development',
      'Full Website Design System',
      'One Year Support Included'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 140,
    period: 'per month',
    description: 'Get unlimited access to thousands of elite authentic relationships',
    features: [
      'UI Design',
      'UI Design Couple',
      'Blockchain Development',
      'Full Website Design System',
      'One Year Support Included'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto mb-12">
            <div className="text-8xl md:text-9xl font-bold text-gray-600">1920</div>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">560</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-yellow-400">Services</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`${service.featured ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 border-gray-700'} hover:border-yellow-400 transition-colors cursor-pointer`}
                onClick={() => window.location.href = `/services/${service.id}`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.featured ? 'bg-gray-900 text-yellow-400' : 'bg-yellow-400 text-gray-900'} rounded-lg mb-6 flex items-center justify-center text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className={`${service.featured ? 'text-gray-700' : 'text-gray-300'} mb-6`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flawless Designs Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-500">860 x 800</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Flawless Designs, <span className="text-yellow-400">Premium Brands</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Vortex offers design as a service experts at developing digital products and improving customer experience. Our team combines business experience and cutting-edge design.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">We're serious Working Company</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">We're experienced in Design & Development</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Expert Team Members</span>
                </div>
              </div>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing Plan to Boost Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`${plan.featured ? 'bg-gray-800 border-yellow-400' : 'bg-gray-800 border-gray-700'} relative`}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.featured ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                  >
                    Choose This Plan
                  </Button>
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
            Studio operates as a creative design design, branding, and visual elements, offering comprehensive solutions for businesses looking to elevate across graphic platforms.
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
