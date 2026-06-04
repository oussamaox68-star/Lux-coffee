'use client'

import * as React from 'react'
import Link from 'next/link'
import { Search, SlidersHorizontal, Star, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    slug: 'ethiopian-yirgacheffe',
    description: 'Bright and fruity with floral notes and a wine-like acidity',
    price: 18.99,
    originalPrice: 22.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    category: 'Single Origin',
    rating: 4.9,
    reviews: 128,
    featured: true,
    popular: true,
    inStock: true,
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    slug: 'colombian-supremo',
    description: 'Rich and balanced with caramel sweetness and nutty undertones',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    category: 'Single Origin',
    rating: 4.8,
    reviews: 95,
    featured: true,
    popular: true,
    inStock: true,
  },
  {
    id: 3,
    name: 'Jamaican Blue Mountain',
    slug: 'jamaican-blue-mountain',
    description: 'Exceptionally smooth with mild flavor and no bitterness',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    category: 'Single Origin',
    rating: 5.0,
    reviews: 67,
    featured: true,
    popular: false,
    inStock: true,
  },
  {
    id: 4,
    name: 'House Blend',
    slug: 'house-blend',
    description: 'Our signature blend combining the best of multiple origins',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    category: 'Blends',
    rating: 4.7,
    reviews: 203,
    featured: false,
    popular: true,
    inStock: true,
  },
  {
    id: 5,
    name: 'Espresso Roast',
    slug: 'espresso-roast',
    description: 'Dark and bold with rich crema and chocolate notes',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400',
    category: 'Dark Roast',
    rating: 4.8,
    reviews: 156,
    featured: false,
    popular: true,
    inStock: true,
  },
  {
    id: 6,
    name: 'Decaf Blend',
    slug: 'decaf-blend',
    description: 'Smooth decaffeinated coffee without compromising flavor',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
    category: 'Decaf',
    rating: 4.5,
    reviews: 89,
    featured: false,
    popular: false,
    inStock: true,
  },
  {
    id: 7,
    name: 'Cold Brew Blend',
    slug: 'cold-brew-blend',
    description: 'Specially crafted for cold brewing with smooth finish',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
    category: 'Cold Brew',
    rating: 4.9,
    reviews: 112,
    featured: true,
    popular: true,
    inStock: true,
  },
  {
    id: 8,
    name: 'Light Roast',
    slug: 'light-roast',
    description: 'Bright and acidic with complex fruit flavors',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400',
    category: 'Light Roast',
    rating: 4.6,
    reviews: 78,
    featured: false,
    popular: false,
    inStock: true,
  },
]

const categories = ['All', 'Single Origin', 'Blends', 'Light Roast', 'Medium Roast', 'Dark Roast', 'Cold Brew', 'Decaf']

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [showFilters, setShowFilters] = React.useState(false)

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
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
                    <img
                      src={product.image}
                      alt={product.name}
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
                    <div className="text-xs text-gold-500 mb-1">{product.category}</div>
                    <h3 className="text-lg font-semibold text-gold-400 mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-gold-500 fill-current" />
                        <span className="text-sm text-gray-400">{product.rating}</span>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
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
                        <Link href={`/products/${product.slug}`}>View</Link>
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
        </div>
      </section>
    </div>
  )
}
