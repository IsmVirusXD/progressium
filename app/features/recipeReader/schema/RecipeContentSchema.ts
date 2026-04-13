import z from "zod";

export const ContentBlockSchema = z
  .record(z.string(), z.object())
  .refine((block) => Object.keys(block).length === 1, {
    message:
      "RecipeReader[Schema]: Componente dentro do Content deve haver apenas 1 Configuração",
  });

export const RecipeContentSchema = z.union([
  z.array(ContentBlockSchema),
  z.record(z.string(), z.array(ContentBlockSchema)),
]);

export type ContentBlock = z.infer<typeof ContentBlockSchema>;
export type RecipeContent = z.infer<typeof RecipeContentSchema>;
