'use server'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export interface Product {
  id: string
  name: string
  description: string | null
  price: number
  image: string | null
  category: string | null
  created_at: string
  rating?: number
  reviews?: number
  featured?: boolean
  originalPrice?: number
}

export async function getProducts(): Promise<Product[]> {
  const supabase = await createClient()
  
  console.log('=== Supabase Query Debug ===')
  console.log('Executing query: SELECT * FROM products ORDER BY created_at DESC')
  
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  console.log('Query result - data:', JSON.stringify(data, null, 2))
  console.log('Query result - error:', error ? JSON.stringify(error, null, 2) : 'null')
  console.log('Query result - data length:', data?.length || 0)

  if (error) {
    console.error('=== ERROR FETCHING PRODUCTS ===')
    console.error('Error code:', error.code)
    console.error('Error message:', error.message)
    console.error('Error details:', error.details)
    console.error('Error hint:', error.hint)
    return []
  }

  console.log('Supabase returned products count:', data?.length || 0)
  console.log('Supabase returned product names:', data?.map(p => p.name) || [])
  
  return data || []
}

export async function getProductById(id: string): Promise<Product | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return null
  }

  return data
}

export async function createProduct(product: Omit<Product, 'id' | 'created_at'>): Promise<Product | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .insert(product)
    .select()
    .single()

  if (error) {
    console.error('Error creating product:', error)
    return null
  }

  revalidatePath('/admin/products')
  revalidatePath('/products')
  revalidatePath('/menu')

  return data
}

export async function updateProduct(id: number, formData: FormData) {
  console.log('=== UPDATE PRODUCT CALLED ===')
  console.log('Product ID:', id)
  console.log('FormData entries:')
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`)
  }
  
  const supabase = await createClient()
  
  const name = formData.get('name') as string
  const price = parseFloat(formData.get('price') as string)
  const description = formData.get('description') as string
  const category = formData.get('category') as string
  
  console.log('Parsed data:', { id, name, price, description, category })
  
  const { data, error } = await supabase
    .from('products')
    .update({ name, price, description, category })
    .eq('id', id)
    .select()
  
  console.log('Supabase response:', { data, error })
  
  if (error) {
    console.error('Update error:', error)
    return { error: error.message }
  }
  
  console.log('Update successful! New data:', data)
  
  revalidatePath('/admin/products')
  revalidatePath('/products')
  return { success: true }
}

export async function deleteProduct(id: string): Promise<boolean> {
  const supabase = await createClient()
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting product:', error)
    return false
  }

  revalidatePath('/admin/products')
  revalidatePath('/products')
  revalidatePath('/menu')

  return true
}
