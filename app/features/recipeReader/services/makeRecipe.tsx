import { yamlGetOne } from "../functions/yamlHandler";
import { Recipe } from "../interfaces/Recipe";
import { RecipeSchema } from "../schema/RecipeSchema";


export function makeRecipe(fileId: string) {
  const data = yamlGetOne(fileId);

  try {
    const recipe: Recipe = RecipeSchema.parse(data);
    return recipe;
  } catch (error) {
    console.error(
      `RecipeReader[MakeRecipe]: ${fileId} is not on in the correct format`,
      error,
    );
    return null;
  }
}
