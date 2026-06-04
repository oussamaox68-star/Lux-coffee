'use client'

import * as React from 'react'
import { Calendar, Clock, Users, MapPin, Phone, Mail, Coffee, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion } from 'framer-motion'
import { useToast } from '@/components/ui/use-toast'

const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
]

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function ReservationsPage() {
  const { toast } = useToast()
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: 'Reservation Submitted',
      description: 'Your reservation request has been received. We will confirm your booking shortly.',
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-4"
        >
          <Card className="border-gold-500/20 bg-luxury-charcoal shadow-gold">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-gold-500" />
              </div>
              <h2 className="text-3xl font-bold text-gradient mb-4">Reservation Confirmed</h2>
              <p className="text-gray-400 mb-6">
                Thank you for your reservation request. We have received your booking and will send a confirmation email shortly.
              </p>
              <div className="bg-luxury-dark rounded-lg p-4 mb-6 text-left">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-300">{formData.date}</span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-300">{formData.time}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-300">{formData.guests} guests</span>
                </div>
              </div>
              <Button variant="luxury" className="w-full" onClick={() => setIsSubmitted(false)}>
                Make Another Reservation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Reserve Your Table</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience luxury dining at its finest. Reserve your table today for an unforgettable coffee experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal shadow-gold">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gradient mb-6">Reservation Details</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gold-400">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
                          className="bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gold-400">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-gold-400">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          className="bg-luxury-dark border-gold-500/30 text-gold-100"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time" className="text-gold-400">Time</Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)} required>
                          <SelectTrigger className="bg-luxury-dark border-gold-500/30 text-gold-100">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="bg-luxury-charcoal border-gold-500/20">
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot} className="text-gold-100 focus:bg-gold-500/20">
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-gold-400">Number of Guests</Label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)} required>
                        <SelectTrigger className="bg-luxury-dark border-gold-500/30 text-gold-100">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent className="bg-luxury-charcoal border-gold-500/20">
                          {guestOptions.map((num) => (
                            <SelectItem key={num} value={num.toString()} className="text-gold-100 focus:bg-gold-500/20">
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests" className="text-gold-400">Special Requests (Optional)</Label>
                      <textarea
                        id="specialRequests"
                        placeholder="Any dietary restrictions or special requests..."
                        className="w-full min-h-[100px] rounded-md border border-gold-500/30 bg-luxury-dark px-3 py-2 text-sm text-gold-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gradient mb-4">Opening Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Monday - Friday</span>
                      <span className="text-gold-400">7:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Saturday - Sunday</span>
                      <span className="text-gold-400">8:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gradient mb-4">Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">123 Luxury Avenue, New York, NY 10001</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gold-500" />
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gold-500" />
                      <span className="text-gray-300">reservations@luxcoffee.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gradient mb-4">Reservation Policy</h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start space-x-2">
                      <Coffee className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>Reservations are held for 15 minutes past the scheduled time</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Coffee className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>Cancellations must be made at least 2 hours in advance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Coffee className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>For parties of 8 or more, please call us directly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Coffee className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span>Private dining available for special events</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
