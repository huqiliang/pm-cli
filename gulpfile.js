var gulp = require("gulp");
var watch = require("gulp-watch");
var plumber = require("gulp-plumber");
var babel = require("gulp-babel");
var minify = require("gulp-minify");
var source = "src/**/*.js";
var watcher = watch(source, ["uglify", "reload"]);

const build = () => {
  gulp
    .src(source)
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
    .pipe(gulp.dest("build"));
};
gulp.task("default", () => {
  watcher.on("change", event => {
    console.log("文件路径:" + event);
    build();
  });
});

gulp.task("product", async done => {
  await build();
  setTimeout(() => {
    process.exit();
  }, 0);
});
