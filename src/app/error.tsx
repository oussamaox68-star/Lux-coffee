'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-luxury-black flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-gold-400 mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">An error occurred while loading this page.</p>
        <Button
          variant="luxury"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </div>
  )
}
