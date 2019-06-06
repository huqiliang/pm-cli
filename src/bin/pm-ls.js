#!/usr/bin/env node

import jsonfile from "jsonfile";
import path from "path";
import _ from "lodash";
import Table from "cli-table";

const json = path.join(__dirname, "../storage.json");
jsonfile.readFile(json, (err, data) => {
  if (data.length > 0) {
    const head = ["id", "title", "ppmp-token", "yapi-token", "jenkins-name"];
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
    console.log("暂无项目信息");
  }
});
