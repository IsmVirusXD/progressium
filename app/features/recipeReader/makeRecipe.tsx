import { error } from "console";
import { Recipe } from "./interfaces/Recipe";
import { RecipeSchema } from "./interfaces/RecipeSchema";
import { yamlGetOne } from "./functions/yamlHandler";

export function makeRecipe(fileId: string): Recipe | undefined {
  const data = yamlGetOne(fileId);

  try {
    const recipe: Recipe = RecipeSchema.parse(data);
    return recipe;
  } catch (error) {
    console.error(
      `A Receita: ${fileId} não se encontra nos padrões esperados`,
      error,
    );
    return undefined;
  }
}
