var gulp = require("gulp");
var watch = require("gulp-watch");
var plumber = require("gulp-plumber");
var babel = require("gulp-babel");
var minify = require("gulp-minify");
var source = "src/**/*.js";
var watcher = watch(source, ["uglify", "reload"]);
const shell = require("gulp-shell");
const path = require("path");

const build = filePath => {
  const sourcePath = filePath ? filePath : source;
  const distPath = filePath
    ? path.dirname(filePath.replace("src", "build"))
    : "build";
  gulp
    .src(sourcePath)
    .pipe(plumber())
    .pipe(babel())
    .pipe(
      minify({
        ext: {
          min: [/(.*)\.js$/, "$1.js"]
        },
        noSource: true
      })
    )
    .pipe(gulp.dest(distPath));
  // .pipe(shell(["cd build", "npm link"]));
};
gulp.task("default", () => {
  build();
  watcher.on("change", event => {
    console.log("文件路径:" + event);
    build(event);
  });
});

gulp.task("product", async done => {
  await build();
  setTimeout(() => {
    process.exit();
  }, 0);
});
