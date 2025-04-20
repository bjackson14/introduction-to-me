# Introduction to Me

A website meant to introduce myself and my experience in software engineering.

---

# React Components Documentation

## Badge

The `Badge` component provides an inline element to display formatted text on the page.

### Props

- `shape` (optional): Determines the shape of the badge.  
  - Options: `'square'` (default), `'pill'`
- `color` (optional): Sets the color of the badge.  
  - Options: `'grey'` (default), `'red'`, `'yellow'`, `'green'`, `'blue'`, `'indigo'`, `'purple'`, `'pink'`

### Usage

**Square, grey badge displaying "Text Here":**
```jsx
<Badge>Text Here</Badge
```

**Pill-shaped, grey badge displaying "Text Here":**
```jsx
<Badge shape="pill">Text Here</Badge>
```

**Pill-shaped, blue badge displaying "Text Here":**
```jsx
<Badge shape="pill" color="blue">Text Here</Badge>
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
