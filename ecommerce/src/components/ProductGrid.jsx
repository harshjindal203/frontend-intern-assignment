import React from 'react'
import ProductCard from './ProductCard.jsx'

function ProductGrid({ products, favoriteIds, onToggleFavorite, onOpenProduct }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <p>No products found. Try adjusting your search or filters.</p>
      </div>
    )
  }

  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favoriteIds.includes(product.id)}
          onToggleFavorite={() => onToggleFavorite(product.id)}
          onOpen={() => onOpenProduct(product)}
        />
      ))}
    </section>
  )
}

export default ProductGrid
