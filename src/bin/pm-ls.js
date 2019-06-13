#!/usr/bin/env node

import _ from "lodash";
import Table from "cli-table";
import chalk from "chalk";
import file from "../modules/file";

file.readStorage().then(data => {
  if (data.length > 0) {
    const head = ["id", "title", "ppmp_token", "yapi_token", "tapd_url"];
    var table = new Table({
      head
    });
    _.map(data, (val, key) => {
      var array = [];
      _.map(head, val2 => {
        array.push(val[val2]);
      });
      table.push(array);
    });

    console.log(table.toString());
  } else {
    console.log(chalk.yellow("项目列表为空"));
  }
});
