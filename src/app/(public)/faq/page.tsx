'use client'

import * as React from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What makes LUX Coffee different from other coffee shops?',
    answer: 'At LUX Coffee, we source only the finest single-origin beans from around the world, roasted in small batches to ensure optimal flavor. Our baristas are trained in the art of coffee preparation, and our luxurious atmosphere provides an unparalleled experience.'
  },
  {
    question: 'Do you offer dairy-free and vegan options?',
    answer: 'Yes, we offer a variety of plant-based milk alternatives including oat, almond, soy, and coconut milk. Many of our pastries and food items are also vegan-friendly.'
  },
  {
    question: 'Can I purchase your coffee beans to brew at home?',
    answer: 'Absolutely! We sell all our coffee beans in various sizes, from 12oz bags to 5lb bulk options. Our baristas can provide brewing recommendations to help you achieve the perfect cup at home.'
  },
  {
    question: 'Do you offer Wi-Fi for customers?',
    answer: 'Yes, we provide complimentary high-speed Wi-Fi throughout our location. Whether you need to work remotely or simply browse the web, you can stay connected while enjoying your coffee.'
  },
  {
    question: 'What is your reservation policy?',
    answer: 'Reservations are recommended for groups of 6 or more, especially during peak hours. We hold reservations for 15 minutes past the scheduled time. Cancellations should be made at least 2 hours in advance.'
  },
  {
    question: 'Do you host private events?',
    answer: 'Yes, we offer private dining spaces for special events, corporate meetings, and celebrations. Contact us for more information about our private event packages and availability.'
  },
  {
    question: 'Are your coffee beans ethically sourced?',
    answer: 'We are committed to ethical sourcing and work directly with farmers to ensure fair prices and sustainable practices. Many of our beans are Fair Trade and Rainforest Alliance certified.'
  },
  {
    question: 'Do you offer coffee brewing classes?',
    answer: 'Yes, we regularly host coffee brewing workshops and tasting events. Check our events calendar or sign up for our newsletter to stay informed about upcoming classes.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, Apple Pay, Google Pay, and cash. We also offer gift cards for purchase.'
  },
  {
    question: 'Do you have a loyalty program?',
    answer: 'Yes! Join our LUX Rewards program to earn points on every purchase, receive exclusive offers, and enjoy member-only benefits. Ask our staff about signing up during your next visit.'
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Frequently Asked Questions</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find answers to common questions about LUX Coffee, our products, and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-between p-0 hover:bg-transparent"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-center space-x-4 text-left">
                      <HelpCircle className="h-6 w-6 text-gold-500 flex-shrink-0" />
                      <span className="text-lg font-semibold text-gold-400">{faq.question}</span>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gold-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gold-500" />
                    )}
                  </Button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pl-10 text-gray-300"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-luxury-charcoal border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gradient mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is here to help. Reach out to us directly.
          </p>
          <Button variant="luxury" size="lg" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
