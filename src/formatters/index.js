import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const format = (data, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return formatStylish(data);
    case 'plain':
      return formatPlain(data);
    case 'json':
      return formatJson(data);
    default:
      throw new Error(`Unsupported format: ${formatName}`);
  }
};

export default format;
