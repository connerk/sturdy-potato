// a utility library of error handlers.
function hbsErrors(errors) {
    // formats req.check errors for consumption
    // in handlebars
    if (!errors) return
    let rebuild = {};
    errors.forEach((item) => {
        let param = item.param;
        let msg = item.msg;
        rebuild[param] = msg;
    });
    return rebuild;
};

module.exports = hbsErrors;
