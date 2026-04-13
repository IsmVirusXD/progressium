import z from "zod";
import { ConsoleSchema } from "./ConsoleSchema";
import { ModeSchema } from "./ModeSchema";

export const RecipeInfoSchema = z.object({
  title: z.string(),
  author: z.string(),
  game: z.string(),
  console: ConsoleSchema,
  mode: ModeSchema,
  dlc: z.boolean().default(false),
});

export type RecipeInfo = z.infer<typeof RecipeInfoSchema>;
