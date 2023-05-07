import React, { createContext } from 'react';

export const ThemeContext = createContext<string | null>(null);

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
  theme: string;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
