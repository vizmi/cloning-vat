var join = require('path').join;

var env = process.env.NODE_ENV || 'development';
var appPath = join(__dirname, 'app')

if ('development' === env) {

	var sync = require("browser-sync").create();

	sync.init({
    	server: appPath					// embedded static server part
    	, port: 80						// static server port
    	, files: join(appPath, '**')	// watcher file config
    	, open: false					// do not open browser
    	//, middleware: [logger('dev')]	// middlewares (if needed)
	});
	console.log('Browsersync started monitoring ' + appPath);

} else {

	var http = require('http');
	var connect = require('connect');
	// connect middlewares
	var compression = require('compression');
	var favicon = require('serve-favicon');
	var logger = require('morgan');
	var static = require('serve-static');
	/* -- will be used for the api site
	var bodyParser = require('body-parser');
	var session = require('express-session');
	var errorhandler = require('errorhandler'); -- dev only
	*/
	
	var app = connect();
	app.use(compression());
	app.use(favicon(path.join(appPath, 'favicon.ico')))
	app.use(logger('dev'));
	app.use(static(appPath));
	http.createServer(app).listen(80);
	console.log('running as ' + env);

}
