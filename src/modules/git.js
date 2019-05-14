import ora from "ora";
import shell from "shelljs";
import download from "download-git-repo";
const spinner = ora("downloading template");

const clone = args => {
  const temp = args[0];
  spinner.start();
  download("huqiliang/download_test", temp, { clone: false }, err => {
    if (!err) {
      spinner.stop();
      console.log("👏 👏 下载完成! 可以开始写代码了! 👏 👏");
    } else {
      console.log(err);
    }
  });
};
const mkdirAndInit = () => {
  shell.mkdir("-p", args[0]);
  shell.cd(args[0]);
  shell.exec("git init");
};
export default {
  clone,
  mkdirAndInit
};
