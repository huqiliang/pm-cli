import shell from "shelljs";

const buildShell = "npm run build ";
const lintShell = "npm run lint ";
const pwd = process.cwd();
const zipShell = `tar -zcvPf dist.tar.gz  dist`;

shell.cd(pwd);
shell.exec(zipShell, code => {
  if (code == 0) {
    console.log(code);
  }
});
