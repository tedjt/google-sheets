var gsheets = require('../index'),
	async = require('async');

var theSheet = null, theWorksheet = null;

module.exports = {

	"valid login": function(test) {
		test.expect(1);

		gsheets.auth({
			email: process.env.GSHEETS_USER,
			password: process.env.GSHEETS_PASS
		}, function(err) {
			test.ifError(err);
			test.done();
		});
	},

	"reject invalid login": function(test) {
		test.expect(1);
		gsheets.auth({
			email: 'invalid@email',
			password: 'invalidpassword'
		}, function(err) {
			test.ok(err, "Invalid login should produce error callback");
			test.done();
		});
	}

};