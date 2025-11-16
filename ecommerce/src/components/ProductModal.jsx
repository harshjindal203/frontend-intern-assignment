import React from 'react'

function ProductModal({ isOpen, product, isFavorite, onToggleFavorite, onClose }) {
  if (!isOpen || !product) return null

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="modal__content">
          <div className="modal__image-wrapper">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="modal__details">
            <h2 className="modal__title">{product.title}</h2>
            <p className="modal__category">{product.category}</p>
            <div className="modal__price-row">
              <span className="modal__price">${product.price.toFixed(2)}</span>
              <span className="modal__rating">
                ⭐ {product.rating?.rate ?? '–'} ({product.rating?.count ?? 0} reviews)
              </span>
            </div>
            <p className="modal__description">{product.description}</p>
            <button
              className={`primary-button ${isFavorite ? 'primary-button--outline' : ''}`}
              onClick={() => onToggleFavorite(product.id)}
            >
              {isFavorite ? '♥ In favorites' : '♡ Add to favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
