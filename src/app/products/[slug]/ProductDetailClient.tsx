'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart, Heart, Share2, Coffee, Award, Clock, Leaf, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'
import { useToast } from '@/components/ui/use-toast'

export function ProductDetailClient({ product, slug }: { product: any; slug: string }) {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [quantity, setQuantity] = React.useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id: slug,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: slug,
    })
    toast({
      title: 'Added to Cart',
      description: `${quantity}x ${product.name} has been added to your cart.`,
    })
  }

  const relatedProducts = [
    {
      name: 'Colombian Supremo',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
      slug: 'colombian-supremo',
    },
    {
      name: 'House Blend',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
      slug: 'house-blend',
    },
    {
      name: 'Guatemalan Antigua',
      price: 17.99,
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
      slug: 'guatemalan-antigua',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <section className="py-4 bg-luxury-charcoal border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gold-400">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/products" className="text-gray-400 hover:text-gold-400">Products</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gold-400">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg border border-gold-500/20">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Sale
                  </div>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index ? 'border-gold-500' : 'border-gold-500/20 hover:border-gold-500/50'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-gold-500 text-sm font-medium mb-2">{product.category}</div>
              <h1 className="text-4xl font-bold mb-4 text-gradient">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-current' : 'text-gray-600'}`}
                    />
                  ))}
                  <span className="text-gold-400 ml-2">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl font-bold text-gold-400">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border border-gold-500/30 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gold-400 hover:bg-gold-500/10 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gold-100">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gold-400 hover:bg-gold-500/10 transition-colors"
                  >
                    +
                  </button>
                </div>
                <Button variant="luxury" size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-luxury-charcoal rounded-lg border border-gold-500/20">
                  <Coffee className="h-6 w-6 text-gold-500" />
                  <div>
                    <div className="text-sm text-gray-400">Origin</div>
                    <div className="font-semibold text-gold-400">{product.origin}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-luxury-charcoal rounded-lg border border-gold-500/20">
                  <Award className="h-6 w-6 text-gold-500" />
                  <div>
                    <div className="text-sm text-gray-400">Roast</div>
                    <div className="font-semibold text-gold-400">{product.roast}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-luxury-charcoal rounded-lg border border-gold-500/20">
                  <Clock className="h-6 w-6 text-gold-500" />
                  <div>
                    <div className="text-sm text-gray-400">Processing</div>
                    <div className="font-semibold text-gold-400">{product.processing}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-luxury-charcoal rounded-lg border border-gold-500/20">
                  <Leaf className="h-6 w-6 text-gold-500" />
                  <div>
                    <div className="text-sm text-gray-400">Altitude</div>
                    <div className="font-semibold text-gold-400">{product.altitude}</div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-luxury-charcoal rounded-lg border border-gold-500/20">
                  <span className="text-gray-400">Size</span>
                  <span className="text-gold-400 font-semibold">{product.size}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-luxury-charcoal rounded-lg border border-gold-500/20">
                  <span className="text-gray-400">Caffeine</span>
                  <span className="text-gold-400 font-semibold">{product.caffeine}mg per cup</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-luxury-charcoal rounded-lg border border-gold-500/20">
                  <span className="text-gray-400">Calories</span>
                  <span className="text-gold-400 font-semibold">{product.calories} per cup</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gradient">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.slug} className="overflow-hidden border-gold-500/20 bg-luxury-dark hover:border-gold-500/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gold-400 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gold-400">${relatedProduct.price}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/products/${relatedProduct.slug}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-12 bg-luxury-black border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Truck className="h-8 w-8 text-gold-500" />
              <div>
                <h3 className="font-semibold text-gold-400">Free Shipping</h3>
                <p className="text-sm text-gray-400">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="h-8 w-8 text-gold-500" />
              <div>
                <h3 className="font-semibold text-gold-400">Premium Quality</h3>
                <p className="text-sm text-gray-400">100% satisfaction guaranteed</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8 text-gold-500" />
              <div>
                <h3 className="font-semibold text-gold-400">Fast Delivery</h3>
                <p className="text-sm text-gray-400">2-3 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
