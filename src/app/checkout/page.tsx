'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, ArrowRight, Phone, Mail, MapPin, User, MessageSquare, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'
import { useToast } from '@/components/ui/use-toast'

interface FormData {
  fullName: string
  phoneNumber: string
  email: string
  address: string
  orderNotes: string
}

export default function CheckoutPage() {
  const { items, getTotalItems, getTotalPrice, clearCart } = useCart()
  const { toast } = useToast()
  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()
  const [formData, setFormData] = React.useState<FormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    orderNotes: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map((item) => `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n')

    const message = `
🛒 *NEW ORDER - LUX COFFEE*

👤 *Customer Information*
• Name: ${formData.fullName}
• Phone: ${formData.phoneNumber}
• Email: ${formData.email}
• Address: ${formData.address}

📦 *Order Details*
${itemsList}

💰 *Order Summary*
• Subtotal: $${totalPrice.toFixed(2)}
• Shipping: Free
• Tax: $${(totalPrice * 0.1).toFixed(2)}
• Total: $${(totalPrice * 1.1).toFixed(2)}

📝 *Order Notes*
${formData.orderNotes || 'None'}

Thank you for your order!
    `.trim()

    return encodeURIComponent(message)
  }

  const handleWhatsAppOrder = () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.address) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)
    const whatsappNumber = '0721953795'
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

    window.open(whatsappUrl, '_blank')

    toast({
      title: 'Order Submitted',
      description: 'Your order has been sent via WhatsApp. We will contact you shortly to confirm.',
    })

    clearCart()
    setIsSubmitting(false)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20">
        <section className="py-16 bg-gradient-luxury border-b border-gold-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <ShoppingCart className="h-16 w-16 text-gold-500 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Your Cart is Empty</h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Add some coffee to your cart before proceeding to checkout.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Checkout</h1>
            <p className="text-gray-400 text-lg">
              Complete your order and send it via WhatsApp for quick confirmation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Information Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gradient mb-6">Customer Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName" className="text-gold-400">
                        Full Name <span className="text-red-400">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="pl-10 bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phoneNumber" className="text-gold-400">
                        Phone Number <span className="text-red-400">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="pl-10 bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gold-400">
                        Email <span className="text-red-400">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-gold-400">
                        Address <span className="text-red-400">*</span>
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="address"
                          name="address"
                          type="text"
                          placeholder="123 Coffee Street, City"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="pl-10 bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="orderNotes" className="text-gold-400">
                        Order Notes (Optional)
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <textarea
                          id="orderNotes"
                          name="orderNotes"
                          placeholder="Any special instructions..."
                          value={formData.orderNotes}
                          onChange={handleInputChange}
                          className="pl-10 w-full bg-luxury-dark border border-gold-500/30 text-gold-100 placeholder:text-gray-500 min-h-[100px] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Cart Items */}
              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gradient mb-6">Order Items ({totalItems})</h2>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 border-b border-gold-500/10 pb-4 last:border-0">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gold-400">{item.name}</h3>
                          <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-gold-400">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="border-gold-500/20 bg-luxury-charcoal">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gradient mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping</span>
                      <span className="text-gold-400">Free</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Tax (10%)</span>
                      <span>${(totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gold-500/20 pt-4">
                      <div className="flex justify-between text-xl font-bold text-gold-400">
                        <span>Total</span>
                        <span>${(totalPrice * 1.1).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="luxury"
                      size="lg"
                      className="w-full"
                      onClick={handleWhatsAppOrder}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Processing...'
                      ) : (
                        <>
                          <MessageSquare className="h-5 w-5 mr-2" />
                          Send Order via WhatsApp
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link href="/cart">Back to Cart</Link>
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-gold-500/10 rounded-lg border border-gold-500/20">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        Your order will be sent via WhatsApp to our team. We will contact you shortly to confirm your order and arrange delivery.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
