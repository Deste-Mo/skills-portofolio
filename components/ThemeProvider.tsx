'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: () => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children, ...props }: { children: React.ReactNode; attribute?: string; defaultTheme: 'light' | 'dark'; }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(props.defaultTheme || 'light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(initial);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value: ThemeContextType = {
    theme,
    setTheme: toggleTheme,
    resolvedTheme: theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}