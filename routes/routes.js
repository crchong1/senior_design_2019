var getLogin = function(req, res) {
	res.render('login.ejs');
}

var routes = {
	get_login: getLogin
}

module.exports = routes;