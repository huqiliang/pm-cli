#!/usr/bin/env node

import program from "commander";
import _ from "lodash";
import git from "../modules/git";

const args = program.args;
program
  .usage("<dir-name>")
  .option("-c, --clone", "use git clone")
  .option("--offline", "use cached template");
console.log("====================================");
console.log(program.args);
console.log("====================================");
if (_.isEmpty(args)) {
  program.help();
} else {
  git.clone(args);
}
