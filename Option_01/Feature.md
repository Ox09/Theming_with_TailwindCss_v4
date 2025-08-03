# Theming with Tailwind Variants *Option 01*

Here we are using **Tailwind Variants with class** to manage and apply custom themes.

### How It Works

* Add custom variants with your desired class names:

  ```css
  @custom-variant skyglow (&:where(.skyglow, .skyglow));
  @custom-variant flare (&:where(.flare, .flare));
  ```
* Define the default global styles in `:root`:

```postcss
/* Default theme: skyglow */
:root {
    --background: #d2e5f3;
    --foreground: #1f2a37;
    --hover: #bfd8ed;
    --accent: #91bad6;
    --accent-foreground: #7ca8c8;
}
```

* Add other theme variables:

```postcss
.flare {
    --background: #fc1471;
    --foreground: #ffffff;
    --hover: #e01165;
    --accent: #ff4d94;
    --accent-foreground: #ffe3ed;
}
.sunhaze {
    --background: #fbf6cf;
    --foreground: #2e2a1f;
    --hover: #fce588;
    --accent: #f7c948;
    --accent-foreground: #fff3c4;
}

/* Other themes */
```

* Use *@theme inline {}* so variables update based on classes set on `<html>` or `<body>`:

```postcss
@theme inline {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-hover: var(--hover);
    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);
}
```

* Toggle theme classes on `<html>` or `<body>` with a theme switcher:

``` tsx
import React, { useState, useEffect } from "react";

export function ThemeSwitcher() {
const [theme, setTheme] = useState("skyglow");

useEffect(() => {
document.documentElement.className = theme;
}, [theme]);

return (
<button
onClick={() => setTheme(theme === "skyglow" ? "flare" : "skyglow")}
className="bg-background text-foreground hover:bg-accent px-4 py-2 rounded"
>
Switch Theme
</button>
);
}
```

* Use variables in your components:

```tsx
import React from "react";

export function MyButton() {
  return <button className="bg-background text-foreground hover:bg-accent">Click Me</button>;
}
```
```tsx
<html class="flare">
  <body>
    <MyButton/> {/* MyButton will apply styles based on class flare */}
  </body>
</html>
```

## Benefits

* Cleaner, more maintainable styling with a single source of truth.
* Consistent design across components.
* Simple theme switching with minimal code changes.

---

Using **Tailwind Variants with class**, you can easily set up and switch between custom themes in your app. Define default variables in `:root`, then add additional theme classes (e.g., `.flare`, `.sunhaze`) with their own values. With the `@theme inline` directive, these variables update automatically when you toggle theme classes on `<html>` or `<body>`.

This approach keeps your styles clean, consistent, and easy to maintain—allowing theme switching with minimal code changes.

---
