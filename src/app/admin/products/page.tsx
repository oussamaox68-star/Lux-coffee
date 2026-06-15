'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Plus, Pencil, Trash2, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAdminAuth } from '@/contexts/AdminAuthContext'
import { useToast } from '@/components/ui/use-toast'
import { getProducts, createProduct, updateProduct, deleteProduct, type Product } from '@/app/actions/products'


export default function AdminProductsPage() {
  const { isAuthenticated, logout } = useAdminAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [products, setProducts] = React.useState<Product[]>([])
  const [loading, setLoading] = React.useState(true)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [showAddModal, setShowAddModal] = React.useState(false)
  const [showEditModal, setShowEditModal] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null)

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }

    // Fetch products from Supabase
    const fetchProducts = async () => {
      setLoading(true)
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }

    fetchProducts()
  }, [isAuthenticated, router])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    const success = await deleteProduct(id)
    if (success) {
      setProducts(products.filter(p => p.id !== id))
      toast({
        title: 'Success',
        description: 'Product deleted successfully',
      })
    } else {
      toast({
        title: 'Error',
        description: 'Failed to delete product',
        variant: 'destructive',
      })
    }
  }

  const handleEdit = (product: Product) => {
    setSelectedProduct(product)
    setShowEditModal(true)
  }

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const refreshProducts = async () => {
    setLoading(true)
    const data = await getProducts()
    setProducts(data)
    setLoading(false)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Header */}
      <header className="border-b border-gold-500/20 bg-luxury-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => router.push('/admin/dashboard')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-bold text-gradient">Products Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="luxury" size="sm" onClick={() => setShowAddModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 bg-luxury-charcoal border-gold-500/30 text-gold-100 placeholder:text-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Products Table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-pulse">Loading products...</div>
          </div>
        ) : (
          <div className="bg-luxury-charcoal border border-gold-500/20 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-luxury-dark">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Image</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Price</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-12 text-gray-400">
                        No products found
                      </td>
                    </tr>
                  ) : (
                    filteredProducts.map((product) => (
                      <tr key={product.id} className="border-t border-gold-500/10 hover:bg-gold-500/5">
                        <td className="py-3 px-4">
                          <div className="relative h-12 w-12 rounded overflow-hidden">
                            {product.image ? (
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="h-full w-full bg-luxury-dark flex items-center justify-center">
                                <span className="text-xs text-gray-500">No img</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gold-400 font-medium">{product.name}</td>
                        <td className="py-3 px-4 text-gray-400">{product.category || 'N/A'}</td>
                        <td className="py-3 px-4 text-gold-400 font-semibold">${product.price}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(product)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(product.id)}
                              className="text-red-400 hover:text-red-300 hover:border-red-500/50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Add Product Modal */}
      {showAddModal && (
        <ProductModal
          onClose={() => setShowAddModal(false)}
          onSave={async () => {
            await refreshProducts()
            setShowAddModal(false)
          }}
        />
      )}

      {/* Edit Product Modal */}
      {showEditModal && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setShowEditModal(false)
            setSelectedProduct(null)
          }}
          onSave={async () => {
            await refreshProducts()
            setShowEditModal(false)
            setSelectedProduct(null)
          }}
        />
      )}
    </div>
  )
}

function ProductModal({
  product,
  onClose,
  onSave,
}: {
  product?: Product
  onClose: () => void
  onSave: () => Promise<void>
}) {
  const [formData, setFormData] = React.useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || 0,
    image: product?.image || '',
    category: product?.category || '',
  })
  const [loading, setLoading] = React.useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let success = false
      if (product) {
        // Update existing product using FormData
        const formDataObj = new FormData()
        formDataObj.append('name', formData.name)
        formDataObj.append('price', formData.price.toString())
        formDataObj.append('description', formData.description || '')
        formDataObj.append('category', formData.category || '')
        
        const result = await updateProduct(parseInt(product.id), formDataObj)
        success = result.success ?? false
        if (success) {
          toast({
            title: 'Success',
            description: 'Product updated successfully',
          })
        } else if (result.error) {
          toast({
            title: 'Error',
            description: result.error,
            variant: 'destructive',
          })
        }
      } else {
        // Add new product
        const productData = {
          name: formData.name,
          description: formData.description || null,
          price: formData.price,
          image: formData.image || null,
          category: formData.category || null,
        }
        const created = await createProduct(productData)
        success = !!created
        if (success) {
          toast({
            title: 'Success',
            description: 'Product added successfully',
          })
        }
      }

      if (success) {
        await onSave()
      }
    } catch (error: any) {
      console.error('Error saving product:', error)
      toast({
        title: 'Error',
        description: 'Failed to save product',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-gold-500/20 bg-luxury-charcoal max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gradient mb-6">
            {product ? 'Edit Product' : 'Add New Product'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-400">Product Name *</label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-luxury-dark border-gold-500/30 text-gold-100"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm text-gray-400">Category</label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="bg-luxury-dark border-gold-500/30 text-gold-100"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm text-gray-400">Price *</label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                className="bg-luxury-dark border-gold-500/30 text-gold-100"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="image" className="text-sm text-gray-400">Image URL</label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="bg-luxury-dark border-gold-500/30 text-gold-100"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm text-gray-400">Description</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full min-h-[100px] px-3 py-2 bg-luxury-dark border border-gold-500/30 rounded-md text-gold-100 resize-y"
                rows={4}
              />
            </div>
            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="luxury" disabled={loading}>
                {loading ? 'Saving...' : product ? 'Update Product' : 'Add Product'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
