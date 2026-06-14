'use client'

import { Cookie, Shield, Eye, XCircle, Phone, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function CookiesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Cookie Policy</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Learn about how we use cookies and tracking technologies to enhance your experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What Are Cookies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Cookie className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">What Are Cookies?</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                    </p>
                    <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/20">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Types of Cookies We Use</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>• <strong className="text-gold-400">Essential Cookies:</strong> Required for basic site functionality</li>
                        <li>• <strong className="text-gold-400">Performance Cookies:</strong> Help us improve site performance</li>
                        <li>• <strong className="text-gold-400">Functionality Cookies:</strong> Remember your preferences</li>
                        <li>• <strong className="text-gold-400">Targeting Cookies:</strong> Deliver relevant advertisements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* How We Use Cookies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Eye className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">How We Use Cookies</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Site Functionality</h3>
                      <p className="text-gray-400">
                        Essential cookies enable core functionality such as security, network management, and accessibility. You cannot disable these cookies.
                      </p>
                    </div>
                    <div className="border-b border-gold-500/10 pb-4">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Analytics & Performance</h3>
                      <p className="text-gray-400">
                        We use analytics cookies to understand how visitors interact with our website, helping us improve our services and content.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">Personalization</h3>
                      <p className="text-gray-400">
                        Functionality cookies remember your preferences, such as language, region, and shopping cart items, to provide a personalized experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Third-Party Cookies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">Third-Party Cookies</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      We may allow third parties to place cookies on your device for the following purposes:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-gold-500/10 p-3 rounded-lg border border-gold-500/20">
                        <h3 className="text-md font-semibold text-gold-400 mb-1">Social Media</h3>
                        <p className="text-gray-400 text-sm">
                          Social media platforms may place cookies to track engagement and enable sharing features.
                        </p>
                      </div>
                      <div className="bg-gold-500/10 p-3 rounded-lg border border-gold-500/20">
                        <h3 className="text-md font-semibold text-gold-400 mb-1">Advertising</h3>
                        <p className="text-gray-400 text-sm">
                          Advertising partners use cookies to serve relevant ads based on your browsing history.
                        </p>
                      </div>
                      <div className="bg-gold-500/10 p-3 rounded-lg border border-gold-500/20">
                        <h3 className="text-md font-semibold text-gold-400 mb-1">Analytics</h3>
                        <p className="text-gray-400 text-sm">
                          We use Google Analytics and similar tools to analyze website traffic and user behavior.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Managing Cookies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <XCircle className="h-8 w-8 text-gold-500" />
                    <h2 className="text-2xl font-bold text-gradient">Managing Cookies</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      You have the right to decide whether to accept or reject cookies. You can set or amend your web browser preferences to accept or refuse cookies.
                    </p>
                    <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/20">
                      <h3 className="text-lg font-semibold text-gold-400 mb-2">How to Control Cookies</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>• <strong className="text-gold-400">Browser Settings:</strong> Most browsers allow you to control cookies through settings</li>
                        <li>• <strong className="text-gold-400">Cookie Banner:</strong> Use our cookie consent banner to manage preferences</li>
                        <li>• <strong className="text-gold-400">Opt-Out:</strong> Some third-party cookies offer opt-out options</li>
                        <li>• <strong className="text-gold-400">Clear Cookies:</strong> You can delete cookies from your browser at any time</li>
                      </ul>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Please note that disabling certain cookies may affect the functionality and user experience of our website.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Cookie Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-6">Cookie Details</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gold-500/20">
                        <th className="text-left py-3 px-4 text-gold-400 font-semibold">Cookie Name</th>
                        <th className="text-left py-3 px-4 text-gold-400 font-semibold">Type</th>
                        <th className="text-left py-3 px-4 text-gold-400 font-semibold">Duration</th>
                        <th className="text-left py-3 px-4 text-gold-400 font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gold-500/10">
                        <td className="py-3 px-4 text-gray-400">_ga, _gid</td>
                        <td className="py-3 px-4 text-gray-400">Analytics</td>
                        <td className="py-3 px-4 text-gray-400">2 years / 24 hours</td>
                        <td className="py-3 px-4 text-gray-400">Google Analytics tracking</td>
                      </tr>
                      <tr className="border-b border-gold-500/10">
                        <td className="py-3 px-4 text-gray-400">lux-coffee-cart</td>
                        <td className="py-3 px-4 text-gray-400">Functionality</td>
                        <td className="py-3 px-4 text-gray-400">Session</td>
                        <td className="py-3 px-4 text-gray-400">Shopping cart persistence</td>
                      </tr>
                      <tr className="border-b border-gold-500/10">
                        <td className="py-3 px-4 text-gray-400">_fbp</td>
                        <td className="py-3 px-4 text-gray-400">Targeting</td>
                        <td className="py-3 px-4 text-gray-400">3 months</td>
                        <td className="py-3 px-4 text-gray-400">Facebook Pixel tracking</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-400">cookie_consent</td>
                        <td className="py-3 px-4 text-gray-400">Functionality</td>
                        <td className="py-3 px-4 text-gray-400">1 year</td>
                        <td className="py-3 px-4 text-gray-400">Cookie consent preferences</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact */}
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
                  <h2 className="text-2xl font-bold text-gradient">Contact Us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="h-5 w-5 text-gold-500" />
                      <span>privacy@luxcoffee.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Phone className="h-5 w-5 text-gold-500" />
                      <span>+212 0721-953795</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-400">
                      <strong className="text-gold-400">Office Hours:</strong> Monday - Sunday: 7:00 AM - 10:00 PM
                    </p>
                    <p className="text-gray-400">
                      <strong className="text-gold-400">Response Time:</strong> Within 24 hours
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gold-500/10 rounded-lg border border-gold-500/20">
                  <p className="text-gray-400">
                    If you have any questions about our use of cookies or this cookie policy, please don&apos;t hesitate to contact us. We&apos;re committed to protecting your privacy and ensuring transparency about how we use data.
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
