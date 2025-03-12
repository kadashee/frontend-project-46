import buildDiff from './build-diff.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';
import parse from './file-parser.js';
import { readFile, getFileFormat } from './file-reader.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const formatters = {
    stylish,
    plain,
    json,
  };

  if (!formatters[formatName]) {
    throw new Error(`Unsupported format: ${formatName}`);
  }

  const getData = (filepath) => {
    const content = readFile(filepath);
    const format = getFileFormat(filepath);
    return parse(content, format);
  };

  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const diffTree = buildDiff(data1, data2);
  return formatters[formatName](diffTree);
};

export default genDiff;
