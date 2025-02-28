import _ from 'lodash';

const genDiff = (obj1, obj2) => {
    const keys = _.union(Object.keys(obj1), Object.keys(obj2));
    const sortedKeys = _.sortBy(keys);

    const diff = sortedKeys.map((key) => {
        if (!Object.hasOwnProperty.call(obj2, key)) {
            return `  - ${key}: ${obj1[key]}`;
        }
        if (!Object.hasOwnProperty.call(obj1, key)) {
            return `  + ${key}: ${obj2[key]}`;
        }
        if (obj1[key] !== obj2[key]) {
            return `  - ${key}: ${obj1[key]}\n + ${key}: ${obj2[key]}`;
        }
        return ` ${key}: ${obj1[key]}`;
    });
    return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;