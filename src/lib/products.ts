export const products: Record<string, any> = {}

export function getProductSlugs() {
  return Object.keys(products)
}
