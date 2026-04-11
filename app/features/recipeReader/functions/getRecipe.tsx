import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml'
import { YAML_DATA_DIR } from '../constants';


export function getYamlData(fileName: string) {
  const filePath = path.join(YAML_DATA_DIR, fileName);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
  } catch(e) {
    console.error(`Error ao carregar o arquivo YAML (${fileName})`,e);
    return null;
  }
}
