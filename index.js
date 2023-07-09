#!/usr/bin/env node
const { program } = require("commander");
const ejs = require("ejs");
const yaml = require("yaml");
const fs = require("fs");

program
  .name("yte")
  .option(
    "-t, --template-file <file>",
    "template yaml file path",
    "template.yaml"
  )
  .option("-o, --output-file <file>", "output yaml file path", "output.yaml")
  .option(
    "-d, --data-file",
    "data yaml file path. If this is empty, environmental variables are used."
  )
  .option("-v, --verbose", "verbose");

program.parse(process.argv);
const options = program.opts();

const templateFilePath = options.templateFile;
const outputFilePath = options.outputFile;

const data = options.dataFile
  ? yaml.parse(fs.readdirSync(dataFile, "utf-8"))
  : process.env;

const templateFile = fs.readFileSync(templateFilePath, "utf-8");
const output = ejs.render(templateFile, data);

fs.writeFileSync(outputFilePath, output, "utf-8");

if (options.verbose) {
  console.log(output);
}
