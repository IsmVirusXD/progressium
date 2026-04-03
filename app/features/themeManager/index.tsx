import { createContext, ReactNode, useState } from "react";
import { mapTheme, Theme } from "./maps/mapTheme";
import { ThemeTokens } from "./types/themeTokens";

interface ThemeManagerProps {
  children: ReactNode;
}

export const ThemeContext = createContext<any>(mapTheme["default"]);

function ThemeManager({ children }: ThemeManagerProps) {
  const [usingTheme, setUsingTheme] = useState<ThemeTokens>(
    mapTheme["default"],
  );

  const hasTheme = (name: string): name is Theme => {
    return name in mapTheme;
  };

  const getAllTheme = () => Object.values(mapTheme);

  const getTheme = (name?: string): ThemeTokens => {
    if (name && hasTheme(name)) return mapTheme[name];
    return mapTheme.default;
  };

  const changeTheme = (newTheme: string) => {
    setUsingTheme(getTheme(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ usingTheme, changeTheme, mapTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeManager;
