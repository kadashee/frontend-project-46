#!/usr/bin/env node
import { Command } from 'commander';
import parseFile from "../src/file-parser.js";
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference')
    .version('0.0.1')
    .helpOption('-h, --help', 'output usage information')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]', 'output format');

program.action((filepath1, filepath2, options) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    console.log(data1, data2);
});

program.parse()

export default program;