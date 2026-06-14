'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Users, CheckCircle, Trash2, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAdminAuth } from '@/contexts/AdminAuthContext'
import { useToast } from '@/components/ui/use-toast'
import { getReservations, updateReservation, deleteReservation, type Reservation } from '@/app/actions/reservations'

export default function AdminReservationsPage() {
  const { isAuthenticated, logout } = useAdminAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [reservations, setReservations] = React.useState<Reservation[]>([])
  const [loading, setLoading] = React.useState(true)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [filterDate, setFilterDate] = React.useState('')

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }

    // Fetch reservations from Supabase
    const fetchReservations = async () => {
      setLoading(true)
      const data = await getReservations()
      setReservations(data)
      setLoading(false)
    }

    fetchReservations()
  }, [isAuthenticated, router])

  const handleStatusChange = async (id: string, newStatus: Reservation['status']) => {
    const updated = await updateReservation(id, { status: newStatus })
    if (updated) {
      setReservations(reservations.map(r => 
        r.id === id ? { ...r, status: newStatus } : r
      ))
      toast({
        title: 'Status Updated',
        description: `Reservation status changed to ${newStatus}`,
      })
    } else {
      toast({
        title: 'Error',
        description: 'Failed to update reservation status',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this reservation?')) return

    const success = await deleteReservation(id)
    if (success) {
      setReservations(reservations.filter(r => r.id !== id))
      toast({
        title: 'Deleted',
        description: 'Reservation deleted successfully',
      })
    } else {
      toast({
        title: 'Error',
        description: 'Failed to delete reservation',
        variant: 'destructive',
      })
    }
  }

  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = 
      reservation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.phone.includes(searchQuery)
    
    const matchesDate = !filterDate || reservation.date === filterDate
    
    return matchesSearch && matchesDate
  })

  const getStatusColor = (status: Reservation['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/20 text-green-400'
      case 'completed':
        return 'bg-blue-500/20 text-blue-400'
      case 'cancelled':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-yellow-500/20 text-yellow-400'
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Header */}
      <header className="border-b border-gold-500/20 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => router.push('/admin/dashboard')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-bold text-gradient">Reservations Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search by name, email, or phone..."
              className="pl-10 bg-luxury-charcoal border-gold-500/30 text-gold-100 placeholder:text-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex-1 max-w-xs">
            <Input
              type="date"
              className="bg-luxury-charcoal border-gold-500/30 text-gold-100"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
        </div>

        {/* Reservations Table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-pulse">Loading reservations...</div>
          </div>
        ) : (
          <div className="bg-luxury-charcoal border border-gold-500/20 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-luxury-dark">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Contact</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Date & Time</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Guests</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReservations.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-gray-400">
                        No reservations found
                      </td>
                    </tr>
                  ) : (
                    filteredReservations.map((reservation) => (
                      <tr key={reservation.id} className="border-t border-gold-500/10 hover:bg-gold-500/5">
                        <td className="py-3 px-4">
                          <div>
                            <div className="text-gold-400 font-medium">{reservation.name}</div>
                            <div className="text-xs text-gray-500">{reservation.email}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-400">{reservation.phone}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Calendar className="h-4 w-4" />
                            <span>{reservation.date}</span>
                            <Clock className="h-4 w-4 ml-2" />
                            <span>{reservation.time}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <Users className="h-4 w-4" />
                            <span>{reservation.guests}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs capitalize ${getStatusColor(reservation.status)}`}>
                            {reservation.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            {reservation.status === 'pending' && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleStatusChange(reservation.id, 'confirmed')}
                                className="text-green-400 hover:text-green-300"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
                            {reservation.status === 'confirmed' && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleStatusChange(reservation.id, 'completed')}
                                className="text-blue-400 hover:text-blue-300"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(reservation.id)}
                              className="text-red-400 hover:text-red-300 hover:border-red-500/50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
