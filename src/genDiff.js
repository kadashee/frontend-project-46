import buildDiff from './buildDiff.js';
import formatters from './formatters/index.js';

const genDiff = (obj1, obj2, format = 'stylish') => {
    if (!formatters[format]) {
        throw new Error(`Unsupported format: ${format}`);
    }

    const diffTree = buildDiff(obj1, obj2);
    const formatter = formatters[format];
    return formatter(diffTree);
};

export default genDiff;