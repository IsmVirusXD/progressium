import { ThemeTokens } from "@/app/styles/theme/themeTokens";
import { mapFont } from "../../features/themeManager/maps/mapFont";

export const defaultTheme: ThemeTokens = {
  //Colors
  "--theme-color-background": "#f8fafc",
  "--theme-color-surface": "#ffffff",
  "--theme-color-foreground": "#1a1a1a",
  "--theme-color-muted": "#64748b",
  "--theme-color-primary": "#1a4b8e",
  "--theme-color-secondary": "#d42027",

  //Typography
  "--theme-font-body": mapFont.playpen,
  "--theme-font-heading": mapFont.playpen,

  "--theme-font-weight-light": "200",
  "--theme-font-weight-medium": "400",
  "--theme-font-weight-bold": "600",
};
