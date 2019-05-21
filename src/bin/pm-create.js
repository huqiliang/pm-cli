#!/usr/bin/env node

import program from "commander";
import _ from "lodash";
import git from "../modules/git";

const args = program.args;
console.log("====================================");
console.log(program.args);
console.log("====================================");
if (_.isEmpty(args)) {
  program.help();
} else {
  git.clone(args);
}
