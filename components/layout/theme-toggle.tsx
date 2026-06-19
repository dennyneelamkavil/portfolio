"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themes = [
  {
    value: "light",
    icon: Sun,
    label: "Light",
  },
  {
    value: "system",
    icon: Monitor,
    label: "System",
  },
  {
    value: "dark",
    icon: Moon,
    label: "Dark",
  },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1 shadow-sm">
      {themes.map(({ value, icon: Icon, label }) => (
        <Button
          key={value}
          variant="ghost"
          size="icon"
          onClick={() => setTheme(value)}
          className={cn(
            "h-9 w-9 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer",
            "text-muted-foreground hover:text-foreground",
            mounted &&
              theme === value &&
              "bg-primary text-primary-foreground ring-1 ring-primary/20 shadow-md scale-105",
          )}
          aria-label={`Switch to ${label} theme`}
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}
