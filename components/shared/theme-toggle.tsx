"use client";

import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">
        <Computer />
        <span>System</span>
      </option>
      <option value="light">
        <Sun />
        <span>Light</span>
      </option>
      <option value="dark">
        <Moon />
        <span>Dark</span>
      </option>
    </select>
  );
};
