import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return String(value);
};

const getPropertyPath = (propertyPath, key) => (propertyPath ? `${propertyPath}.${key}` : key);

const formatPlain = (data, propertyPath = '') => data
  .filter((node) => node.type !== 'unchanged')
  .map((node) => {
    const fullPropertyPath = getPropertyPath(propertyPath, node.key);

    switch (node.type) {
      case 'nested':
        return formatPlain(node.children, fullPropertyPath);
      case 'added':
        return `Property '${fullPropertyPath}' was added with value: ${stringify(node.value)}`;
      case 'deleted':
        return `Property '${fullPropertyPath}' was removed`;
      case 'changed':
        return `Property '${fullPropertyPath}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      default:
        return '';
    }
  })
  .join('\n');

export default formatPlain;
