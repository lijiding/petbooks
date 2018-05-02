var staticdir = ''
// 如果不适用本地服务器更改定义staticdir为非空项目目录即可 如当前目录'./';'e:/youproject/'
// 以下定义为proxy 本地启动服务器 动态页面设定
// 定义具体项目目录
var Products= '';
// define 本地开发目录
var baseserver		= 'localhost/petbooks/pet/',
 baseserver_dir 	= '/Users/chunhua/WorkSpace/petbooks/pet/',
 conf = {
	server:{
		static:staticdir,
		proxy:baseserver+Products,
		proxy_dir:baseserver_dir+Products
	}
}

// import require pulgin
	var gulp    = require('gulp');
	var bs		= require('browser-sync').create();
	var htmlInjector = require('bs-html-injector');

	// task
//init server
gulp.task('initserver',function(){
	conf.server.static !=""
	?
	bs.init({
		 server: {
            baseDir: conf.server.static
        }
    })
	:
	bs.init({
		proxy:conf.server.proxy
	})
})

// init work folder
	conf.server.static !=""
	?
	folder = conf.server.static
	:
	folder = conf.server.proxy_dir;


// watch css  js
gulp.task('watch',function(){
	conf.server.static !=""
	?
	folder = conf.server.static
	:
	folder = conf.server.proxy_dir;
	// var date = new Date();
	// gulp.watch(folder+'**/*.html',htmlInjector);
	// gulp.watch(folder+'**/*.html',function (event) {
	// 	console.log("File →"+event.path+"← changed,watching....")

	// 	// console.log(Date.getDate())
	// 	return gulp.src(event.path)
	// 		.pipe(bs.reload({stream:true}));
	// 		bs.use(require('bs-html-injector'),{

	// 		})
	// });

	gulp.watch(folder+'**/*.css',function (event) {
		console.log("File →"+event.path+"← changed,watching....")
		return gulp.src(event.path)
			.pipe(bs.reload({stream:true}));
	});

	gulp.watch(folder+'**/*.js',function(event){
		console.log("File →"+event.path+"← changed,watching....")
		return gulp.src(event.path)
			.pipe(bs.reload({stream:true}));
	})
});
// watch html refresh by bs-html-injector
gulp.task('bs_html',function () {
	bs.use(htmlInjector, {
	        files: folder+'**/*.html'
	    });
})
gulp.task('default',['initserver','watch','bs_html']);
