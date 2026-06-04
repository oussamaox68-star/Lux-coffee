import { NextResponse } from 'next/server'

const products = [
  { id: 1, name: 'Ethiopian Yirgacheffe', slug: 'ethiopian-yirgacheffe', price: 18.99, category: 'Single Origin', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800', description: 'Bright and fruity with notes of blueberry and citrus.' },
  { id: 2, name: 'Colombian Supremo', slug: 'colombian-supremo', price: 16.99, category: 'Single Origin', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800', description: 'Rich and balanced with caramel and nutty undertones.' },
  { id: 3, name: 'House Blend', slug: 'house-blend', price: 14.99, category: 'Blends', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', description: 'Our signature blend, perfect for any time of day.' },
  { id: 4, name: 'Jamaican Blue Mountain', slug: 'jamaican-blue-mountain', price: 45.99, category: 'Premium', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800', description: 'Exceptionally smooth with mild flavor and no bitterness.' },
  { id: 5, name: 'Sumatra Mandheling', slug: 'sumatra-mandheling', price: 19.99, category: 'Single Origin', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800', description: 'Earthy and full-bodied with herbal notes.' },
  { id: 6, name: 'Costa Rica Tarrazu', slug: 'costa-rica-tarrazu', price: 17.99, category: 'Single Origin', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800', description: 'Clean and bright with honey sweetness.' },
]

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newProduct = { id: products.length + 1, ...body }
  products.push(newProduct)
  return NextResponse.json(newProduct, { status: 201 })
}
