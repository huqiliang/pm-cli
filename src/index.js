import chalk from "chalk";
import figlet from "figlet";
import clear from "clear";

import file from "./modules/file";

clear();
console.log(
  chalk.yellow(figlet.textSync("Welcome", { horizontalLayout: "full" }))
);
console.log("====================================");
console.log(file.getCurrentDirectoryBase());
console.log("====================================");
