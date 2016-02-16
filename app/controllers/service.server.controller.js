exports.render = function(req, res) {
    
    res.render('service', {
        title:"Hello EJS from controller"
    })
};