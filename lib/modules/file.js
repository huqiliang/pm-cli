"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getCurrentDirectoryBase: function getCurrentDirectoryBase() {
    return _path2.default.basename(process.cwd());
  },

  directoryExists: function directoryExists(filePath) {
    try {
      return _fs2.default.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};