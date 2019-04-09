const routes = require('next-routes');

module.exports = routes()
    .add('index', '/')
    .add('branches')
    .add('branch', '/branches/:slug')
    .add('project')