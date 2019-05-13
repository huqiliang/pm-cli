import ora from "ora";
const download = require("download-git-repo");
import shell from "shelljs";
const spinner = ora("downloading template");

const init = args => {
  // shell.mkdir("-p", args[0]);
  // shell.cd(args[0]);
  // shell.exec("git init");
  const temp = args[0];
  spinner.start();
  download("huqiliang/download_test", temp, { clone: false }, err => {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
    if (!err) {
      spinner.stop();
      console.log("👏 👏 下载完成! 可以开始写代码了! 👏 👏");
    } else {
      console.log(err);
    }
  });
};

export default init;
