exports.render = function(req, res) {
    
    res.render('index', {
        title:"Hello EJS from controller"
    })
};