#!/usr/bin/env node

import _ from "lodash";
import Table from "cli-table";
import file from "../modules/file";

file.readStorage().then(data => {
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
