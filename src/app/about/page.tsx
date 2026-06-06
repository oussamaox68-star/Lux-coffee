'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Award, Coffee, Heart, Target, Users, Globe, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never compromise on quality. Every cup is a masterpiece crafted with precision and passion.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for coffee drives everything we do. From sourcing to serving, passion is our secret ingredient.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We are committed to ethical sourcing and environmentally friendly practices in everything we do.'
  }
]

const team = [
  {
    name: 'Alexandra Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  },
  {
    name: 'Marcus Williams',
    role: 'Head Barista',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    name: 'Sophie Martinez',
    role: 'Coffee Sourcing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-luxury relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Our Story</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a small coffee cart to a luxury coffee destination, our journey has been driven by an unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">The Beginning</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                LUX Coffee was born in 2010 from a simple idea: to create a space where coffee lovers could experience the finest coffees from around the world in an environment of unparalleled elegance.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                What started as a humble coffee cart in downtown New York has blossomed into a luxury coffee destination, renowned for our exceptional blends, impeccable service, and sophisticated atmosphere.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we continue to push the boundaries of what coffee can be, sourcing the rarest beans, perfecting our roasting techniques, and creating experiences that delight all the senses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800"
                alt="Coffee preparation"
                width={800}
                height={600}
                className="rounded-lg shadow-gold"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-luxury-black p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">Our Values</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-gold-500/20 bg-luxury-dark h-full hover:border-gold-500/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-gold-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gold-400 mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-black border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Coffee, label: 'Coffee Varieties', value: '50+' },
              { icon: Users, label: 'Happy Customers', value: '10K+' },
              { icon: Globe, label: 'Countries Sourced', value: '25' },
              { icon: Award, label: 'Awards Won', value: '15' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">Meet Our Team</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The passionate people behind LUX Coffee
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-gold-500/20 bg-luxury-dark hover:border-gold-500/50 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gold-400 mb-1">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Join Our Journey
            </h2>
            <p className="text-xl text-luxury-black/80 mb-8 max-w-2xl mx-auto">
              Be part of the LUX Coffee experience. Visit us today or explore our premium coffee collection online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" className="bg-luxury-black text-gold-400 hover:bg-luxury-charcoal" asChild>
                <Link href="/menu">Explore Menu</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-gold-400" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
