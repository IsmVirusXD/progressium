import { createContext } from "react";
import { mapTheme } from "./maps/mapTheme";
import { ThemeTokens } from "../../styles/theme/themeTokens";

type ThemeContextValue = {
  usingTheme: ThemeTokens;
  changeTheme: (newTheme: string) => void;
  mapTheme: typeof mapTheme;
};

export const ThemeContext = createContext<ThemeContextValue>({
  usingTheme: mapTheme.default,
  changeTheme: () => {},
  mapTheme,
});
