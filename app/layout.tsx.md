# Internal Code Documentation: `RootLayout.tsx`

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Imports](#2-imports)
* [3. Font Loading (`myFont`)](#3-font-loading-myfont)
* [4. Metadata Definition](#4-metadata-definition)
* [5. `RootLayout` Component](#5-rootlayout-component)


## 1. Overview

This document details the implementation of the `RootLayout.tsx` component, responsible for setting up the basic HTML structure and applying global styles to the Next.js application.  The primary focus is on font loading and metadata configuration.


## 2. Imports

The code begins by importing necessary modules:

| Module                     | Purpose                                                              |
|-----------------------------|--------------------------------------------------------------------------|
| `type { Metadata } from "next";` | Imports the `Metadata` type from Next.js, used for defining page metadata. |
| `localFont from "next/font/local";` | Imports the `localFont` function from Next.js for local font loading.     |
| `"./globals.css";`         | Imports the global CSS stylesheet.                                      |


## 3. Font Loading (`myFont`)

The `myFont` constant utilizes Next.js's `localFont` function to load a custom font:

```typescript
const myFont = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
});
```

This function asynchronously loads the `CalSans-SemiBold.woff2` font file located in the `/fonts` directory.  The `localFont` function handles the complexities of font loading, including font format detection and applying the necessary CSS classes for rendering.  No specific algorithm is implemented here; it leverages Next.js's built-in functionality.  The returned object contains a `className` property which will be used in the body element to apply the font to the application.


## 4. Metadata Definition

The `metadata` constant defines the metadata for the application using the `Metadata` type imported from Next.js:

```typescript
export const metadata: Metadata = {
  title: "Anand Munjuluri",
  description: "Minimalistic Portfolio",
};
```

This metadata is used by search engines and other applications to understand the content of the page.


## 5. `RootLayout` Component

The `RootLayout` component is the main component of this file. It receives the `children` prop which represents the content of the page.

```typescript
export default function RootLayout({
  children,
}: Readonly< {
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${myFont.className} ${myFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

This function renders a basic HTML structure. The `lang` attribute is set to "en" indicating English language, and the `className` attribute adds a dark mode class and the font class names provided by the `myFont` object.  The `antialiased` class likely comes from a global stylesheet, and further enhances the visual appearance. The `children` prop is rendered within the `<body>` tag, allowing nested components to be rendered within the layout.  The duplication of `myFont.className` appears to be a potential error and should be reviewed.  Only one instance is needed to apply the font styling.
