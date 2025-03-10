#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from "../src/file-parser.js";
import genDiff from "../src/genDiff.js";
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference')
    .version('0.0.1')
    .helpOption('-h, --help', 'output usage information')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format (stylish, plain)', 'stylish');

program.action((filepath1, filepath2, options) => {
    const obj1 = parseFile(filepath1);
    const obj2 = parseFile(filepath2);

    console.log(genDiff(obj1, obj2, options.format));
});

export default program;