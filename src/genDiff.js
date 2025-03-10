import buildDiff from './buildDiff.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';
import parseFile from './file-parser.js';

const genDiff = (obj1, obj2, format = 'stylish') => {
    const formatters = {
        stylish,
        plain,
        json,
    };

    if (!formatters[format]) {
        throw new Error(`Unsupported format: ${format}`);
    }

    const parsedObj1 = typeof obj1 === 'string' ? parseFile(obj1) : obj1;
    const parsedObj2 = typeof obj2 === 'string' ? parseFile(obj2) : obj2;

    const diffTree = buildDiff(parsedObj1, parsedObj2);
    const formatter = formatters[format];
    return formatter(diffTree);
};

export default genDiff;