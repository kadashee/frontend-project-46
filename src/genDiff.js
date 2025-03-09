import buildDiff from './buildDiff.js';
import formatStylish from './formatters/stylish.js';
import formatPlain from './formatters/plain.js';

const formatters = {
    stylish: formatStylish,
    plain: formatPlain,
};

const genDiff = (obj1, obj2, format = 'stylish') => {
    const diffTree = buildDiff(obj1, obj2);
    const formatter = formatters[format];
    return formatter(diffTree);
};

export default genDiff;