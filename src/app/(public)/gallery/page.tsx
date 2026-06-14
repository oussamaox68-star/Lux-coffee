'use client'

import * as React from 'react'
import Image from 'next/image'
import { Filter, Heart, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800', category: 'Coffee', title: 'Premium Coffee' },
  { id: 2, src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800', category: 'Interior', title: 'Main Dining Area' },
  { id: 3, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', category: 'Coffee', title: 'Signature Blend' },
  { id: 4, src: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800', category: 'Barista', title: 'Latte Art' },
  { id: 5, src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800', category: 'Coffee', title: 'Cold Brew' },
  { id: 6, src: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800', category: 'Interior', title: 'Private Dining' },
  { id: 7, src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', category: 'Coffee', title: 'Espresso' },
  { id: 8, src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800', category: 'Barista', title: 'Pour Over' },
  { id: 9, src: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800', category: 'Interior', title: 'Coffee Bar' },
  { id: 10, src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800', category: 'Coffee', title: 'Cappuccino' },
  { id: 11, src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800', category: 'Barista', title: 'Coffee Preparation' },
  { id: 12, src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800', category: 'Interior', title: 'Lounge Area' },
]

const categories = ['All', 'Coffee', 'Interior', 'Barista']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [selectedImage, setSelectedImage] = React.useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Gallery</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A visual journey through our world of luxury coffee and elegant spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-luxury-charcoal border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <Filter className="h-5 w-5 text-gold-500" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'luxury' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-gold-400 font-semibold">{image.title}</h3>
                  <p className="text-gray-400 text-sm">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Button variant="glass" size="icon" onClick={(e) => e.stopPropagation()}>
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" onClick={(e) => e.stopPropagation()}>
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" onClick={() => setSelectedImage(null)}>
                ✕
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-luxury-charcoal/90 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-gold-400 font-semibold text-lg">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
