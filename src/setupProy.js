const {creatProxyMiddleware} = require ('http-proxymiddleware')

module.exports = function (app){
    app.use ('/api',createProxyMiddleware({
        target: 'http://localhost:3080'
    }))
}