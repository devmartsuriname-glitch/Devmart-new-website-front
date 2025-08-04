import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = {
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business online.',
    content: 'When an unknown printer took a galley of type and scrambled make cover lorem ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Contrary to popular belief, lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    features: [
      'Nisi dui mauris sed consequat etiam habitasse lorem tellus pulvinar ante.',
      'Odales antique elit quam cursus quam elementum vitae candidula dignisso.',
      'Ligatum neque sapien lorem velitene consectetuer sed elementum ante elit.'
    ]
  },
  'web-development': {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    content: 'When an unknown printer took a galley of type and scrambled make cover lorem ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Contrary to popular belief, lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    features: [
      'Nisi dui mauris sed consequat etiam habitasse lorem tellus pulvinar ante.',
      'Odales antique elit quam cursus quam elementum vitae candidula dignisso.',
      'Ligatum neque sapien lorem velitene consectetuer sed elementum ante elit.'
    ]
  },
  'mobile-apps': {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    content: 'When an unknown printer took a galley of type and scrambled make cover lorem ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Contrary to popular belief, lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    features: [
      'Nisi dui mauris sed consequat etiam habitasse lorem tellus pulvinar ante.',
      'Odales antique elit quam cursus quam elementum vitae candidula dignisso.',
      'Ligatum neque sapien lorem velitene consectetuer sed elementum ante elit.'
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that deliver exceptional experiences.',
    content: 'When an unknown printer took a galley of type and scrambled make cover lorem ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Contrary to popular belief, lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    features: [
      'Nisi dui mauris sed consequat etiam habitasse lorem tellus pulvinar ante.',
      'Odales antique elit quam cursus quam elementum vitae candidula dignisso.',
      'Ligatum neque sapien lorem velitene consectetuer sed elementum ante elit.'
    ]
  },
  'saas-design': {
    title: 'SaaS Design',
    description: 'Scalable software-as-a-service platforms with modern design patterns.',
    content: 'When an unknown printer took a galley of type and scrambled make cover lorem ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Contrary to popular belief, lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    features: [
      'Nisi dui mauris sed consequat etiam habitasse lorem tellus pulvinar ante.',
      'Odales antique elit quam cursus quam elementum vitae candidula dignisso.',
      'Ligatum neque sapien lorem velitene consectetuer sed elementum ante elit.'
    ]
  },
  'animation-design': {
    title: 'Animation Design',
    description: 'Engaging animations and micro-interactions that bring your brand to life.',
    content: 'When an unknown printer took a galley of type and scrambled make cover lorem ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. Contrary to popular belief, lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    features: [
      'Nisi dui mauris sed consequat etiam habitasse lorem tellus pulvinar ante.',
      'Odales antique elit quam cursus quam elementum vitae candidula dignisso.',
      'Ligatum neque sapien lorem velitene consectetuer sed elementum ante elit.'
    ]
  }
};

const allServices = Object.keys(services);

const faqs = [
  {
    question: "What is vision for the Future?",
    answer: "Vulputate enim sit sem congue nunc sollicitudin blandit at. Mauris quis vel at et diam mauris dignissim faucibus, blandit massa scelerisque leo duis risque, accumsan et magna dictum ut. Gravida justo vitae lorem diam accumsan vitae Lorem ipsum dolor."
  },
  {
    question: "Do you offer free resources?",
    answer: "Yes, we provide comprehensive resources and documentation to help you get started with our services."
  },
  {
    question: "Can help to find Investors?",
    answer: "We can connect you with our network of investors and provide guidance on preparing for investment opportunities."
  },
  {
    question: "Can help to find Investors?",
    answer: "We offer ongoing consultation and support to help you connect with potential investors in your industry."
  },
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital services including web development, mobile apps, UI/UX design, and more."
  }
];

export default function ServiceDetails() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
            <a href="/services">Back to Services</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
            Service Details
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto">
            <div className="text-8xl md:text-9xl font-bold text-gray-600">1920</div>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">560</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Service Image */}
              <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center mb-12">
                <span className="text-6xl font-bold text-gray-500">840 x 600</span>
              </div>

              {/* Service Content */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-xl text-gray-300 mb-8">{service.content}</p>
                <p className="text-gray-300 mb-8">{service.content}</p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
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

              <p className="text-gray-300 mb-16">{service.content}</p>

              {/* FAQ Section */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Frequently Asked Question</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700">
                      <Collapsible open={openFaq === index} onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}>
                        <CollapsibleTrigger asChild>
                          <div className="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-700/50 transition-colors">
                            <h4 className="text-lg font-semibold">{faq.question}</h4>
                            <div className={`w-8 h-8 rounded-full ${openFaq === index ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700'} flex items-center justify-center transition-colors`}>
                              <span className="text-xl font-bold">{openFaq === index ? '−' : '+'}</span>
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="px-6 pb-6">
                            <p className="text-gray-300">{faq.answer}</p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Service List */}
              <Card className="bg-gray-800 border-gray-700 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Service List</h3>
                  <div className="space-y-2">
                    {allServices.map((serviceKey) => (
                      <a
                        key={serviceKey}
                        href={`/services/${serviceKey}`}
                        className={`block p-3 rounded transition-colors ${
                          serviceKey === serviceId 
                            ? 'bg-yellow-400 text-gray-900 font-semibold' 
                            : 'hover:bg-gray-700 text-gray-300'
                        }`}
                      >
                        {services[serviceKey as keyof typeof services].title}
                        {serviceKey === serviceId && (
                          <span className="float-right">→</span>
                        )}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Our Brochures */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Brochures</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Download our company brochure</div>
                      <div className="text-sm text-gray-400">Get detailed information about our services</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                    Click here to download
                  </Button>
                </CardContent>
              </Card>
            </div>
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
