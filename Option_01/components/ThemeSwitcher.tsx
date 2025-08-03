import { useState, useEffect } from "react";
import {Sun, Moon, Flower,} from "lucide-react";

export default function ThemeSwitcher() {
    const [activeTheme, setActiveTheme] = useState<"sunhaze"|"skyglow"|"flare">("skyglow");

    // Function to handle theme change
    const handleThemeChange = (theme: "sunhaze"|  "skyglow" | "flare") => {
        const htmlElement = document.documentElement;

        // Remove all theme classes
        htmlElement.classList.remove('sunhaze','flare', 'skyglow');
        // Add new theme class
        htmlElement.classList.add(theme);
        setActiveTheme(theme);
    };

    // Initialize theme state on component mount
    useEffect(() => {
        const htmlElement = document.documentElement;

        // Check which theme class exists on an HTML element
        if (htmlElement.classList.contains('flare')) {
            setActiveTheme('flare');
        } else if (htmlElement.classList.contains('skyglow')) {
            setActiveTheme('skyglow');
        }
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="flex flex-col items-center gap-1">
                {/* Sunhaze Theme Option */}
                <label className="cursor-pointer">
                    <input
                        type="radio"
                        name="theme"
                        value="sunhaze"
                        checked={activeTheme === 'sunhaze'}
                        onChange={(e) => handleThemeChange(e.target.value)}
                        className="sr-only"
                    />
                    <div className={`
            w-12 h-12 rounded-xl transition-all duration-200 
            flex items-center justify-center hover:scale-105 active:scale-95
            ${activeTheme === 'sunhaze'
                        ? 'bg-accent text-white shadow-yellow-200/25'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
          `}>
                        <Sun  className="w-5 h-5" />
                    </div>
                </label>
                {/* Flare Theme Option */}
                <label className="cursor-pointer">
                    <input
                        type="radio"
                        name="theme"
                        value="flare"
                        checked={activeTheme === 'flare'}
                        onChange={(e) => handleThemeChange(e.target.value)}
                        className="sr-only"
                    />
                    <div className={`
            w-12 h-12 rounded-xl transition-all duration-200 
            flex items-center justify-center hover:scale-105 active:scale-95
            ${activeTheme === 'flare'
                        ? 'bg-accent text-white shadow-blue-500/25'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
          `}>
                        <Flower  className="w-5 h-5" />
                    </div>
                </label>

                {/* Skyglow Theme Option */}
                <label className="cursor-pointer">
                    <input
                        type="radio"
                        name="theme"
                        value="skyglow"
                        checked={activeTheme === 'skyglow'}
                        onChange={(e) => handleThemeChange(e.target.value)}
                        className="sr-only"
                    />
                    <div className={`
            w-12 h-12 rounded-xl transition-all duration-200 
            flex items-center justify-center hover:scale-105 active:scale-95
            ${activeTheme === 'skyglow'
                        ? 'bg-accent text-white shadow-purple-500/25'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
          `}>
                        <Moon className="w-5 h-5" />
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