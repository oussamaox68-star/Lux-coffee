'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/client'

export interface Reservation {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  created_at: string
  updated_at: string
}

export async function getReservations(): Promise<Reservation[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .order('date', { ascending: true })

  if (error) {
    console.error('Error fetching reservations:', error)
    return []
  }

  return data || []
}

export async function createReservation(reservation: Omit<Reservation, 'id' | 'created_at' | 'updated_at'>) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('reservations')
    .insert(reservation)
    .select()
    .single()

  if (error) {
    console.error('Error creating reservation:', error)
    return null
  }

  revalidatePath('/admin/reservations')
  revalidatePath('/reservations')
  return data
}

export async function updateReservation(id: string, updates: Partial<Reservation>) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('reservations')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating reservation:', error)
    return null
  }

  revalidatePath('/admin/reservations')
  return data
}

export async function deleteReservation(id: string): Promise<boolean> {
  const supabase = createClient()
  const { error } = await supabase
    .from('reservations')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting reservation:', error)
    return false
  }

  revalidatePath('/admin/reservations')
  revalidatePath('/reservations')
  return true
}
