import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage first, then system preference
        const stored = localStorage.getItem("theme");
        if (stored) {
            return stored === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    // Apply theme on initial load
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            document.documentElement.classList.add("dark");
        } else if (stored === "light") {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg
                 bg-gray-200 dark:bg-gray-800
                 text-gray-800 dark:text-gray-100
                 hover:scale-105 transition-all duration-300
                 border border-transparent hover:border-amber-600/30"
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}
