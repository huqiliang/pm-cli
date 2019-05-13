import chalk from "chalk";
import figlet from "figlet";
import program from "commander";
import clear from "clear";
import git from "./modules/git";
import file from "./modules/file";

program
  .version("1.0.1")
  .action(function(dir, cmd) {
    console.log(
      chalk.yellow(figlet.textSync("GC-FE", { horizontalLayout: "full" }))
    );
  })
  .usage("pm")
  .description("构建vue模板")
  .parse(process.argv);
if (program.args.length == 0) {
  program.help();
} else {
  git(program.args);
}
