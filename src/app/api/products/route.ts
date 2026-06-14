import { NextResponse } from 'next/server'
import { getProducts } from '@/app/actions/products'

export async function GET() {
  const products = await getProducts()
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { createProduct } = await import('@/app/actions/products')
  const newProduct = await createProduct(body)
  return NextResponse.json(newProduct, { status: 201 })
}
