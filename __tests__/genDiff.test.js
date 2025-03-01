import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';
import parseFile from '../src/file-parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('genDiff compares 2 flat JSONs correctly', () => {
const file1 = parseFile(getFixturePath('file1.json'));
const file2 = parseFile(getFixturePath('file2.json'));

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
`;

expect(genDiff(file1, file2)).toBe(expected);

})