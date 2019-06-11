import shell from "shelljs";

shell.exec("npm run build", code => {
  if (code == 0) {
    console.log("打包完成");
  }
});
