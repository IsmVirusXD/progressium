import z from "zod";

export const RecipeSchema = z.object({
  info: z.object({
    title: z.string(),
    author: z.string(),
    game: z.string(),
    console: z.string().length(3),
    mode: z.string().length(5),
    dlc: z.boolean().default(false),
  }),

  content: z.array(
    z.object({
      key: z.string(),
      value: z.object(),
    }),
  ),
});
