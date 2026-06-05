import { notFound } from 'next/navigation'
import { products, getProductSlugs } from '@/lib/products'
import { ProductDetailClient } from './ProductDetailClient'

export async function generateStaticParams() {
  return getProductSlugs().map((slug) => ({
    slug: slug,
  }))
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products[slug]

  if (!product) {
    notFound()
  }

  return <ProductDetailClient product={product} slug={slug} />
}
