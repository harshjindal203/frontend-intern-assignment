# Velora – Mini Product Dashboard

This is a **React.js** implementation of the Mini Product Dashboard, built using **Vite**. It fetches product data from the public API [`https://fakestoreapi.com/products`](https://fakestoreapi.com/products) and provides search, filters, sorting, responsive layout, a product detail modal, and several bonus features.

## Tech Stack

- React (with hooks: `useState`, `useEffect`, `useMemo`)
- Vite
- CSS (Flexbox + CSS Grid)

---

## Features

### Core Requirements

- **Fetch & Display Data**
  - Products are fetched asynchronously from `https://fakestoreapi.com/products`.
  - Loading state uses a **skeleton loader** grid.
  - Error state shows a red banner with a helpful message.

- **Search & Filter**
  - **Search by title** (case-insensitive) using the search bar.
  - **Filter by category** using the dropdown populated from API categories.
  - **Sort by price**
    - `None`
    - `Low → High`
    - `High → Low`

- **Responsive Design**
  - Layout is responsive for **mobile**, **tablet**, and **desktop**.
  - Product grid uses CSS Grid with `auto-fill` for smooth wrapping.

- **Product Detail Modal (Bonus)**
  - Clicking a product card opens a modal with:
    - Large product image
    - Full title, category, price, rating & review count
    - Full description
    - Favorite button

- **API Handling (Bonus)**
  - Uses `async/await` with proper `try/catch/finally`.
  - Handles loading, success, and error states.

### Additional Enhancements

- **Dark/Light Theme Toggle**
  - Toggle in the header switches between light and dark mode.
  - Theme choice is persisted in `localStorage`.

- **Favorites**
  - Heart icon on each product card to add/remove from favorites.
  - "Add to favorites" button in the product modal.
  - Favorite list is persisted via `localStorage`.

- **Pagination**
  - Shows **6 products per page**.
  - Previous/Next buttons and page number buttons.
  - Smooth scroll to top on page change.

- **Skeleton Loader**
  - Animated skeleton cards are shown while the products are loading.

- **Luxurious UI/UX**
  - Uses **Playfair Display** and **Poppins** fonts.
  - Soft gradients, shadows, and rounded cards.
  - Clean, modern dashboard look.

---

## Project Structure

```text
src/
  App.jsx                # Main app logic (fetch, filters, pagination, modal)
  main.jsx               # React entry point
  index.css              # Global styles, layout, theme, and components styles
  components/
    Header.jsx           # Top header with brand and theme toggle
    FiltersBar.jsx       # Search, category, and sorting controls
    ProductGrid.jsx      # Grid that renders ProductCard components
    ProductCard.jsx      # Single product card UI
    ProductModal.jsx     # Modal popup with full product details
    Pagination.jsx       # Pagination controls
    SkeletonGrid.jsx     # Skeleton loader grid
  hooks/
    useLocalStorage.js   # Custom hook to sync state to localStorage
```

---

## Setup & Running Locally

1. **Install dependencies** (already done once, but safe to re-run):

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

   Then open the URL printed in the terminal (usually `http://localhost:5173`).

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build (optional)**:

   ```bash
   npm run preview
   ```

---

## Deployment

You can deploy the app using **Vercel**, **Netlify**, or **GitHub Pages**.

### Example (Vercel)

1. Push this project to a GitHub repository (recommended repo name: `frontend-intern-assignment`).
2. Go to [https://vercel.com](https://vercel.com) and import the GitHub repo.
3. Vercel will auto-detect Vite + React and set:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy and copy the **Live Demo URL**.

You can then submit:

- **GitHub Repo Link**
- **Live Demo Link**

---

## Notes

- The app is fully client-side and uses a public API.
- If the API is down or unreachable, an error banner will display and the skeleton loader will disappear.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
