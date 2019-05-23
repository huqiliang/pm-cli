#!/usr/bin/env node

import express from "express";
import proxy from "http-proxy-middleware";
import { exists } from "fs";
import path from "path";
import chalk from "chalk";
import _ from "lodash";

const app = express();
const vueConfig = path.join(process.cwd(), "../vue.config.js");
exists(vueConfig, exists => {
  if (exists) {
    const config = require(vueConfig);
    _.map(config.devServer.proxy, (options, key) => {
      app.use(key, proxy(_.merge({ logLevel: "error" }, options)));
    });
  } else {
    console.log(chalk.yellow("未设置vue.config.js,请确认!"));
  }
});

app.use("/", express.static(process.cwd()));
app.listen(3000, () => console.log("请打开 http://localhost:3000 查看!"));
