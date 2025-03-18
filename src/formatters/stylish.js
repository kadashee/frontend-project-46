import _ from 'lodash';

const spacesCount = 4;

const getSpaces = (depth) => ' '.repeat(depth * spacesCount);
const getBracketSpaces = (depth) => getSpaces(depth - 1);

const stringify = (value, depth) => {
  if (!_.isObject(value) || value === null) {
    return String(value);
  }

  const indent = getSpaces(depth);
  const bracketIndent = getBracketSpaces(depth);

  const lines = Object.entries(value).map(
      ([key, val]) => `${indent}${key}: ${stringify(val, depth + 1)}`,
  );

  return `{\n${lines.join('\n')}\n${bracketIndent}}`;
};

const formatStylish = (data, depth = 1) => {
  const indent = getBracketSpaces(depth);

  const result = data.map((node) => {
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
          `${indent}  - ${key}: ${stringify(node.value1, depth + 1)}`,
          `${indent}  + ${key}: ${stringify(node.value2, depth + 1)}`,
        ].join('\n');
      default:
        throw new Error(`Unknown node type: ${type}`);
    }
  });
  return `{\n${result.join('\n')}\n${indent}}`;
};

export default formatStylish;
