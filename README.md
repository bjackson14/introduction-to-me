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
  Text Here
</Banner>
```

**Sucess banner with just a title**
```
<Banner type="success" title="Congratulations!" />
```

**Sucess banner with just a title and message**
```
<Banner type="success" title="Congratulations!">
  Text Here
</Banner>
```

**Warning banner with just a title**
```
<Banner type="warning" title="Congratulations!" />
```

**Warning banner with just a title and message**
```
<Banner type="warning" title="Congratulations!">
  Text Here
</Banner>
```

**Error banner with just a title**
```
<Banner type="error" title="Congratulations!" />
```

**Error banner with just a title and message**
```
<Banner type="error" title="Congratulations!">
  Text Here
</Banner>
```

---

## Card

The `Card` component provides a block-level element for displaying information to the user. It can display only a header, a header with a message, or just a message.

## Props

-  `header` (optional): the title of the message that needs to be displayed

## Usage

**Card with just a header**
```
<Card header="Easy Deployment" />
```

**Card with header and message**
```
<Card header="Easy Deployment">
  Text Here
</Card>
```

**Card with message**
```
<Card>
  Text Here
</Card>
```

---

## Testimonial

The `Testimonial` component displays a user quote in a block-level element. It can optionally include an image, the name of the person being quoted, and their position or affiliation.

## Props

-  `src` (optional): The URL or path to the image of the person being quoted
-  `alt` (optional): Alternative text for the image
-  `quotee`: (optional): The name of the person who gave the testimonial
-  `position`: (optional): The job title or role of the person being quoted

## Usage

**Testimonial with image**
```
<Testimonial src="./src/assets/imgs/testimonial-image.jpg" alt="test img" quotee="May Andersons" position="Workcation, CTO">
  Text Here
</Testimonial>
```

**Testimonial without image**
```
<Testimonial quotee="May Andersons" position="Workcation, CTO">
  Text Here
</Testimonial>
```

---

## Tooltip

The `Tooltip` omponent shows a small pop-up box when you hover over or focus on the wrapped text. This box can contain a title and is useful for giving more information without cluttering the page.

### Props

- `title`: The heading or label that appears in the tooltip box
- `color` (optional): Changes the tooltip’s accent color  
  - Options: `'default'` (default), `'blue'`, `'pink'`, `'green'`
- `style` (optional): Adjusts the visual style of the tooltip
  - Options: `'light'` (default), `'bold'`

### Usage

**Default badge displaying a header and "Text Here":**
```
<Tooltip title="Header">Text Here</Tooltip>
```

**Bold badge with a color property displaying a header and "Text Here":**
```
<Tooltip title="Header" style="bold" color="blue">Text Here</Tooltip>
```

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
