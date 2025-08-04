import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = {
  'graphic-design-agency': {
    title: 'Graphic Design Agency Your Brand Needs',
    content: `In recent years, the healthcare industry has witnessed a groundbreaking transformation driven by the integration of artificial intelligence (AI) technologies. These advancements are revolutionizing patient care, medical research, diagnostics.

One of the most significant impacts of AI in healthcare is in diagnostics, detection, and learning algorithms can analyze vast amounts of medical data with speed far surpassing. AI algorithms has built diagnostic tools to accelerate diagnosis. These algorithms can identify.

Technology has begun transformational and medical advances are turning what once was science fiction into medical reality. Medical research.`,
    quote: 'Graphic technology is the future of design, and we want to be a part of it.',
    date: 'March 30, 2024',
    category: 'Branding',
    author: 'Admin',
    tags: ['Marketing', 'Brand', 'Business']
  },
  'providing-brilliant-ideas': {
    title: 'Providing Brilliant Ideas For your Business',
    content: `Innovation drives business success, and our team specializes in developing creative strategies that propel your company forward. We understand that every business faces unique challenges.

Through comprehensive market research and creative thinking, we develop solutions that not only address current pain points but also anticipate future opportunities. Our approach combines data-driven insights with creative innovation.

By partnering with us, you gain access to a wealth of experience and a fresh perspective that can transform your business operations and customer engagement strategies.`,
    quote: 'Innovation is the key to staying ahead in today\'s competitive market.',
    date: 'March 30, 2024',
    category: 'Business',
    author: 'Strategy Team',
    tags: ['Business', 'Innovation', 'Strategy']
  },
  'latest-trends-digital-marketing': {
    title: 'The Latest Trends With Digital Marketing',
    content: `Digital marketing continues to evolve at a rapid pace, with new technologies and strategies emerging regularly. Understanding these trends is crucial for businesses looking to maintain a competitive edge.

From artificial intelligence and machine learning to voice search optimization and interactive content, the digital landscape offers numerous opportunities for brands to connect with their audiences in meaningful ways.

Social media platforms continue to introduce new features, while search engines update their algorithms to provide better user experiences. Staying informed about these changes is essential for marketing success.`,
    quote: 'Digital marketing is not just about being online; it\'s about being relevant.',
    date: 'March 30, 2024',
    category: 'Marketing',
    author: 'Marketing Team',
    tags: ['Digital', 'Marketing', 'Trends']
  }
};

const categories = [
  { name: 'Agency', count: 101 },
  { name: 'Business', count: 104, active: true },
  { name: 'Development', count: 72 },
  { name: 'UI Design', count: 47 },
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

export default function BlogDetails() {
  const { blogId } = useParams<{ blogId: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const post = blogId ? blogPosts[blogId as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
            <a href="/blog">Back to Blog</a>
          </Button>
        </div>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comment submitted:', commentForm);
    // Handle comment submission
    setCommentForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header currentPage="blog" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
            Blog Details
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-4xl mx-auto mb-8">
            <div className="text-8xl md:text-9xl font-bold text-gray-600">1920</div>
            <div className="text-8xl md:text-9xl font-bold text-yellow-400">560</div>
          </div>
          <div className="mt-6">
            <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-semibold">
              HOME / BLOG DETAILS
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center mb-8">
                <span className="text-6xl font-bold text-gray-500">840 x 600</span>
              </div>

              {/* Post Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>

              {/* Post Title */}
              <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

              {/* Post Content */}
              <div className="prose prose-invert max-w-none mb-8">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-yellow-400 text-gray-900 p-6 rounded-lg mb-8 relative">
                <div className="absolute left-6 top-2 text-4xl font-bold">"</div>
                <p className="text-lg font-medium pl-8">{post.quote}</p>
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  All steam probiotic advanced site being used to forecast viruses outbreaks and patient trajectories to allocate resources more efficiently. Moreover, all algorithm-driven drug discovery accelerated the identification of potential treatments and solutions.
                </p>
              </div>

              {/* Tags and Share */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-gray-700 mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Tags:</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-gray-600 hover:border-yellow-400 hover:text-yellow-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Share:</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 cursor-pointer">
                      <span className="text-xs">f</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                      <span className="text-xs">t</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                      <span className="text-xs">+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center py-6 border-t border-gray-700 mb-12">
                <div className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>PREVIOUS POST</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors">
                  <span>NEXT POST</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Comments */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-8">01 Comment</h3>
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold">Laura Johnson</h4>
                      <p className="text-gray-400 text-sm">December 21 2020 at 8:00 PM</p>
                    </div>
                    <Button size="sm" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                      Reply
                    </Button>
                  </div>
                  <p className="text-gray-300">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                  </p>
                </div>
              </div>

              {/* Comment Form */}
              <div>
                <h3 className="text-3xl font-bold mb-8">Leave A Comment</h3>
                <p className="text-gray-400 mb-6">Your email address will not be published. Required fields are marked *</p>
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder="Your name*"
                      value={commentForm.name}
                      onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email address*"
                      value={commentForm.email}
                      onChange={(e) => setCommentForm({...commentForm, email: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <Input
                    type="text"
                    placeholder="Write Subject*"
                    value={commentForm.subject}
                    onChange={(e) => setCommentForm({...commentForm, subject: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                    required
                  />
                  <Textarea
                    placeholder="Type your message*"
                    value={commentForm.message}
                    onChange={(e) => setCommentForm({...commentForm, message: e.target.value})}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-32"
                    required
                  />
                  <Button type="submit" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                    Post Comment
                  </Button>
                </form>
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
