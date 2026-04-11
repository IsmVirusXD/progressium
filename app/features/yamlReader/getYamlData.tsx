import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml'


export function getYamlData(fileName: string) {
  const filePath = path.join(process.cwd(), 'data', fileName);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
  } catch(e) {
    console.error(`Error ao carregar o arquivo YAML (${fileName})`,e);
    return null;
  }
}