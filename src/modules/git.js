import program from "commander";
import CLI from "clui";
import shell from "shelljs";
const Spinner = CLI.Spinner;
program
  .version("1.0.1")
  .usage("app_name")
  .description("构建hapi模板")
  .parse(process.argv);

if (!program.args.length) {
  program.help();
}
if (program.args.length === 1) {
  shell.mkdir("-p", program.args[0]);
  shell.cd(program.args[0]);
  shell.exec("git init");

  const status = new Spinner("正在下载 请稍候...");
  status.start();

  shell.exec("git pull git@github.com:huqiliang/gc_iview.git", code => {
    if (code !== 0) {
      console.log("Error! Try again");
      shell.exit(1);
    }
    console.log("====================================");
    console.log(code);
    console.log("====================================");
    status.stop();
    console.log("👏 👏 Completed! You are  good to go! 👏 👏");
  });
}
