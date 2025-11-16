import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import FiltersBar from './components/FiltersBar.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import ProductModal from './components/ProductModal.jsx'
import Pagination from './components/Pagination.jsx'
import SkeletonGrid from './components/SkeletonGrid.jsx'
import WishlistDrawer from './components/WishlistDrawer.jsx'
import useLocalStorage from './hooks/useLocalStorage.js'

const PRODUCTS_API = 'https://fakestoreapi.com/products'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('none') // none | asc | desc
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [favoriteIds, setFavoriteIds] = useLocalStorage('favorites', [])
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  const PRODUCTS_PER_PAGE = 6

  // Apply theme on root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError('')
        const res = await fetch(PRODUCTS_API)
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError(err.message || 'Something went wrong while fetching products.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category))
    return ['all', ...Array.from(set)]
  }, [products])

  // Filter, search, sort
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products]

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter((p) => p.title.toLowerCase().includes(q))
    }

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (sortOrder === 'asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'desc') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [products, searchQuery, selectedCategory, sortOrder])

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE) || 1

  const currentPageProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE
    return filteredAndSortedProducts.slice(start, start + PRODUCTS_PER_PAGE)
  }, [filteredAndSortedProducts, currentPage])

  const wishlistProducts = useMemo(
    () => products.filter((p) => favoriteIds.includes(p.id)),
    [products, favoriteIds],
  )

  const handleOpenProduct = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
    setIsModalOpen(false)
  }

  const toggleFavorite = (productId) => {
    setFavoriteIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Header
        theme={theme}
        onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        wishlistCount={favoriteIds.length}
        onWishlistToggle={() => setIsWishlistOpen((open) => !open)}
      />

      <main className="main-content">
        <FiltersBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={(value) => {
            setSelectedCategory(value)
            setCurrentPage(1)
          }}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        {error && (
          <div className="status-banner status-banner--error">
            <span>⚠</span> {error}
          </div>
        )}

        {loading ? (
          <SkeletonGrid count={PRODUCTS_PER_PAGE} />
        ) : (
          <>
            <ProductGrid
              products={currentPageProducts}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
              onOpenProduct={handleOpenProduct}
            />

            <div className="results-summary">
              Showing <strong>{currentPageProducts.length}</strong> of{' '}
              <strong>{filteredAndSortedProducts.length}</strong> products
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}

        <ProductModal
          isOpen={isModalOpen}
          product={selectedProduct}
          isFavorite={selectedProduct && favoriteIds.includes(selectedProduct.id)}
          onToggleFavorite={toggleFavorite}
          onClose={handleCloseModal}
        />

        <WishlistDrawer
          isOpen={isWishlistOpen}
          products={wishlistProducts}
          onClose={() => setIsWishlistOpen(false)}
          onToggleFavorite={toggleFavorite}
          onOpenProduct={handleOpenProduct}
        />
      </main>
    </div>
  )
}

export default App
