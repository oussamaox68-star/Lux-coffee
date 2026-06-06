'use client'

import { Briefcase, Users, Target, Award, Phone, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function CareersPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Join Our Team</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Build a rewarding career with LUX Coffee and be part of our mission to deliver exceptional coffee experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">Why Work With Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;re committed to creating an inclusive, supportive environment where every team member can thrive.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Competitive Pay</h3>
                  <p className="text-gray-400 text-sm">
                    Industry-leading salaries and comprehensive benefits packages.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Growth Opportunities</h3>
                  <p className="text-gray-400 text-sm">
                    Professional development and career advancement programs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Work-Life Balance</h3>
                  <p className="text-gray-400 text-sm">
                    Flexible schedules and generous time-off policies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Premium Environment</h3>
                  <p className="text-gray-400 text-sm">
                    Modern facilities and free premium coffee for all employees.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-luxury-charcoal border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">Open Positions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our current job openings and find your perfect role.
            </p>
          </motion.div>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-gold-500/20 bg-luxury-dark">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-2">Senior Barista</h3>
                      <p className="text-gray-400 mb-2">Full-time • New York, NY</p>
                      <p className="text-gray-500 text-sm">
                        Join our team of expert baristas and craft exceptional coffee experiences for our customers.
                      </p>
                    </div>
                    <Button variant="luxury" asChild>
                      <a href="mailto:careers@luxcoffee.com?subject=Application: Senior Barista">Apply Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-dark">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-2">Coffee Roaster</h3>
                      <p className="text-gray-400 mb-2">Full-time • New York, NY</p>
                      <p className="text-gray-500 text-sm">
                        Expert roaster needed to maintain our premium quality standards and develop new blends.
                      </p>
                    </div>
                    <Button variant="luxury" asChild>
                      <a href="mailto:careers@luxcoffee.com?subject=Application: Coffee Roaster">Apply Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-gold-500/20 bg-luxury-dark">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-2">Store Manager</h3>
                      <p className="text-gray-400 mb-2">Full-time • New York, NY</p>
                      <p className="text-gray-500 text-sm">
                        Lead our team and ensure exceptional customer service and operational excellence.
                      </p>
                    </div>
                    <Button variant="luxury" asChild>
                      <a href="mailto:careers@luxcoffee.com?subject=Application: Store Manager">Apply Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-gold-500/20 bg-luxury-dark">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-2">Marketing Specialist</h3>
                      <p className="text-gray-400 mb-2">Full-time • Remote</p>
                      <p className="text-gray-500 text-sm">
                        Help us grow our brand and connect with coffee lovers worldwide.
                      </p>
                    </div>
                    <Button variant="luxury" asChild>
                      <a href="mailto:careers@luxcoffee.com?subject=Application: Marketing Specialist">Apply Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-gold-500/20 bg-luxury-dark">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-2">Customer Service Representative</h3>
                      <p className="text-gray-400 mb-2">Part-time • New York, NY</p>
                      <p className="text-gray-500 text-sm">
                        Provide exceptional support to our customers via phone, email, and chat.
                      </p>
                    </div>
                    <Button variant="luxury" asChild>
                      <a href="mailto:careers@luxcoffee.com?subject=Application: Customer Service Representative">Apply Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">How to Apply</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow these simple steps to join our team.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                    <span className="text-2xl font-bold text-gold-400">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Prepare Your Resume</h3>
                  <p className="text-gray-400 text-sm">
                    Update your resume with your relevant experience and skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                    <span className="text-2xl font-bold text-gold-400">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Write a Cover Letter</h3>
                  <p className="text-gray-400 text-sm">
                    Tell us why you want to join LUX Coffee and what you can bring to our team.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
                    <span className="text-2xl font-bold text-gold-400">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">Send Your Application</h3>
                  <p className="text-gray-400 text-sm">
                    Email your resume and cover letter to careers@luxcoffee.com
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-luxury-charcoal border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-gold-500/20 bg-luxury-dark">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Phone className="h-8 w-8 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gradient">Contact HR</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="h-5 w-5 text-gold-500" />
                      <span>careers@luxcoffee.com</span>
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
                      <strong className="text-gold-400">Response Time:</strong> Within 48 hours
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gold-500/10 rounded-lg border border-gold-500/20">
                  <p className="text-gray-400">
                    LUX Coffee is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
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
