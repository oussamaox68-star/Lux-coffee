'use client'

import Link from 'next/link'
import { Coffee, Home, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Coffee className="h-32 w-32 text-gold-500 mx-auto mb-8" />
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gold-400 mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/menu">
                View Menu <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
