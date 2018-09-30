#!/usr/bin/env node
var shell = require("shelljs");
let { task } = require('./test-task')
var path = require('path');
task.forEach((item) => {
    let file = path.resolve(__dirname, `./module/${item}.js`);
    shell.exec(`mocha ${file}`);
})