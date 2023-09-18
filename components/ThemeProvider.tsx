"use client";

import * as React from "react";
import {ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }
    :ThemeProviderProps) {
        return <NextThemesProvider { ...props}>
            <div className="dark:bg-black-800 dark:text-gray-200 text-gray-700 transition-colors 
      duration-700 min-h-screen select-none">
            {children}
            </div>
        </NextThemesProvider>
    }
