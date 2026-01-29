import React, { useEffect, useState } from "react";
// Ganti lucide-react menjadi react-icons/io5
import { IoSunny, IoMoon } from "react-icons/io5";
import AOS from "aos";

export function ModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;

    if (isDark) {
      htmlElement.classList.remove("dark");
      htmlElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      htmlElement.classList.add("dark");
      htmlElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }

    // Memberi sedikit jeda agar DOM terupdate sebelum AOS menghitung ulang posisi
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle Dark Mode'
      className='relative flex items-center justify-center rounded-2xl p-2.5 bg-slate-100 dark:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-none group'
    >
      <div className='relative h-5 w-5 flex items-center justify-center overflow-hidden'>
        {/* Ikon Matahari */}
        <IoSunny
          className={`h-5 w-5 transition-all duration-500 ease-in-out ${
            isDark ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100 text-amber-500"
          }`}
        />

        {/* Ikon Bulan */}
        <IoMoon
          className={`absolute h-5 w-5 transition-all duration-500 ease-in-out ${
            isDark ? "translate-y-0 opacity-100 text-indigo-400" : "-translate-y-10 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
