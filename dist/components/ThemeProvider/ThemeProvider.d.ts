import React from 'react';
export declare const ThemeContext: React.Context<string | null>;
interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[];
    theme: string;
}
export declare const ThemeProvider: ({ children, theme }: ThemeProviderProps) => JSX.Element;
export {};
