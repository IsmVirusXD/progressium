import { Theme } from "@/app/features/themeManager/types/themeTokens";
import { mapFont } from "../../features/themeManager/maps/mapFont";

export const defaultTheme: Theme = {
  //Colors

  //Typography
  "--font-body": mapFont.playpen,
  "--font-heading": mapFont.playpen,

  "--font-weight-regular": "200",
  "--font-weight-medium": "400",
  "--font-weight-bold": "600",
};
