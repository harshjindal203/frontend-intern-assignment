import React from 'react'

function WishlistDrawer({ isOpen, products, onClose, onToggleFavorite, onOpenProduct }) {
  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('wishlist-drawer-backdrop')) {
      onClose()
    }
  }

  return (
    <div className="wishlist-drawer-backdrop" onClick={handleBackdropClick}>
      <aside className="wishlist-drawer">
        <div className="wishlist-drawer__header">
          <div>
            <h2 className="wishlist-drawer__title">Wishlist</h2>
            <p className="wishlist-drawer__count">{products.length} saved items</p>
          </div>
          <button className="wishlist-drawer__close" onClick={onClose} aria-label="Close wishlist">
            ✕
          </button>
        </div>

        {products.length === 0 ? (
          <div className="wishlist-drawer__empty">Your wishlist is empty. Tap ♡ on products to save them.</div>
        ) : (
          <div className="wishlist-drawer__list">
            {products.map((product) => (
              <div
                key={product.id}
                className="wishlist-item"
                onClick={() => {
                  onOpenProduct(product)
                }}
              >
                <div className="wishlist-item__image-wrapper">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="wishlist-item__info">
                  <h3 className="wishlist-item__title" title={product.title}>
                    {product.title}
                  </h3>
                  <p className="wishlist-item__price">${product.price.toFixed(2)}</p>
                  <div className="wishlist-item__actions">
                    <button
                      className="wishlist-item__remove"
                      onClick={(e) => {
                        e.stopPropagation()
                        onToggleFavorite(product.id)
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </div>
  )
}

export default WishlistDrawer
