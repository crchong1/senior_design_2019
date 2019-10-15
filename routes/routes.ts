let getLogin = function(req, res) {
	res.render('login.ejs');
}

let routes = {
	get_login: getLogin
}

module.exports = routes;