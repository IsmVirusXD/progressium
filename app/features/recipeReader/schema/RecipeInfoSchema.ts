import z from "zod";

export const RecipeInfoSchema = z.object({
  title: z.string(),
  author: z.string(),
  game: z.string(),
  console: z.string().length(3),
  mode: z.string().length(5),
  dlc: z.boolean().default(false),
});

export type RecipeInfo = z.infer<typeof RecipeInfoSchema>;
