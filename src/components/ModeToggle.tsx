import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import AOS from "aos";

export function ModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sinkronisasi awal dengan class yang dipasang Layout.astro
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;

    if (isDark) {
      htmlElement.classList.remove("dark");
      htmlElement.style.colorScheme = "light"; // Memaksa browser update
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      htmlElement.classList.add("dark");
      htmlElement.style.colorScheme = "dark"; // Memaksa browser update
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  return (
    <button
      onClick={toggleTheme}
      className='relative flex items-center justify-center rounded-2xl p-2.5 bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-all duration-300 cursor-pointer border-none'
    >
      <div className='relative h-5 w-5 flex items-center justify-center'>
        <Sun
          className={`h-5 w-5 transition-all duration-500 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-orange-500"}`}
        />
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? "rotate-0 scale-100 opacity-100 text-blue-400" : "-rotate-90 scale-0 opacity-0"}`}
        />
      </div>
    </button>
  );
}
