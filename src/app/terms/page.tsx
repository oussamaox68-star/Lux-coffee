'use client'

import { FileText, Scale, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Terms of Service</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
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
                  <FileText className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Acceptance of Terms</h2>
                </div>
                <p className="text-gray-300">
                  By accessing or using LUX Coffee&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Services</h2>
                </div>
                <p className="text-gray-300">
                  LUX Coffee provides coffee products, food items, reservation services, and related amenities. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Orders and Payments</h2>
                <div className="space-y-4 text-gray-300">
                  <p>All prices are listed in USD and are subject to change without notice. We accept various payment methods as indicated on our website.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Orders are subject to availability</li>
                    <li>We reserve the right to limit quantities</li>
                    <li>Payment must be received before order fulfillment</li>
                    <li>Refunds are processed according to our refund policy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Reservations</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>Reservation policies:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Reservations are held for 15 minutes past scheduled time</li>
                    <li>Cancellations require 2 hours notice</li>
                    <li>No-shows may result in reservation restrictions</li>
                    <li>Groups of 8+ require special arrangements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">User Conduct</h2>
                <p className="text-gray-300">
                  You agree to use our services in compliance with all applicable laws and regulations. Prohibited activities include harassment, fraudulent behavior, and any attempt to harm our systems or other users.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Intellectual Property</h2>
                <p className="text-gray-300">
                  All content on our website, including text, images, logos, and designs, is the property of LUX Coffee and protected by intellectual property laws. Unauthorized use is prohibited.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Limitation of Liability</h2>
                <p className="text-gray-300">
                  LUX Coffee shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, to the maximum extent permitted by law.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Governing Law</h2>
                <p className="text-gray-300">
                  These Terms of Service are governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold-500/20 bg-luxury-charcoal">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gradient mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  For questions about these Terms of Service, please contact us at legal@luxcoffee.com or call us at +212 0721-953795.
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
