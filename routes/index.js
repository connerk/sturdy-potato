let express = require('express');
let router = express.Router();

/* GET home page. * /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**/
router.get('/', function(req, res, next) {
	res.render('forms/adhoc', {
		title: 'Lithia Payroll Data Request Form',
		success: false,
		error: req.session.errors
	});
	req.session.errors = null;
});

router.post('/submit', function(req, res, next) {
	//check validity
	req.check('form-email', 'Invalid email address').isEmail();

	let errors = req.validationErrors();
	if (errors) {
		req.session.errors = errors;
	}
	res.redirect('/');
});
module.exports = router;
