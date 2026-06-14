'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, SlidersHorizontal, Star, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { getProducts, type Product } from '@/app/actions/products'

const categories = ['All', 'Single Origin', 'Blends', 'Light Roast', 'Medium Roast', 'Dark Roast', 'Cold Brew', 'Decaf']

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [showFilters, setShowFilters] = React.useState(false)
  const [products, setProducts] = React.useState<Product[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Menu</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our exquisite selection of premium coffees, each crafted to deliver an unforgettable experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-luxury-charcoal border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'luxury' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-luxury-charcoal rounded-lg mb-4" />
                  <div className="h-6 bg-luxury-charcoal rounded mb-2" />
                  <div className="h-4 bg-luxury-charcoal rounded mb-4" />
                  <div className="h-10 bg-luxury-charcoal rounded" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden border-gold-500/20 bg-luxury-charcoal hover:border-gold-500/50 transition-all duration-300 hover:shadow-gold group">
                      <div className="relative h-48 overflow-hidden">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-luxury-dark flex items-center justify-center">
                            <span className="text-gray-500">No image</span>
                          </div>
                        )}
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
                        <div className="text-xs text-gold-500 mb-1">{product.category || 'Coffee'}</div>
                        <h3 className="text-lg font-semibold text-gold-400 mb-2">{product.name}</h3>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description || 'No description available'}</p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-gold-500 fill-current" />
                            <span className="text-sm text-gray-400">{product.rating || 'N/A'}</span>
                            {product.reviews && <span className="text-xs text-gray-500">({product.reviews})</span>}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-gold-400">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                            )}
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/products/${product.id}`}>View</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <Coffee className="h-16 w-16 text-gold-500/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gold-400 mb-2">No products found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
