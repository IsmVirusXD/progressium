import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { Recipe } from "../schema/RecipeSchema";

export const YAML_DATA_DIR = path.join(process.cwd(), "data");

export function yamlParse(content: string): string | unknown {
  return yaml.load(content);
}

export function yamlGetOne(fileName: string) {
  const filePath = path.join(YAML_DATA_DIR, fileName);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yamlParse(fileContents);
  } catch (e) {
    console.error(`Error ao carregar o arquivo YAML (${fileName})`, e);
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
          console.error(
            `Error: Falha ao carregar o conteúdo de "${file}". Pulando arquivo...`,
            error,
          );
          return null;
        }
      })
      .filter((file: any) => file !== null);

    if (allFiles.length === 0) {
      console.error(`Não há arquivos no Repositório`);
      return [];
    }
    return allFiles;
  } catch (globalError) {
    console.error(
      "Erro Critico: Ao Acessar a a pasta de Arquivos",
      globalError,
    );
    return [];
  }
}
