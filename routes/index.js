let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('forms/adhoc', {
        title: res.locals.name + ' Payroll Data Request Form',
		success: req.session.success,
		errors: req.session.errors
	});
    req.session.errors = null;
});

router.post('/submit', function(req, res, next) {
	//check validity
    req.check('user-name', 'You must provide a name').isLength({ min: 1 });
    req.check('user-name', 'Please enter your name').isAlpha();
	req.check('user-email', 'Invalid email address').isEmail();

	let errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
    } else {
        req.session.success = true;
    }
	res.redirect('/');
});

module.exports = router;
