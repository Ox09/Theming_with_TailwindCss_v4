import { useState, useEffect } from "react";
import {  BowArrow, Cog } from "lucide-react";

const DATA_ATTR = "data-theme";

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<"dark" | "wine">("dark");

  // Function to handle theme change
  const handleThemeChange = (theme: typeof activeTheme) => {
    const htmlElement = document.documentElement;

    // Update with new class
    // htmlElement.className = theme;
    // Add/Update the data-theme attribute on the html
    htmlElement.setAttribute(DATA_ATTR, theme);
    setActiveTheme(theme);
  };

  // Initialize theme state on component mount and to the html
  useEffect(() => {
    const htmlElement = document.documentElement;

    if (!htmlElement.getAttribute(DATA_ATTR) === null) {
      htmlElement.setAttribute(DATA_ATTR, activeTheme);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col items-center gap-1">
        {/* Dark Theme Option */}
        <label className="cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={activeTheme === "dark"}
            onChange={(e) => handleThemeChange(e.target.value as typeof activeTheme)}
            className="sr-only"
          />
          <div
            className={`
            w-12 h-12 rounded-xl transition-all duration-200 
            flex items-center justify-center hover:scale-105 active:scale-95
            ${
              activeTheme === "dark"
                ? "bg-dark-accent text-white shadow-yellow-200/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }
          `}
          >
            <Cog className="w-5 h-5" />
          </div>
        </label>
        {/* Wine Theme Option */}
        <label className="cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="wine"
            checked={activeTheme === "wine"}
            onChange={(e) => handleThemeChange(e.target.value as typeof activeTheme)}
            className="sr-only"
          />
          <div
            className={`
            w-12 h-12 rounded-xl transition-all duration-200 
            flex items-center justify-center hover:scale-105 active:scale-95
            ${
              activeTheme === "wine"
                ? "bg-wine-accent text-white shadow-blue-500/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }
          `}
          >
            <BowArrow className="w-5 h-5" />
          </div>
        </label>


        {/* Active Theme Indicator */}

        <div className="bg-gray-900 text-white min-w-14 capitalize text-xs px-2 py-1 rounded-lg text-center mt-1">
          {activeTheme}
        </div>
      </div>
    </div>
  );
}
