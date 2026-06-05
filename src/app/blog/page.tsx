'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Coffee Tasting: A Beginner\'s Guide',
    excerpt: 'Learn how to appreciate the subtle flavors and aromas in your coffee like a true connoisseur.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    category: 'Coffee Education',
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Alexandra Chen'
  },
  {
    id: 2,
    title: 'Exploring Ethiopian Coffee: The Birthplace of Coffee',
    excerpt: 'Discover the rich history and unique characteristics of coffee from its ancestral home in Ethiopia.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800',
    category: 'Origin Stories',
    date: '2024-01-10',
    readTime: '7 min read',
    author: 'Marcus Williams'
  },
  {
    id: 3,
    title: 'Sustainable Coffee Sourcing: Our Commitment',
    excerpt: 'How we ensure our coffee is ethically sourced and environmentally sustainable.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
    category: 'Sustainability',
    date: '2024-01-05',
    readTime: '4 min read',
    author: 'Sophie Martinez'
  },
  {
    id: 4,
    title: 'Perfecting Your Home Brewing Technique',
    excerpt: 'Expert tips and techniques to brew cafe-quality coffee in the comfort of your home.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
    category: 'Brewing Tips',
    date: '2024-01-01',
    readTime: '6 min read',
    author: 'Alexandra Chen'
  },
  {
    id: 5,
    title: 'The Science Behind Coffee Roasting',
    excerpt: 'Understanding the chemical transformations that occur during the roasting process.',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800',
    category: 'Coffee Science',
    date: '2023-12-28',
    readTime: '8 min read',
    author: 'Marcus Williams'
  },
  {
    id: 6,
    title: 'Coffee Around the World: Cultural Traditions',
    excerpt: 'Explore how different cultures enjoy their coffee, from Italian espresso to Turkish coffee.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800',
    category: 'Culture',
    date: '2023-12-20',
    readTime: '5 min read',
    author: 'Sophie Martinez'
  }
]

const categories = ['All', 'Coffee Education', 'Origin Stories', 'Sustainability', 'Brewing Tips', 'Coffee Science', 'Culture']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-luxury border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Blog</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the world of coffee through our expert articles, guides, and stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-luxury-charcoal border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'luxury' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden border-gold-500/20 bg-luxury-charcoal hover:border-gold-500/50 transition-all duration-300 hover:shadow-gold group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gold-500 text-luxury-black px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gold-400 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-luxury-charcoal border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-gold-500/20 bg-luxury-dark">
            <CardContent className="p-8 text-center">
              <Coffee className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gradient mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Get the latest coffee tips, brewing guides, and exclusive offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-luxury-charcoal border border-gold-500/30 rounded-md px-4 py-2 text-gold-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <Button variant="luxury">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
