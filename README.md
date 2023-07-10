# Yaml Template Engine

This package can be used to generate Yaml files from Yaml templates written in EJS format.

## Installation

```sh
$ npm install --save-dev yaml-template-engine
```

## How to use

```
$ node_modules/.bin/yte -h

Usage: yte [options]

Options:
  -t, --template-file <file>  template yaml file path (default: "template.yaml")
  -o, --output-file <file>    output yaml file path (default: "output.yaml")
  -d, --data-file             data yaml file path. If this is empty, environmental variables are used.
  -v, --verbose               verbose
  -h, --help                  display help for command
```

You can write a yaml template in [EJS format](https://ejs.co/)

```
$ export HTTP_PROXY=http://example.com:8080
$ cat sample-template.yaml
sample:
  proxy: "<%= HTTP_PROXY %>"

$ node_modules/.bin/yte -t sample-template.yaml
$ cat output.yaml
sample:
  proxy: "http://example.com:8080"

```
