import { NextResponse } from 'next/server'
import { products } from '@/lib/products'

const productsList = Object.entries(products).map(([slug, product]) => ({
  id: slug,
  slug: slug,
  ...product,
}))

export async function GET() {
  return NextResponse.json(productsList)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newProduct = { id: Date.now().toString(), slug: body.slug || Date.now().toString(), ...body }
  return NextResponse.json(newProduct, { status: 201 })
}
