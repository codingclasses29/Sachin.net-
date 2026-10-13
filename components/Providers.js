"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });
const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function Providers({ children }) {
  const [theme, setTheme] = useState("light");
  const [lang, setLangState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("sachin-theme") || "light";
    const savedLang = localStorage.getItem("sachin-lang") || "en";
    setTheme(savedTheme);
    setLangState(savedLang);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("sachin-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const setLang = (nextLang) => {
    setLangState(nextLang);
    try {
      localStorage.setItem("sachin-lang", nextLang);
    } catch {}
  };

  const toggleLang = () => {
    const next = lang === "en" ? "hi" : "en";
    setLang(next);
  };

  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {} }}>
        <LanguageContext.Provider value={{ lang: "en", setLang: () => {}, toggleLang: () => {} }}>
          {children}
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
