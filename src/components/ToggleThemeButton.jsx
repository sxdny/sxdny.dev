import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function ToggleThemeButton() {
  const [darkMode, setDarkMode] = useState("light");

  useEffect(() => {
    // Verificar si estamos en un entorno de navegador
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setDarkMode(savedTheme);
      }
    }
  }, []);

  const handleTheme = () => {
    const newTheme = darkMode === "light" ? "dark" : "light";
    setDarkMode(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Button onClick={handleTheme}>
      {darkMode === "light" ? "Dark" : "Light"}
    </Button>
  );
}
