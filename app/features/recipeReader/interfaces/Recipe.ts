import { RecipeInfo } from "./RecipeInfo";

export interface Recipe {
  info: RecipeInfo;
  content: Record<string, any>[];
}
