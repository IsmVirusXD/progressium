import z from "zod";
import { RecipeContentSchema } from "./RecipeContentSchema";
import { RecipeInfoSchema } from "./RecipeInfoSchema";

export const RecipeSchema = z.object({
  info: RecipeInfoSchema,
  content: RecipeContentSchema,
});

export type Recipe = z.infer<typeof RecipeSchema>;
