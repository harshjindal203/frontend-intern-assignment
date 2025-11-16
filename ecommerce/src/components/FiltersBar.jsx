import React from 'react'

function FiltersBar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortChange,
}) {
  return (
    <section className="filters-bar">
      <div className="filters-bar__primary">
        <div className="field">
          <label className="field-label" htmlFor="search">
            Search
          </label>
          <div className="field-input-wrapper">
            <span className="field-icon">🔍</span>
            <input
              id="search"
              type="text"
              placeholder="Search by product title..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="field-label" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All categories' : cat}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label className="field-label" htmlFor="sort">
            Sort by price
          </label>
          <select id="sort" value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
            <option value="none">None</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default FiltersBar
