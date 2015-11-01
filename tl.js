#!/usr/bin/env node

var script = process.argv[1];
var args = process.argv.slice(2);
var cmd = args.length == 0 ? "h" : args[0];
GLOBAL.HOME=__dirname;

var v = require("./lib/verb");

GLOBAL.ROOT_DIR = __dirname;

switch(cmd) {
    case "g":
        v.generate(); 
        break;
    case "d": 
        v.deploy(); 
        break;
    case "h": 
        var helpArr = [
            "Usage: " + script + " <option>",
            "<option> can be:",
            "g: generate json event to html",
            "d: deploy html to gh-pages",
            "h: print help message. It's me ^_^"
        ];
        console.log(helpArr.join("\n"));
        break;

}