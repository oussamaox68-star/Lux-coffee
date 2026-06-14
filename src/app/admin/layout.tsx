'use client'

import { AdminAuthProvider } from '@/contexts/AdminAuthContext'
import { Toaster } from '@/components/ui/toaster'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-luxury-black">
        {children}
      </div>
      <Toaster />
    </AdminAuthProvider>
  )
}
