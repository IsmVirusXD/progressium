import { defaultTheme } from "../../../styles/theme/defaultTheme";
import { ThemeTokens } from "../../../styles/theme/themeTokens";

export const mapTheme: Record<string, ThemeTokens> = {
  default: defaultTheme,
} as const;

export type Theme = keyof typeof mapTheme;
