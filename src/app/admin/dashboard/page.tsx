'use client'

import Link from 'next/link'
import { LayoutDashboard, Package, Calendar, Users, MessageSquare, Settings, LogOut, TrendingUp, DollarSign, ShoppingCart, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  { title: 'Total Revenue', value: '$45,231', change: '+20.1%', icon: DollarSign },
  { title: 'Orders', value: '2,345', change: '+15%', icon: ShoppingCart },
  { title: 'Reservations', value: '123', change: '+8%', icon: Calendar },
  { title: 'Products', value: '45', change: '+2', icon: Package },
]

const recentOrders = [
  { id: 1, customer: 'John Doe', items: 'Ethiopian Yirgacheffe x2', total: '$37.98', status: 'Completed' },
  { id: 2, customer: 'Jane Smith', items: 'House Blend x1', total: '$14.99', status: 'Pending' },
  { id: 3, customer: 'Bob Johnson', items: 'Colombian Supremo x3', total: '$50.97', status: 'Processing' },
  { id: 4, customer: 'Alice Brown', items: 'Jamaican Blue Mountain x1', total: '$45.99', status: 'Completed' },
]

const recentReservations = [
  { id: 1, name: 'Sarah Wilson', date: '2024-01-20', time: '7:00 PM', guests: 4, status: 'Confirmed' },
  { id: 2, name: 'Mike Davis', date: '2024-01-21', time: '6:30 PM', guests: 2, status: 'Pending' },
  { id: 3, name: 'Emily Chen', date: '2024-01-22', time: '8:00 PM', guests: 6, status: 'Confirmed' },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Header */}
      <header className="border-b border-gold-500/20 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Coffee className="h-8 w-8 text-gold-500" />
              <h1 className="text-2xl font-bold text-gradient">LUX Coffee Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="luxury" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gold-500/20 bg-luxury-charcoal min-h-screen p-4">
          <nav className="space-y-2">
            <Link href="/admin/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gold-500/20 text-gold-400">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/admin/products" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gold-500/10 hover:text-gold-400 transition-colors">
              <Package className="h-5 w-5" />
              <span>Products</span>
            </Link>
            <Link href="/admin/reservations" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gold-500/10 hover:text-gold-400 transition-colors">
              <Calendar className="h-5 w-5" />
              <span>Reservations</span>
            </Link>
            <Link href="/admin/users" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gold-500/10 hover:text-gold-400 transition-colors">
              <Users className="h-5 w-5" />
              <span>Users</span>
            </Link>
            <Link href="/admin/messages" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gold-500/10 hover:text-gold-400 transition-colors">
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
            </Link>
            <Link href="/admin/analytics" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gold-500/10 hover:text-gold-400 transition-colors">
              <TrendingUp className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-gradient mb-8">Dashboard Overview</h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="border-gold-500/20 bg-luxury-charcoal">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-gold-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gold-400">{stat.value}</div>
                  <p className="text-xs text-green-400 mt-1">{stat.change} from last month</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Orders */}
          <Card className="border-gold-500/20 bg-luxury-charcoal mb-8">
            <CardHeader>
              <CardTitle className="text-gradient">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gold-500/20">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Order ID</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Customer</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Items</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Total</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gold-500/10 hover:bg-gold-500/5">
                        <td className="py-3 px-4 text-gold-400">#{order.id}</td>
                        <td className="py-3 px-4 text-gray-300">{order.customer}</td>
                        <td className="py-3 px-4 text-gray-300">{order.items}</td>
                        <td className="py-3 px-4 text-gold-400 font-semibold">{order.total}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                            order.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recent Reservations */}
          <Card className="border-gold-500/20 bg-luxury-charcoal">
            <CardHeader>
              <CardTitle className="text-gradient">Recent Reservations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gold-500/20">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Name</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Time</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Guests</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentReservations.map((reservation) => (
                      <tr key={reservation.id} className="border-b border-gold-500/10 hover:bg-gold-500/5">
                        <td className="py-3 px-4 text-gray-300">{reservation.name}</td>
                        <td className="py-3 px-4 text-gray-300">{reservation.date}</td>
                        <td className="py-3 px-4 text-gray-300">{reservation.time}</td>
                        <td className="py-3 px-4 text-gray-300">{reservation.guests}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            reservation.status === 'Confirmed' ? 'bg-green-500/20 text-green-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {reservation.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
