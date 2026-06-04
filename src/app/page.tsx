'use client'

import Link from 'next/link'
import { ArrowRight, Star, Coffee, Award, Clock, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-luxury">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 via-luxury-black/70 to-luxury-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-gradient">LUX Coffee</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the finest luxury coffee crafted with passion and precision. Every cup tells a story of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl" asChild>
                <Link href="/menu">
                  Explore Menu <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/reservations">Reserve Table</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Selection</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our handpicked premium coffee blends, sourced from the finest estates around the world.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Ethiopian Yirgacheffe',
                description: 'Bright and fruity with floral notes',
                price: 18.99,
                rating: 4.9,
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400'
              },
              {
                name: 'Colombian Supremo',
                description: 'Rich and balanced with caramel sweetness',
                price: 16.99,
                rating: 4.8,
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'
              },
              {
                name: 'Jamaican Blue Mountain',
                description: 'Exceptionally smooth with mild flavor',
                price: 45.99,
                rating: 5.0,
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'
              }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                variants={fadeInUp}
                className="group"
              >
                <Card className="overflow-hidden border-gold-500/20 bg-luxury-dark hover:border-gold-500/50 transition-all duration-300 hover:shadow-gold">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-gold-500 text-luxury-black px-3 py-1 rounded-full text-sm font-semibold">
                      ${product.price}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gold-400">{product.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-gold-500 fill-current" />
                        <span className="text-sm text-gray-400">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/menu">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-luxury-black border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Coffee, label: 'Coffee Varieties', value: '50+' },
              { icon: Award, label: 'Awards Won', value: '25' },
              { icon: Clock, label: 'Years Experience', value: '15' },
              { icon: Star, label: 'Happy Customers', value: '10K+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Categories</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our diverse selection of premium coffee categories.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              { name: 'Espresso', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300' },
              { name: 'Cold Brew', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300' },
              { name: 'Single Origin', image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=300' },
              { name: 'Blends', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300' },
              { name: 'Light Roast', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300' },
              { name: 'Medium Roast', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300' },
              { name: 'Dark Roast', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300' },
              { name: 'Decaf', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300' }
            ].map((category) => (
              <motion.div
                key={category.name}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-gold-400">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">What Our Customers Say</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover why coffee lovers choose LUX Coffee for their daily indulgence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'Coffee Enthusiast',
                content: 'The Ethiopian Yirgacheffe is absolutely divine. The floral notes are perfectly balanced. Best coffee I\'ve ever had!',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Business Executive',
                content: 'LUX Coffee has become my daily ritual. The quality is consistently exceptional, and the atmosphere is perfect for work.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'Food Blogger',
                content: 'From the moment you walk in, you know this is special. The attention to detail in every cup is remarkable.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
              >
                <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                    <div>
                      <h4 className="font-semibold text-gold-400">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-black mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-luxury-black/80 mb-8 max-w-2xl mx-auto">
              Visit us today or reserve your table for an unforgettable coffee experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" className="bg-luxury-black text-gold-400 hover:bg-luxury-charcoal" asChild>
                <Link href="/reservations">Reserve Table</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-gold-400" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
