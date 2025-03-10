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

const plain = (diff, ancestry = '') => {
  const formatNode = (node) => {
    const path = ancestry ? `${ancestry}.${node.key}` : node.key;

    switch (node.type) {
      case 'nested':
        return plain(node.children, path);
      case 'added':
        return `Property '${path}' was added with value: ${stringify(node.value)}`;
      case 'deleted':
        return `Property '${path}' was removed`;
      case 'changed':
        return `Property '${path}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`;
      default:
        return '';
    }
  };

  return diff
    .filter((node) => node.type !== 'unchanged')
    .map(formatNode)
    .join('\n');
};

export default plain;
