const express = require("express");
const AuthRouter = express.Router();
const passport = require("../middleware/passport");

//Authentication

// AuthRouter.get("/login", function (req, res, next) {
//   res.send({ express: "Something went wrong! try again!" });
// });

AuthRouter.post("/login/password", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("user :" + user);
      return res.redirect("/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      req.session.save();
      return res.redirect("/user");
    });
  })(req, res, next);
});

/* AuthRouter.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  }),
  (req, res) => {
    req.session.save();
  }
); */
AuthRouter.get("/logout", function (req, res, next) {
  req.logout();
  res.redirect("/");
});

AuthRouter.get("/user", function (req, res, next) {
  res.send({ express: "logged in!!" });
});

module.exports = AuthRouter;
