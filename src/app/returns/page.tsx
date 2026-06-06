'use client'

import { RotateCcw, Shield, Clock, Phone, Mail, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function ReturnsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Returns & Refunds</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our hassle-free return policy ensures your satisfaction with every purchase.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Return Policy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <RotateCcw className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">Return Policy</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">30-Day Return Window</h3>
                      <p className="text-gray-400">
                        You may return unopened coffee products within 30 days of purchase for a full refund. Products must be in their original packaging and unused.
                      </p>
                    </div>
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Opened Products</h3>
                      <p className="text-gray-400">
                        If you&apos;re not satisfied with the taste or quality of your coffee, please contact us within 14 days of opening. We offer a satisfaction guarantee on our premium coffee products.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Non-Returnable Items</h3>
                      <p className="text-gray-400">
                        Gift cards, personalized items, and final sale items cannot be returned. Coffee accessories may have different return policies based on the manufacturer.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Refund Policy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">Refund Policy</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Refund Processing Time</h3>
                      <p className="text-gray-400">
                        Refunds are processed within 5-7 business days after we receive your returned item. The refund will be credited to your original payment method.
                      </p>
                    </div>
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Refund Methods</h3>
                      <p className="text-gray-400">
                        Refunds are issued to the original payment method used for purchase. For cash purchases, store credit may be offered.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Partial Refunds</h3>
                      <p className="text-gray-400">
                        In cases where items are damaged or partially used, partial refunds may be issued based on the condition of the product.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Exchange Policy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">Exchange Policy</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Coffee Exchanges</h3>
                      <p className="text-gray-400">
                        If you&apos;d like to try a different coffee variety, you may exchange unopened products within 30 days. Simply pay any price difference if the new item costs more.
                      </p>
                    </div>
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Accessory Exchanges</h3>
                      <p className="text-gray-400">
                        Coffee accessories can be exchanged within 30 days if they are in original condition. Defective items can be exchanged at any time.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Exchange Process</h3>
                      <p className="text-gray-400">
                        Contact our customer service team to initiate an exchange. We&apos;ll provide a prepaid shipping label for your return and ship the replacement once we receive the original item.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Eligibility Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">Eligibility Requirements</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/20">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">To be eligible for returns:</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>• Proof of purchase (receipt or order number)</li>
                        <li>• Item must be in original packaging</li>
                        <li>• Item must be unused/unopened (unless defective)</li>
                        <li>• Return request within specified time frame</li>
                        <li>• Return authorization from customer service</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Defective Items</h3>
                      <p className="text-gray-400">
                        If you receive a defective product, please contact us immediately. We will provide a full refund or replacement at no additional cost to you, regardless of the time frame.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* How to Return */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-6">How to Initiate a Return</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                      <span className="text-2xl font-bold text-gold-400">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">Contact Us</h3>
                    <p className="text-gray-400 text-sm">
                      Reach out to our customer service team via phone, email, or WhatsApp to request a return authorization.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                      <span className="text-2xl font-bold text-gold-400">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">Receive Label</h3>
                    <p className="text-gray-400 text-sm">
                      We&apos;ll email you a prepaid shipping label and return instructions within 24 hours.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                      <span className="text-2xl font-bold text-gold-400">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">Ship Item</h3>
                    <p className="text-gray-400 text-sm">
                      Pack the item securely in its original packaging and attach the shipping label.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                      <span className="text-2xl font-bold text-gold-400">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">Get Refund</h3>
                    <p className="text-gray-400 text-sm">
                      Once we receive and inspect the item, your refund will be processed within 5-7 business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Phone className="h-8 w-8 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Contact Us for Returns</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Phone className="h-5 w-5 text-gold-500" />
                      <span>+212 0721-953795</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="h-5 w-5 text-gold-500" />
                      <span>returns@luxcoffee.com</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-400">
                      <strong className="text-gold-400">Support Hours:</strong> Monday - Sunday: 7:00 AM - 10:00 PM
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-gold-400">Response Time:</strong> Within 24 hours
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gold-500/10 rounded-lg border border-gold-500/20">
                  <p className="text-gray-400">
                    For urgent return requests, please contact us via WhatsApp at +212 0721-953795. Our team is dedicated to ensuring your complete satisfaction.
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
