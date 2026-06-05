'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice, clearCart } = useCart()
  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()

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
                Looks like you haven&apos;t added any coffee to your cart yet. Explore our premium selection and find your perfect brew.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <Link href="/products">
                  <Coffee className="h-5 w-5 mr-2" />
                  Browse Products
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Shopping Cart</h1>
            <p className="text-gray-400 text-lg">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="border border-gold-500/20 bg-luxury-charcoal rounded-lg p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gold-400 mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">${item.price.toFixed(2)}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gold-500/30 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 text-gold-400 hover:bg-gold-500/10 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 text-gold-100">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 text-gold-400 hover:bg-gold-500/10 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gold-400">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-gold-500/20 bg-luxury-charcoal sticky top-24">
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
                      <span>Tax</span>
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
                    <Button variant="luxury" size="lg" className="w-full" asChild>
                      <Link href="/checkout">
                        Proceed to Checkout
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" onClick={clearCart}>
                      Clear Cart
                    </Button>
                    <Button variant="ghost" size="lg" className="w-full" asChild>
                      <Link href="/products">Continue Shopping</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
