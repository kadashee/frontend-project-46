import _ from 'lodash';

const stringify = (value) => {
  if (!_.isObject(value)) {
    if (value === null) {
      return 'null';
    }
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    return String(value);
  }
  return '[complex value]';
};

const formatPlain = (data, ancestry = '') => {
  const formatNode = (node) => {
    const path = ancestry ? `${ancestry}.${node.key}` : node.key;

    switch (node.type) {
      case 'nested':
        return formatPlain(node.children, path);
      case 'added':
        return `Property '${path}' was added with value: ${stringify(node.value)}`;
      case 'deleted':
        return `Property '${path}' was removed`;
      case 'changed':
        return `Property '${path}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      default:
        return '';
    }
  };

  return data
    .filter((node) => node.type !== 'unchanged')
    .map(formatNode)
    .join('\n');
};

export default formatPlain;
