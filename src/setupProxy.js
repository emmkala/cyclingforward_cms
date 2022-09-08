/*const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/api/Home",
    "/api/Bikes"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7256',
        secure: false
    });

    app.use(appProxy);
};
*/
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: 'https://localhost:7256',
            changeOrigin: true,
            secure: false
        })
    );
};