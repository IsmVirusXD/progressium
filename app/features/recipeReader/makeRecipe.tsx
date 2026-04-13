import { Recipe } from "./interfaces/Recipe";
import { yamlGetOne } from "./functions/yamlHandler";
import { RecipeSchema } from "./schema/RecipeSchema";

export function makeRecipe(fileId: string) {
  const data = yamlGetOne(fileId);

  try {
    const recipe: Recipe = RecipeSchema.parse(data);
    return recipe;
  } catch (error) {
    console.error(
      `A Receita: ${fileId} não se encontra nos padrões esperados`,
      error,
    );
    return null;
  }
}
