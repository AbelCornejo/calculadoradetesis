const { dirxml } = require('console');
var express = require('express');
var path = require('path');
//var webpack = require('webpack');
//var webpackDevMiddleware = require('webpack-dev-middleware');
//var webpackConfig = require('../webpack.config');

var app = express();
app.set('port', (process.env.PORT || 3000));
//app.set('/static', express.static('dist'));
//app.use(webpackDevMiddleware(webpack(webpackConfig)));

/* routes */
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './index.html'));
});


/* escuchando puerto */
app.listen(app.get('port'), ()=>{
    console.log('escuchando en el puerto: ', app.get('port'))
})