import { ThemeTokens } from "@/app/styles/theme/themeTokens";
import { mapFont } from "../../features/themeManager/maps/mapFont";

export const defaultTheme: ThemeTokens = {
  //Colors
  "--theme-color-background": "#f8fafc",
  "--theme-color-surface": "#ffffff",
  "--theme-color-foreground": "#0f172a",
  "--theme-color-muted": "#64748b",
  "--theme-color-primary": "#2563eb",

  //Typography
  "--theme-font-body": mapFont.playpen,
  "--theme-font-heading": mapFont.playpen,

  "--theme-font-weight-regular": "200",
  "--theme-font-weight-medium": "400",
  "--theme-font-weight-bold": "600",
};
