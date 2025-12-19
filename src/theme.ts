export type Theme = "light" | "dark";

const THEME_DATA_ATTR = "theme";

export function getTheme(): Theme | null {
  if (typeof document === "undefined") return null;
  const value = document.documentElement.dataset[THEME_DATA_ATTR] as Theme | undefined;
  return value ?? null;
}

export function setTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  document.documentElement.dataset[THEME_DATA_ATTR] = theme;
}

export function toggleTheme(): Theme | null {
  if (typeof document === "undefined") return null;
  const current = getTheme() ?? "dark";
  const next: Theme = current === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}