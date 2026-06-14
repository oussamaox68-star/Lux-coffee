import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { ProductDetailClient } from './ProductDetailClient'

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', slug)
    .single()

  if (error || !product) {
    notFound()
  }

  return <ProductDetailClient product={product} slug={slug} />
}
