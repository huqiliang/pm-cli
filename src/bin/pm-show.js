#!/usr/bin/env node

import _ from "lodash";
import Table from "cli-table";
import chalk from "chalk";
import file from "../modules/file";

file.readStorage().then(data => {
  const project = _.find(data, { id: _.parseInt(process.argv[2]) });
  if (project) {
    var table = new Table({
      head: ["key", "value"]
    });

    _.map(project, (val, key) => {
      table.push({ [key]: val });
    });
    console.log(table.toString());
  } else {
    console.log(chalk.yellow("暂无项目信息"));
  }
});
