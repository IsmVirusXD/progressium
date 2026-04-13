import { yamlGetAll } from "./functions/yamlHandler";
import { Recipe } from "./interfaces/Recipe";
import { RecipeInfo, RecipeInfoSchema } from "./schema/RecipeInfoSchema";

export function getAllYamlInfo(): RecipeInfo[] | null {
  try {
    const yamlContent = yamlGetAll();

    if (yamlContent.length === 0) {
      console.error(`Error: Não ha nenhum arquivo yaml no diretório`);
      return null;
    }

    const allInfos = yamlContent
      .map((file: any) => {
        try {
          const doc: RecipeInfo = RecipeInfoSchema.parse(file.info);
          return doc;
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
