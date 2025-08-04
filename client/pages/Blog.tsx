import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 'graphic-design-agency',
    title: 'Graphic Design Agency Your Brand Needs',
    excerpt: 'Creating impactful visual identities that resonate with your target audience and drive business growth.',
    date: 'March 30, 2024',
    category: 'Branding',
    image: '840 x 600',
    author: 'Design Team'
  },
  {
    id: 'providing-brilliant-ideas',
    title: 'Providing Brilliant Ideas For your Business',
    excerpt: 'Innovative strategies and creative solutions to help your business stand out in the competitive market.',
    date: 'March 30, 2024',
    category: 'Branding',
    image: '840 x 600',
    author: 'Strategy Team'
  },
  {
    id: 'latest-trends-digital-marketing',
    title: 'The Latest Trends With Digital Marketing',
    excerpt: 'Stay ahead of the curve with the newest digital marketing trends and techniques that drive results.',
    date: 'March 30, 2024',
    category: 'Branding',
    image: '840 x 600',
    author: 'Marketing Team'
  }
];

const categories = [
  { name: 'Agency', count: 101 },
  { name: 'Business', count: 104, active: true },
  { name: 'Development', count: 72 },
  { name: 'UI Design', count: 65 },
  { name: 'Marketing', count: 24 }
];

const recentPosts = [
  {
    title: 'Graphic Design Agency your Brand Needs',
    date: 'March 30, 2024',
    image: '100 x 100'
  },
  {
    title: 'Providing Brilliant Ideas For your Business',
    date: 'March 30, 2024',
    image: '100 x 100'
  },
  {
    title: 'The Latest Trends With Digital Marketing',
    date: 'March 30, 2024',
    image: '100 x 100'
  }
];

const tags = ['Agency', 'Business', 'Marketing', 'Branding', 'Creative', 'Digital', 'Design', 'Animals'];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header currentPage="blog" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto mb-12">
            <div className="text-8xl md:text-9xl font-bold text-gray-600">1920</div>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">560</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Our <span className="text-yellow-400">Blog</span>
          </h1>
          <div className="mt-6">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold">
              HOME / BLOG
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id}
                  className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors cursor-pointer"
                  onClick={() => window.location.href = `/blog/${post.id}`}
                >
                  <CardContent className="p-0">
                    <div className="w-full h-96 bg-gray-700 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gray-500">{post.image}</span>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 hover:text-yellow-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 mb-6">{post.excerpt}</p>
                      <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-12">
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Search Here</h3>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div 
                        key={category.name}
                        className={`flex justify-between items-center p-3 rounded cursor-pointer transition-colors ${
                          category.active 
                            ? 'bg-yellow-400 text-gray-900' 
                            : 'hover:bg-gray-700'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Recent Post</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={index} className="flex gap-4 cursor-pointer hover:text-yellow-400 transition-colors">
                        <div className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-gray-400">{post.image}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-sm leading-tight">{post.title}</h4>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tag Cloud */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Tag Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Badge 
                        key={tag}
                        variant="outline" 
                        className={`cursor-pointer transition-colors ${
                          index === 1 
                            ? 'bg-yellow-400 text-gray-900 border-yellow-400' 
                            : 'border-gray-600 hover:border-yellow-400 hover:text-yellow-400'
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
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
