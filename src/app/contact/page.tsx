'use client'

import * as React from 'react'
import { MapPin, Phone, Mail, Clock, Send, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { useToast } from '@/components/ui/use-toast'

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })

    toast({
      title: 'Message Sent',
      description: 'Thank you for contacting us. We will get back to you shortly.',
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Contact Us</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have questions or feedback? We&apos;d love to hear from you. Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gradient mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-gold-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold-400 mb-1">Address</h4>
                        <p className="text-gray-400">123 Luxury Avenue<br />New York, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-gold-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold-400 mb-1">Phone</h4>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-gold-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold-400 mb-1">Email</h4>
                        <p className="text-gray-400">hello@luxcoffee.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-gold-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold-400 mb-1">Hours</h4>
                        <p className="text-gray-400">Mon - Sun: 7:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gradient mb-4">Follow Us</h3>
                  <p className="text-gray-400 mb-4">
                    Stay connected with us on social media for the latest updates, promotions, and coffee tips.
                  </p>
                  <div className="flex space-x-4">
                    {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                      <Button key={social} variant="outline" size="sm">
                        {social}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal shadow-gold">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gradient mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gold-400">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gold-400">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gold-400">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gold-400">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        className="bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gold-400">Message</Label>
                      <textarea
                        id="message"
                        placeholder="Your message..."
                        className="w-full min-h-[150px] rounded-md border border-gold-500/30 bg-luxury-dark px-3 py-2 text-sm text-gold-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-gold-500/20 bg-luxury-dark overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-luxury-charcoal flex items-center justify-center">
                <div className="text-center">
                  <Coffee className="h-16 w-16 text-gold-500/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gold-400 mb-2">Find Us on the Map</h3>
                  <p className="text-gray-400">123 Luxury Avenue, New York, NY 10001</p>
                  <Button variant="outline" className="mt-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
