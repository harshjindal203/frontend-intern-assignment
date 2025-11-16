import React from 'react'

function SkeletonGrid({ count = 6 }) {
  return (
    <section className="product-grid">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="skeleton-card">
          <div className="skeleton skeleton-image" />
          <div className="skeleton skeleton-line skeleton-line--lg" />
          <div className="skeleton skeleton-line skeleton-line--sm" />
          <div className="skeleton skeleton-line skeleton-line--sm" />
        </div>
      ))}
    </section>
  )
}

export default SkeletonGrid
