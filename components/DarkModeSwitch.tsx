'use client'

import { SunIcon,MoonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
    const {systemTheme, theme,setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === "system" ? systemTheme :theme
         
  return (
    <>
    {mounted &&
                    <Button 
                    variant="ghost"
                    size="icon"
                    aria-label="Toggle theme"
                    className="mr-6"
                    onClick={() => setTheme(theme === "dark" ? "light": "dark")}
                    >
                    <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all
                    dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all
                    dark:-rotate-0 dark:scale-100" />
                    </Button>
    } 
    </>
  )
}
