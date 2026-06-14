'use client'

import { Newspaper, Download, Mail, Phone, Package } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function PressPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-luxury border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Press & Media</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Access our latest press releases, media kit, and company news.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">Latest Press Releases</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest news and announcements from LUX Coffee.
            </p>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="text-sm text-gold-500 mb-2">June 2026</div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-2">LUX Coffee Launches New Premium Ethiopian Blend</h3>
                      <p className="text-gray-400 mb-4">
                        LUX Coffee is proud to announce the launch of our exclusive Ethiopian Yirgacheffe blend, sourced directly from the high-altitude regions of Ethiopia.
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Press Release
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="text-sm text-gold-500 mb-2">May 2026</div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-2">LUX Coffee Opens Flagship Store in New York</h3>
                      <p className="text-gray-400 mb-4">
                        We&apos;re excited to announce the grand opening of our flagship store in the heart of New York City, bringing the LUX Coffee experience to coffee lovers in the Big Apple.
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Press Release
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="text-sm text-gold-500 mb-2">April 2026</div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-2">LUX Coffee Achieves B Corp Certification</h3>
                      <p className="text-gray-400 mb-4">
                        LUX Coffee is proud to announce that we have achieved B Corp certification, recognizing our commitment to social and environmental responsibility.
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Press Release
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-luxury-charcoal border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">Media Kit</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Download our official logos, images, and brand assets for use in publications.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-gold-500/20 bg-luxury-dark h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Package className="h-8 w-8 text-gold-500" />
                    <h3 className="text-lg font-semibold text-gold-400">Logo Package</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    High-resolution logos in various formats (PNG, SVG, EPS) for print and digital use.
                  </p>
                  <Button variant="luxury" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-dark h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Package className="h-8 w-8 text-gold-500" />
                    <h3 className="text-lg font-semibold text-gold-400">Product Images</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Professional product photography for use in marketing and editorial content.
                  </p>
                  <Button variant="luxury" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-gold-500/20 bg-luxury-dark h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Newspaper className="h-8 w-8 text-gold-500" />
                    <h3 className="text-lg font-semibold text-gold-400">Brand Guidelines</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Complete brand guidelines including typography, colors, and usage guidelines.
                  </p>
                  <Button variant="luxury" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-6">Company Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-3">About LUX Coffee</h3>
                    <p className="text-gray-400 mb-4">
                      LUX Coffee is a premium coffee company dedicated to sourcing and roasting the world&apos;s finest single-origin and blended coffees. Founded with a passion for excellence, we work directly with farmers to ensure fair trade practices and sustainable farming methods.
                    </p>
                    <p className="text-gray-400">
                      Our commitment to quality extends from the farm to your cup, with meticulous attention to every step of the coffee journey. We believe that great coffee is an art form, and we invite you to experience the difference that passion and precision can make.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-3">Key Facts</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Founded: 2020</li>
                      <li>• Headquarters: New York, NY</li>
                      <li>• Locations: 5 stores across the US</li>
                      <li>• Products: 10+ premium coffee varieties</li>
                      <li>• Customers: 50,000+ satisfied customers</li>
                      <li>• Awards: Best Coffee Roaster 2025</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-luxury-charcoal border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-gold-500/20 bg-luxury-dark">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Newspaper className="h-8 w-8 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Media Contact</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="h-5 w-5 text-gold-500" />
                      <span>press@luxcoffee.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Phone className="h-5 w-5 text-gold-500" />
                      <span>+212 0721-953795</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-400">
                      <strong className="text-gold-400">Office Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-gold-400">Response Time:</strong> Within 24 hours
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gold-500/10 rounded-lg border border-gold-500/20">
                  <p className="text-gray-400">
                    For urgent media inquiries, please contact us via WhatsApp at +212 0721-953795. We&apos;re happy to provide interviews, product samples, and additional information for journalists and content creators.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
