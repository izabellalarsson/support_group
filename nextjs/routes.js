const routes = require('next-routes');

module.exports = routes()
    .add('index', '/')
    .add('branch')
    .add('singleBranch', '/branch/:slug')
    .add('project')
    .add('singleProject', '/project/:slug')
    .add('privacyPolicy', '/privacypolicy')
    .add('singleJourney', '/journey/:slug')
// .add('singleJourney', '/journies/:slug')