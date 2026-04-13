import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { Recipe } from "../schema/RecipeSchema";

export const YAML_DATA_DIR = path.join(process.cwd(), "data");

export function yamlParse(content: string): string | unknown {
  try {
    return yaml.load(content);
  } catch (e) {
    console.error(`[YamlHandler]: Fail to parse (${content})`);
  }
}

export function yamlGetOne(fileName: string) {
  const filePath = path.join(YAML_DATA_DIR, fileName);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yamlParse(fileContents);
  } catch (e) {
    console.error(`[YamlHandler]: Failed to load YAML file (${fileName})`, e);
    return null;
  }
}

export function yamlGetAll() {
  try {
    const files = fs.readdirSync(YAML_DATA_DIR);
    const allFiles = files
      .filter((file) => file.endsWith(".yml") || file.endsWith(".yaml"))
      .map((file) => {
        try {
          const filePath = path.join(YAML_DATA_DIR, file);
          const fileContent = fs.readFileSync(filePath, "utf8");
          const doc = yamlParse(fileContent);
          return doc as Recipe;
        } catch (error) {
          console.warn(
            `RecipeReader[YamlHandler]: Failed to load content from "${file}". Skipping file...`,
            error,
          );
          return null;
        }
      })
      .filter((file: any) => file !== null);

    if (allFiles.length === 0) {
      console.error(`RecipeReader[YamlHandler]: No files on the directory`);
      return [];
    }
    return allFiles;
  } catch (globalError) {
    console.error(
      "RecipeReader[YamlHandler]: Critical error while accessing the files directory.",
      globalError,
    );
    return [];
  }
}
