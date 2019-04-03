"use strict";

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _figlet = require("figlet");

var _figlet2 = _interopRequireDefault(_figlet);

var _clear = require("clear");

var _clear2 = _interopRequireDefault(_clear);

var _file = require("./modules/file");

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _clear2.default)();
console.log(_chalk2.default.yellow(_figlet2.default.textSync("Welcome", { horizontalLayout: "full" })));
console.log("====================================");
console.log(_file2.default.getCurrentDirectoryBase());
console.log("====================================");