import { NextResponse } from 'next/server'

const messages: any[] = []

export async function GET() {
  return NextResponse.json(messages)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newMessage = {
    id: messages.length + 1,
    ...body,
    status: 'Unread',
    createdAt: new Date().toISOString()
  }
  messages.push(newMessage)
  return NextResponse.json(newMessage, { status: 201 })
}
