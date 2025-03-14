import path from 'path';
import fs from 'fs';
import compareObjects from './compare-objects.js';
import format from './formatters/index.js';
import parse from './parser.js';

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => parse(readFile(filepath), getFileFormat(filepath));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const result = compareObjects(data1, data2);
  return format(result, formatName);
};

export default genDiff;
