'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: () => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children, ...props }: { children: React.ReactNode; attribute?: string; defaultTheme: 'light' | 'dark'; }) {
  const [theme, setTheme] = useState(() => {
    // Try to get from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme as 'light' | 'dark';
    }
    // If not, check system preference
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return props.defaultTheme || 'light';
  });

  useEffect(() => {
    // Set the class on the html element
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    setTheme: toggleTheme,
    // We don't have resolvedTheme from next-themes, but we can provide the current theme
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