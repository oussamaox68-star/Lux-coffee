import { NextResponse } from 'next/server'

const reservations: any[] = []

export async function GET() {
  return NextResponse.json(reservations)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newReservation = {
    id: reservations.length + 1,
    ...body,
    status: 'Pending',
    createdAt: new Date().toISOString()
  }
  reservations.push(newReservation)
  return NextResponse.json(newReservation, { status: 201 })
}
