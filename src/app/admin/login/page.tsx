'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Coffee, Lock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAdminAuth } from '@/contexts/AdminAuthContext'
import { useToast } from '@/components/ui/use-toast'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAdminAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const success = await login(email, password)

    if (success) {
      toast({
        title: 'Login Successful',
        description: 'Welcome back, Admin!',
      })
      router.push('/admin/dashboard')
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid email or password',
        variant: 'destructive',
      })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-luxury-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-gold-500/20 bg-luxury-charcoal">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Coffee className="h-12 w-12 text-gold-500" />
          </div>
          <CardTitle className="text-2xl text-gradient">Admin Login</CardTitle>
          <p className="text-gray-400 mt-2">Enter your credentials to access the admin panel</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-400">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@luxcoffee.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-400">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-luxury-dark border-gold-500/30 text-gold-100 placeholder:text-gray-500"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              variant="luxury"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Default credentials:</p>
            <p className="text-gold-400">admin@luxcoffee.com / Admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
