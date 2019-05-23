#!/usr/bin/env node
// import chalk from "chalk";
// import figlet from "figlet";
import program from "commander";
import packageInfo from "../../package.json";

program
  .version(packageInfo.version)
  .usage("<command> [options]")
  .command("create", "create a new project from a template")
  .command("add", "use eslint to lint a roject ")
  .command("lint", "use eslint to lint a roject ")
  .command("run", "run a server")
  .command("publish", "pushlish a project")
  .description("前端项目管理工具");

program.parse(process.argv);
