'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'
import { useToast } from '@/components/ui/use-toast'

import { products } from '@/lib/products'

const productsList = Object.entries(products).map(([slug, product]: [string, any]) => ({
  id: slug,
  slug: slug,
  ...product,
}))

export default function ProductsPage() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.id,
    })
    toast({
      title: 'Added to Cart',
      description: `${product.name} has been added to your cart.`,
    })
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Premium Coffee Collection</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection of the world&apos;s finest single-origin and blended coffees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsList.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden border-gold-500/20 bg-luxury-charcoal hover:border-gold-500/50 transition-all duration-300 hover:shadow-gold group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.featured && (
                      <div className="absolute top-3 left-3 bg-gold-500 text-luxury-black px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </div>
                    )}
                    {product.originalPrice && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gold-400">{product.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
                        <span className="text-sm text-gray-400">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gold-400">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">{product.category}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="luxury" size="sm" className="flex-1" onClick={() => handleAddToCart(product)}>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/products/${product.id}`}>View</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
