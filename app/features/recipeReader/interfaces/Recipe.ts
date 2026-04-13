import { RecipeContent } from "../schema/RecipeContentSchema";
import { RecipeInfo } from "../schema/RecipeInfoSchema";

export interface Recipe {
  info: RecipeInfo;
  content: RecipeContent;
}
