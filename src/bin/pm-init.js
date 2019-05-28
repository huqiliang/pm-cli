#!/usr/bin/env node

import program from "commander";
import _ from "lodash";
import git from "../modules/git";

const args = program.args;

if (_.isEmpty(args)) {
  program.help();
} else {
  git.clone(args);
}
