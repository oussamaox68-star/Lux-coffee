'use client'

import * as React from 'react'
import { Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <Coffee className="h-16 w-16 text-gold-500 mx-auto mb-4" />
        </motion.div>
        <h1 className="text-2xl font-bold text-gradient mb-2">LUX Coffee</h1>
        <p className="text-gray-400">Loading your experience...</p>
      </motion.div>
    </div>
  )
}
