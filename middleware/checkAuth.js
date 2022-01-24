module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.session.save(function () {
      res.redirect("/");
    });
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    req.session.save(function () {
      res.redirect("/dashboard");
    });
  },
};
