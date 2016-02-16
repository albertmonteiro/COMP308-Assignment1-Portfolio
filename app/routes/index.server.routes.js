module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    var about = require('../controllers/about.server.controller');
    var project = require('../controllers/project.server.controller');
    var service = require('../controllers/service.server.controller');
    var contact = require('../controllers/contact.server.controller');
    
    
    
    
    
    
    app.get('/', index.render);
    app.get('/index', index.render);
    app.get('/about', about.render);
    app.get('/project', project.render);
    app.get('/service', service.render);
    app.get('/contact', contact.render);
}