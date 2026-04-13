import { readYamlFile } from "../functions/yamlHandler";
import { Recipe } from "../interfaces/Recipe";
import { RecipeSchema } from "../schema/RecipeSchema";

export function parseRecipe(fileId: string) {
  const data = readYamlFile(fileId);

  try {
    const recipe: Recipe = RecipeSchema.parse(data);
    return recipe;
  } catch (error) {
    console.error(
      `RecipeReader[ParseRecipe]: ${fileId} is not on in the correct format`,
      error,
    );
    return null;
  }
}
