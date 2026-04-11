import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { YAML_DATA_DIR } from "../constants";

export function getAllRecipeInfo() {
  const dir = YAML_DATA_DIR;

  try {
    const files = fs.readdirSync(dir);

    const allInfos = files
      .filter((file) => file.endsWith(".yml") || file.endsWith(".yaml"))
      .map((file) => {
        try {
          const filePath = path.join(dir, file);
          const fileContents = fs.readFileSync(filePath, "utf8");

          const doc = yaml.load(fileContents) as any;

          if (!doc || !doc.info) {
            console.warn(
              `Warning: O Arquivo "${file}" for ignorado por não possuir a estrutura 'info'`,
            );
          }

          return doc.info;
        } catch (error) {
          console.error(
            `Error: Falha ao carregar o conteúdo de "${file}". Pulando arquivo...`,
            error,
          );
          return null;
        }
      })
      .filter((item) => item != null);

    return allInfos;
  } catch (globalError) {
    console.error("Erro Critico: Ao Acessar a apasta de Arquivos", globalError);
    return [];
  }
}
