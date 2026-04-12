import z from "zod";
import { RecipeInfo } from "./RecipeInfo";

export interface Recipe {
  info: RecipeInfo;
  content: Record<string, any>[];
}
