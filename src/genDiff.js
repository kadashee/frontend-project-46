import buildDiff from './buildDiff.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';

const genDiff = (obj1, obj2, format = 'stylish') => {
    const formatters = {
        stylish,
        plain,
        json,
    };

    if (!formatters[format]) {
        throw new Error(`Unsupported format: ${format}`);
    }

    const diffTree = buildDiff(obj1, obj2);
    const formatter = formatters[format];
    return formatter(diffTree);
};

export default genDiff;