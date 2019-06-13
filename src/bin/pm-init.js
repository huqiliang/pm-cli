#!/usr/bin/env node

import fs from "fs";
import path from "path";
import _ from "lodash";
import shell from "shelljs";
import inquirer from "inquirer";
import chalk from "chalk";
import axios from "axios";
import file from "../modules/file";
import config from "../lib/config";

const currentDir = process.cwd();
async function initDir(dir) {
  shell.cd(dir);
  fs.exists("package.json", function(exists) {
    if (exists) {
      shell.mv("package.json", "package_back.json");
    }
  });
  const json = await file.readStorage();
  const res = await inquirer.prompt([
    {
      type: "input",
      name: "ppmp_token",
      message: "请输入ppmp项目中的token:"
    }
  ]);
  const ppmp_token = res.ppmp_token;
  const isFind = _.find(json, ["ppmp_token", ppmp_token]);
  if (!isFind) {
    const res = await axios.get(
      `${config.PPMP_SERVER}/ppmp/findProductFromToken?token=${ppmp_token}`
    );
    if (res.data.code == 0) {
      const lastId = json.length + 1;
      const disk_address = path.join(currentDir, dir);
      json.push({
        id: lastId,
        disk_address,
        ...res.data.data
      });
      await file.saveStorage(json);
      shell.exec("pm show" + lastId);
    } else {
      console.log("");
      console.log(chalk.yellow.bold(res.data.message));
      console.log("");
    }
  } else {
    const address = chalk.red.bold(isFind.disk_address);
    console.log("");
    const res = await inquirer.prompt([
      {
        type: "list",
        name: "todoNext",
        choices: [
          "仍然在此初始化",
          "同步项目信息",
          "修改项目信息",
          "不操作退出"
        ],
        message: chalk.yellow(`在电脑 ${address} 位置已经存在项目,你想？`),
        default: false
      }
    ]);
    switch (res) {
      case "仍然在此初始化":
        //initDir(dir);
        break;
      case "同步项目信息":
        shell.exec(`pm sync ${isFind.id}`);
        break;
      case "修改项目信息":
        shell.exec(`pm edit ${isFind.id}`);
        break;
      default:
        break;
    }
  }
}
async function init() {
  shell.cd(currentDir);
  const dir = process.argv[2];
  if (dir) {
    const hasDir = file.directoryExists(dir);
    if (hasDir) {
      const res = await inquirer.prompt([
        {
          type: "confirm",
          name: "toBeDelivered",
          message: "存在目录，是否覆盖?",
          default: false
        }
      ]);
      if (res.toBeDelivered) {
        initDir(dir);
      }
    } else {
      shell.mkdir(dir);
      initDir(dir);
    }
  } else {
  }
}
init();
