# Introduction to Me

A website meant to introduce myself and my experience in software engineering.

---

# Required Packages
The following packages are required for this project to work:

- `react@19.0.0`
- `react-icons@5.5.0`
- `clsx@2.1.1`

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
```
<Badge>Text Here</Badge>
```

**Pill-shaped, grey badge displaying "Text Here":**
```
<Badge shape="pill">Text Here</Badge>
```

**Pill-shaped, blue badge displaying "Text Here":**
```
<Badge shape="pill" color="blue">Text Here</Badge>
```

---

## Banner

The `Banner` component provides a block-level element for displaying messages to the user. It can be rendered as a single line with an icon and title, or as a multiline message that includes an icon, title, and detailed content.

## Props

-  `type` (optional): determines the type of message to display. This will affect the icon and color of the banner
  - Options: `'neutral'` (default), `'sucess'`, `'warning'`, `'error'`
- `title` (required): determines the header text of the banner

## Usage

**Neutral banner with just a title**

```
<Banner title="Update available" />
```

**Neutral banner with just a title and message**
```
<Banner title="Update available">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
</Banner>
```

**Sucess banner with just a title**
```
<Banner type="success" title="Congratulations!" />
```

**Sucess banner with just a title and message**
```
<Banner type="success" title="Congratulations!">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
</Banner>
```

**Warning banner with just a title**
```
<Banner type="warning" title="Congratulations!" />
```

**Warning banner with just a title and message**
```
<Banner type="warning" title="Congratulations!">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
</Banner>
```

**Error banner with just a title**
```
<Banner type="error" title="Congratulations!" />
```

**Error banner with just a title and message**
```
<Banner type="error" title="Congratulations!">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
</Banner>
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
