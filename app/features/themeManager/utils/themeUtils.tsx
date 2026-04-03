import { mapTheme, Theme } from "../maps/mapTheme";
import { ThemeTokens } from "../../../styles/theme/themeTokens";

export const hasTheme = (name: string): name is Theme => {
  return name in mapTheme;
};

export const getAllTheme = () => Object.values(mapTheme);

export const getTheme = (name?: string): ThemeTokens => {
  if (name && hasTheme(name)) return mapTheme[name];
  return mapTheme.default;
};

export const getThemeNames = () => Object.keys(mapTheme) as Theme[];
