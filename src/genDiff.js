import buildDiff from './buildDiff.js';
import formatStylish from './formatters/stylish.js';
import formatPlain from './formatters/plain.js';
import formatJson from './formatters/json.js';

const formatters = {
    stylish: formatStylish,
    plain: formatPlain,
    json: formatJson,
};

const genDiff = (obj1, obj2, format = 'stylish') => {
    if (!formatters[format]) {
        throw new Error(`Unsupported format: ${format}`);
    }

    const diffTree = buildDiff(obj1, obj2);
    const formatter = formatters[format];
    return formatter(diffTree);
};

export default genDiff;