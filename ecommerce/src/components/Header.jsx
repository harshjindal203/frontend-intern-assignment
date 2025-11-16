import React from 'react'
import veloraLogo from '../assets/velora-logo.svg'

function Header({ theme, onThemeToggle, wishlistCount, onWishlistToggle }) {
  return (
    <header className="app-header">
      <div className="brand">
        <span className="brand-mark">
          <img src={veloraLogo} alt="Velora logo" />
        </span>
        <div>
          <h1 className="brand-title">Velora</h1>
          <p className="brand-subtitle">Your curated wishlist of everyday luxuries.</p>
        </div>
      </div>
      <div className="header-actions">
        <button className="wishlist-toggle" onClick={onWishlistToggle}>
          <span className="wishlist-toggle__icon">♡</span>
          <span className="wishlist-toggle__label">Wishlist</span>
          {wishlistCount > 0 && <span className="wishlist-toggle__badge">{wishlistCount}</span>}
        </button>
        <button className="theme-toggle" onClick={onThemeToggle}>
          {theme === 'light' ? '🌙 Dark mode' : '☀ Light mode'}
        </button>
      </div>
    </header>
  )
}

export default Header
