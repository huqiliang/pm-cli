#!/usr/bin/env node

import program from "commander";
import _ from "lodash";
import fs from "fs";
import file from "../modules/file";
import inquirer from "inquirer";
// import git from "../modules/git";

const args = program.args;
// console.log("====================================");
// console.log(process.cwd());
// console.log("====================================");
// console.log(file.directoryExists(process.cwd()));
// if (_.isEmpty(args)) {
//   program.help();
// } else {
//   git.clone(args);
// }
async function init(path) {
  console.log("====================================");
  console.log("====================================");
  if (file.directoryExists(path)) {
    const a = await inquirer.prompt([
      {
        type: "confirm",
        name: "toBeDelivered",
        message: "存在目录，是否覆盖?",
        default: false
      }
    ]);
    // .then(function(answers) {
    //   console.log("====================================");
    //   console.log(answers);
    //   console.log("====================================");
    // });
    console.log(a);
  } else {
  }
}
init(process.cwd());
