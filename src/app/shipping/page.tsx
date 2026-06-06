'use client'

import { Truck, Clock, Shield, Phone, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function ShippingPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Shipping Information</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to know about getting your premium coffee delivered to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shipping Options */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Truck className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">Shipping Options</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Standard Shipping</h3>
                      <p className="text-gray-400 mb-2">5-7 business days</p>
                      <p className="text-gray-400">Free on orders over $50</p>
                      <p className="text-gray-400">$5.99 on orders under $50</p>
                    </div>
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Express Shipping</h3>
                      <p className="text-gray-400 mb-2">2-3 business days</p>
                      <p className="text-gray-400">$12.99 flat rate</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Same Day Delivery</h3>
                      <p className="text-gray-400 mb-2">Available in select areas</p>
                      <p className="text-gray-400">$19.99 flat rate</p>
                      <p className="text-sm text-gray-500 mt-2">Order by 12 PM for same-day delivery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Delivery Times */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="h-8 w-8 text-gold-500" aria-hidden="true" />
                    <h2 className="text-2xl font-bold text-gradient">Delivery Times</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Order Processing</h3>
                      <p className="text-gray-400">Orders are processed within 1-2 business days</p>
                      <p className="text-gray-400">You will receive a confirmation email with tracking information</p>
                    </div>
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Business Days</h3>
                      <p className="text-gray-400">Monday - Friday, excluding holidays</p>
                      <p className="text-gray-400">Weekend delivery available with Express shipping</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">International Shipping</h3>
                      <p className="text-gray-400">7-14 business days</p>
                      <p className="text-gray-400">Customs fees may apply</p>
                      <p className="text-sm text-gray-500 mt-2">Contact us for international shipping rates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Tracking */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="h-8 w-8 text-gold-500" aria-hidden="true" />
                    <h2 className="text-2xl font-bold text-gradient">Order Tracking</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      Once your order ships, you will receive a tracking number via email. Use this number to track your package on the carrier&apos;s website.
                    </p>
                    <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/20">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Supported Carriers</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>• FedEx</li>
                        <li>• UPS</li>
                        <li>• DHL</li>
                        <li>• Local courier services</li>
                      </ul>
                    </div>
                    <p className="text-gray-400">
                      For real-time updates, download the carrier&apos;s mobile app or visit their website with your tracking number.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Customer Support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Phone className="h-8 w-8 text-gold-500" aria-hidden="true" />
                    <h2 className="text-2xl font-bold text-gradient">Customer Support</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      Need help with your order? Our customer support team is here to assist you.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-400">
                        <Phone className="h-5 w-5 text-gold-500" aria-hidden="true" />
                        <a href="tel:+2120721953795" className="hover:text-gold-400 transition-colors">+212 0721-953795</a>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <Mail className="h-5 w-5 text-gold-500" aria-hidden="true" />
                        <a href="mailto:hello@luxcoffee.com" className="hover:text-gold-400 transition-colors">hello@luxcoffee.com</a>
                      </div>
                    </div>
                    <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/20">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Support Hours</h3>
                      <p className="text-gray-400">Monday - Sunday: 7:00 AM - 10:00 PM</p>
                      <p className="text-sm text-gray-500 mt-2">Response time: Within 24 hours</p>
                    </div>
                    <p className="text-gray-400">
                      For urgent shipping issues, please contact us via WhatsApp at +212 0721-953795.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-6">Important Notes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">Address Accuracy</h3>
                    <p className="text-gray-400">
                      Please ensure your shipping address is correct. We are not responsible for packages delivered to incorrect addresses provided by the customer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">Package Security</h3>
                    <p className="text-gray-400">
                      All packages are insured. If your package is lost or damaged during transit, please contact us within 48 hours of delivery.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">Delivery Instructions</h3>
                    <p className="text-gray-400">
                      Special delivery instructions can be added during checkout. Please note that carriers may not always be able to accommodate special requests.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">Weather Delays</h3>
                    <p className="text-gray-400">
                      Severe weather conditions may cause delays. We will notify you of any significant delays affecting your order.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
