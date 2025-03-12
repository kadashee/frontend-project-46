import { test, expect, describe } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

// Читаем ожидаемые результаты до начала тестов
const expectedStylish = readFixture('expected-stylish.txt');
const expectedPlain = readFixture('expected-plain.txt');
const expectedJson = readFixture('expected-json.txt');

const formats = ['json', 'yml'];

describe('gendiff', () => {
  test.each(formats)('compare files with each supported format', (format) => {
    const filePath1 = getFixturePath(`file1.${format}`);
    const filePath2 = getFixturePath(`file2.${format}`);

    expect(genDiff(filePath1, filePath2)).toEqual(expectedStylish);
    expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
    expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedPlain);
    expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJson);
  });
});
