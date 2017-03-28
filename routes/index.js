const express = require('express');
const router = express.Router();
const hbsErrors = require('../utils/error-handling')

router.get('/', function(req, res, next) {
    let transformedErrors = hbsErrors(req.session.errors)
    res.render('forms/adhoc', {
        title: res.locals.name + ' Payroll Data Request Form',
		success: req.session.success,
        errors: transformedErrors,
        body: req.session.body
    });
    req.session.success = false;
    req.session.errors = null;
    req.session.body = null;
});

router.post('/submit', function(req, res, next) {
    console.log("body: ", req.body); //{DEV}
    //check validity
    req.check('user-name', 'You must provide a name').isLength({ min: 1 });
	req.check('user-email', 'Invalid email address').isEmail();

	let errors = req.validationErrors();
    if (errors) {
        console.log("errors: ",errors)
        req.session.body = req.body;
        req.session.errors = errors;
        req.session.success = false;
    } else {
        req.session.success = true;
        var util = require('util');
        let asana = require('asana');
        let client = asana.Client.create().useAccessToken(res.locals.asana.authorization);
    }
	res.redirect('/');
});

module.exports = router;
