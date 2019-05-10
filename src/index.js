import chalk from "chalk";
import figlet from "figlet";
import clear from "clear";
import file from "./modules/file";
import git from "./modules/git";

clear();
console.log(
  chalk.yellow(figlet.textSync("GC-FE", { horizontalLayout: "full" }))
);
// console.log("====================================");
// console.log(file.getCurrentDirectoryBase());
// console.log("====================================");
