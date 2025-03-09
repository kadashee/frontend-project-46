import buildDiff from './buildDiff.js';
import formatStylish from './formatters/stylish.js';

const genDiff = (obj1, obj2) => {
    const diffTree = buildDiff(obj1, obj2);
    return formatStylish(diffTree);
};

export default genDiff;