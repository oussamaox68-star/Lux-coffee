'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-luxury-black flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-gold-400 mb-4">Something went wrong!</h2>
            <p className="text-gray-400 mb-6">A critical error occurred.</p>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-gold-500 text-luxury-black rounded hover:bg-gold-400 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
