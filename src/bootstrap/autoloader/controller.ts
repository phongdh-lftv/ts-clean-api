import fs, { Dirent } from 'fs';
import path from 'path';

// controllers path
const controllerPath: string = `${__dirname}/../../presentation/json`;

// Helper: capitalize the first letter (optional, for naming)
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Helper: read dir
const readDirSync = (dir: string): Array<Dirent> =>
  fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory());

// Helper: import controller
const dynamicImport = async (dirs: Array<Dirent>) => {
  let controllers: any = {};

  for (let dir of dirs) {
    let filePath = path.join(controllerPath, dir.name, 'controller.ts');

    try {
      let module = await import(filePath);
      let controllerName = `${capitalize(dir.name)}Controller`;

      controllers[controllerName] = module[controllerName];
    } catch (error) {
      console.error(`Failed to load module from ${filePath}:`, error);
    }
  }

  return controllers;
}

// Register controllers
const registerController = async (rootDir: string) => {
  const dirs: Array<Dirent> = readDirSync(`${rootDir}/presentation/json`);

  return await dynamicImport(dirs);
};

export default registerController;
