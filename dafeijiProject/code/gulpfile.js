
//gulp对象
//var gulp = require("gulp");		//获得gulp对象
//gulp.src("*.html")	 //设置处理文件的位置
//.pipe(gulp.dest('dest/mydate/'));		//设置文件处理后的存储目录

//var obj = {
//	minifyJS: true, //压缩JS
//	minifyCSS: true //压缩 css
//}
//task():定义任务
var gulp = require("gulp");
var babel = require('gulp-babel'); //es6转es5
var htmlmin = require("gulp-uglify");
gulp.task('htmlTask', function(){
gulp.src('js/*.js')
.pipe(babel({presets:['es2015']})) //es6转es5
.pipe(htmlmin())
.pipe(gulp.dest('newProject'));
});
gulp.task('default', ['htmlTask']);











