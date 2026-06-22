"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function Providers({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sachin-theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("sachin-theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  if (!mounted) {
    return <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>{children}</ThemeContext.Provider>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
