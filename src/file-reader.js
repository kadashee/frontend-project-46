import fs from 'fs';
import path from 'path';

const readFile = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

const getFileFormat = (filePath) => {
  const format = path.extname(filePath).slice(1);
  return format;
};

export { readFile, getFileFormat };
