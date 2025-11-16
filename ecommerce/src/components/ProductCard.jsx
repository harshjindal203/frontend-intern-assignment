import React from 'react'

function ProductCard({ product, isFavorite, onToggleFavorite, onOpen }) {
  return (
    <article className="product-card" onClick={onOpen}>
      <button
        className={`favorite-button ${isFavorite ? 'favorite-button--active' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          onToggleFavorite()
        }}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '♥' : '♡'}
      </button>

      <div className="product-card__image-wrapper">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title" title={product.title}>
          {product.title}
        </h3>
        <p className="product-card__category">{product.category}</p>
        <div className="product-card__meta">
          <span className="product-card__price">${product.price.toFixed(2)}</span>
          <span className="product-card__rating">
            ⭐ {product.rating?.rate ?? '–'} ({product.rating?.count ?? 0})
          </span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
