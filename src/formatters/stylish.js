import _ from 'lodash';

const stringify = (value, depth) => {
    if (!_.isObject(value) || value === null) {
        if (value === null) {
            return 'null'
        }
        if (typeof value === 'string') {
            return value;
        }
        return String(value);
    }

    const spacesCount = 4;
    const indent = ' '.repeat(depth * spacesCount);
    const bracketIndent = ' '.repeat((depth - 1) * spacesCount);

    const lines = Object.entries(value).map(
        ([key, val]) => `${indent}${key}: ${stringify(val, depth + 1)}`
    );

    return `{\n${lines.join('\n')}\n${bracketIndent}}`;
}

const formatStylish = (diff, depth = 1) => {
    const spacesCount = 4;
    const indent = ' '.repeat((depth - 1) * spacesCount);

    const lines = diff.map((node) => {
        const { key, type } = node;

        switch (type) {
            case 'nested':
                return `${indent}    ${key}: ${formatStylish(node.children, depth + 1)}`;
            case 'unchanged':
                return `${indent}    ${key}: ${stringify(node.value, depth + 1)}`;
            case 'deleted':
                return `${indent}  - ${key}: ${stringify(node.value, depth + 1)}`;
            case 'added':
                return `${indent}  + ${key}: ${stringify(node.value, depth + 1)}`;
            case 'changed':
                return [
                    `${indent}  - ${key}: ${stringify(node.oldValue, depth + 1)}`,
                    `${indent}  + ${key}: ${stringify(node.newValue, depth + 1)}`
                  ].join('\n')
            default:
                throw new Error(`Неизвестный тип узла: ${type}`);
        }
    });
    return `{\n${lines.join('\n')}\n${indent}}`;
}

export default formatStylish;