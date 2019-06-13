#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import program from "commander";
import packageInfo from "../../package.json";

program
  .version(packageInfo.version)
  .usage("<command> [options] \n\n " + chalk.yellow(figlet.textSync("GC - FE")))
  .command("init", "初始化项目")
  .command("ls", "查看项目列表")
  .command("show", "查看项目基础信息")
  .command("sync", "同步项目基础信息")
  .command("edit", "修改项目基础信息")
  .command("lint", "检测项目代码")
  .command("run", "启动本地查看")
  .command("build", "打包本地项目")
  .command("publish", "项目发布")
  .description("前端项目管理工具");
program.parse(process.argv);
