import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/genDiff.js';
import parseFile from '../src/file-parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

test('сравнение JSON файлов', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expectedStylish = readFile('expected-stylish.txt');
  const obj1 = parseFile(filepath1);
  const obj2 = parseFile(filepath2);
  expect(genDiff(obj1, obj2)).toEqual(expectedStylish);
});

test('сравнение YAML файлов', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');
  const expectedStylish = readFile('expected-stylish.txt');
  const obj1 = parseFile(filepath1);
  const obj2 = parseFile(filepath2);
  expect(genDiff(obj1, obj2)).toEqual(expectedStylish);
});

test('genDiff with plain formatter', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');
  const expected = readFile('expected-plain.txt');
  const obj1 = parseFile(file1Path);
  const obj2 = parseFile(file2Path);

  expect(genDiff(obj1, obj2, 'plain')).toEqual(expected);
});

test('genDiff with json formatter', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');
  const expected = readFile('expected-json.txt');
  const obj1 = parseFile(file1Path);
  const obj2 = parseFile(file2Path);

  expect(genDiff(obj1, obj2, 'json')).toEqual(expected);
});
