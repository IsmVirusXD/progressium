import { Playpen_Sans } from "next/font/google";

export const fontRegistry = {
  playpen: Playpen_Sans({
    variable: "--font-playpen",
    weight: ["200", "400", "600"],
    subsets: ["latin"],
  }),
};
