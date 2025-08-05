# Theming with Tailwind Variants

Here we are using **Tailwind Variants with class and data attribute** to manage and apply custom themes.

### How It Works

* Add custom variants with your desired class names:

  ```css
  @custom-variant wine (&:where(.wine, .wine *));
  @custom-variant dark (&:where(.dark, .dark *));
  
  /* OR, (Use either one of these) */
  
  @custom-variant wine (&:where([data-theme=wine], [data-theme=wine] *));
  @custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
  ```
* Define the variables using prefix based variant names in the `@theme` directive:

```postcss
@theme {
  /* For Dark Prefix utility */
  --color-dark-background: #0a0a0a;
  --color-dark-foreground: #ffffff;
  --color-dark-hover: #1a1a1a;
  --color-dark-accent: #3b82f6;
  --color-dark-accent-foreground: #60a5fa;

  /* For Wine Prefix utility */
  --color-wine-background: #672b3c;
  --color-wine-foreground: #ffffff;
  --color-wine-hover: #b134573f;
  --color-wine-accent: #b13457;
  --color-wine-accent-foreground: #ffffff;
}

// Other variables
```

* Toggle theme classes on `<html>` or `<body>` with a theme switcher:

``` tsx
import React, { useState, useEffect } from "react";

export function ThemeSwitcher() {
const [theme, setTheme] = useState("dark");

useEffect(() => {
document.documentElement.className = theme;
}, [theme]);

return (
<button
onClick={() => setTheme(theme === "dark" ? "wine" : "dark")}
className="dark:bg-dark-background wine:bg-wine-background dark:text-dark-accent-foreground wine:text-wine-accent-foreground dark:hover:bg-dark-hover wine:hover:bg-wine-hover px-4 py-2 rounded"
>
Switch Theme
</button>
);
}
```

* Use variables in your components with those variants:

```tsx
import React from "react";

export function MyButton() {
  return <button className="dark:bg-dark-background wine:bg-wine-background dark:text-dark-accent-foreground wine:text-wine-accent-foreground dark:hover:bg-dark-hover wine:hover:bg-wine-hover">Click Me</button>;
}
```
```tsx
<html class="dark">
  <body>
    <MyButton/> {/* MyButton will apply styles based on class flare */}
  </body>
</html>
```

## Pros
1. Simple to Implement
    * You just add variants like dark:bg-black or theme-ocean:text-blue-400 directly in your class list.
2. No Extra CSS Needed
   * Everything stays within Tailwind utilities, avoiding manual CSS overrides.
3. Fine-Grained Control
    * You can theme only the parts of a component that need it (e.g., dark:border-white but keep border-red-500).

## Cons
1. ClassName Bloat
   * Adding multiple themes (dark:bg-black theme-ocean:bg-blue-900 theme-sunset:bg-orange-700) can make your class 
     strings long and messy.
2. No Extra CSS Needed
   * Everything stays within Tailwind utilities, avoiding manual CSS overrides.
3. Harder Maintenance
   * If you add a new theme later, you must update every component with new variant classes.
4. No Centralized Control
   * Variants scatter theme logic across many files instead of keeping theme colors in one config or CSS variable 
     system.

---
