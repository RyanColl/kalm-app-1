const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const DatabaseProfile = require("../Database/DB_ProfileLayer");

const localLogin = new LocalStrategy(
  {
    username: "email",
    password: "password",
  },
  (email, password, done) => {
    DatabaseProfile.Authenticate(email, password, (err, ress) => {
      console.log("_____________________");
      console.log(ress);
      console.log("_____________________");
      return ress
        ? done(null, ress)
        : done(null, false, {
            message: "Your login details are not valid. Please try again",
          });
    });
  }
);

passport.serializeUser(function (user, done) {
  console.log("SerializingUser: #" + user.profile_Id);
  done(null, user.profile_Id);
});

passport.deserializeUser(function (id, done) {
  console.log("DeserializingUser: #" + id);
  DatabaseProfile.findProfileByID(id, (err, ress) => {
    if (ress) {
      done(null, ress);
    } else {
      done({ message: "User not found" }, null);
    }
  });
});

module.exports = passport.use(localLogin);
