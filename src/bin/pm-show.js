#!/usr/bin/env node

import _ from "lodash";
import Table from "cli-table";
import file from "../modules/file";

file.readStorage().then(data => {
  const project = _.find(data, { id: _.parseInt(process.argv[2]) });
  var table = new Table({
    head: ["key", "value"]
  });

  _.map(project, (val, key) => {
    table.push({ [key]: val });
  });
  console.log(table.toString());
});
