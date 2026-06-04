'use client'

import { Shield, Eye, Lock, Cookie } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Privacy Policy</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We collect information you provide directly to us, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Reservation and order details</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process and fulfill your orders and reservations</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send you promotional communications (with your consent)</li>
                    <li>Improve our products, services, and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Data Security</h2>
                </div>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Cookie className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Cookies and Tracking</h2>
                </div>
                <p className="text-gray-300">
                  We use cookies and similar tracking technologies to collect information about your browsing activities on our website. You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at privacy@luxcoffee.com or call us at +1 (555) 123-4567.
                </p>
              </CardContent>
            </Card>

            <p className="text-center text-gray-500 text-sm">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
