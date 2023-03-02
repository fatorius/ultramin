import { readFileSync, writeFileSync } from "fs";
import DomParser from "dom-parser";
import chalk from "chalk";

var parser = new DomParser();
chalk.level = 1;

const log = console.log;

const ENTRY_FILE_ADRESS = process.argv[2];

if (ENTRY_FILE_ADRESS === undefined){
    log(chalk.yellow("Erro: Nenhum arquivo de entrada especificado"));
    log(chalk.yellow("Por favor, use: npm run ultramin [index.html]"));
    process.exit();
}

var entry_file = readFileSync(ENTRY_FILE_ADRESS).toString();

var html = parser.parseFromString(entry_file).getElementsByTagName("html")[0].innerHTML;

console.log(html);