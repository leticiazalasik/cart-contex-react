// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/app/ThemeContex";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors ml-5 mt-5 pt-4 pl-5 pb-4 pr-5"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
