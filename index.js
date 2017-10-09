var join = require('path').join;

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 8000;
var appPath = join(__dirname, 'app')

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
*/

var app = connect();
app.use(compression());
app.use(favicon(join(appPath, 'favicon.ico')))
app.use(logger('dev'));
app.use(static(appPath, {
  index: 'index.html'
}));
http.createServer(app).listen(port);
console.log('running as ' + env);
