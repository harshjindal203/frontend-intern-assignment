import React from 'react'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = []

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p)
  }

  return (
    <nav className="pagination">
      <button
        className="pagination__button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Previous
      </button>

      <div className="pagination__pages">
        {pages.map((page) => (
          <button
            key={page}
            className={`pagination__page ${
              page === currentPage ? 'pagination__page--active' : ''
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination__button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>
    </nav>
  )
}

export default Pagination
