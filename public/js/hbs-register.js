const register = (Handlebars) => {
     const helpers = ({
        foo: () => { return 'FOO!'; },
        bar: () => { return 'BAR!'; },
        list: (items, options) => {
            let out = '<ul>';
            items.forEach((item) => {
                out = out + '<li>' + options.fn(item) + '</li>';
            }, this);
            return out + '</ul>';
        }
    });

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    // register helpers
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
      // just return helpers object if we can't register helpers here
      return helpers;
  }

};

// client
if (typeof window !== "undefined") {
    register(Handlebars);
}
// server
else {
    module.exports.register = register;
    module.exports.helpers = register(null);
}  