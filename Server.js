const express = require("express");
const path = require("path");
const passport = require("./middleware/passport");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fs = require('fs')
const app = express();
const port = process.env.PORT || 5500;
const {getHelp} = require('./Database/DB_AdditionalAccess')
const { sendFileToS3, getFileStream } = require("./aws/s3bucket");
const DatabaseAccess = require("./Database/DB_AccessLayer");
const { findProfileByID, getEmergencyContactData, 
  addEmergencyContactInfo, checkIfEmailExists, addProfile, 
  getContactInfo, editContactInfo, editEmergencyContactInfo, 
  deleteEmergencyContactInfo, addKeyToDB, getKeyFromDB
} = require("./Database/DB_ProfileLayer");
//Import Routers
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const AuthRouter = require("./Routes/AuthRoute");
const {sendMessages} = require('./aws/twilio/HelpLogic')
app.use(
  require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./build"));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(upload.single('image'))
app.use((req, res, next) => {
  console.log("=======================");
  console.log(`User details are: `);
  console.log(req.user);

  // console.log("Entire session object:");
  // console.log(req.session);

  // console.log(`Session details are: `);
  // console.log(req.session.passport);

  // console.log(`Session Id is: `);
  // console.log(req.sessionID)
  console.log("=======================");
  next();
});

//  passport.use(
//   new LocalStrategy(function auth(username, password, done) {
//     const validProfile = Authenticate(username, password);
//     if (validProfile[0]) {
//       return done(null, validProfile[0]);
//     } else {
//       return done("Local Strategy failed", null);
//     }
//   })
// ); 

// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     cb(null, { id: user.profile_Id, username: user.username });
//   });
// });

// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

// create a GET route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//S3 Bucket

app.post("/s3", async (req, res) => {
  console.log(req.file)
  sendFileToS3(req.file)
    .then(data => {
      console.log(data)
      addKeyToDB(req.user.email, `/images/${data.key}`)
        .then(result => {
          console.log(result)
          // send the key now to grab the image url
          res.send({imgUrl: `/images/${data.key}`})
        })
        .catch( e => {
          console.log({fail: 'failed on insert to db'}.fail)
        })
    })
    .catch( e => console.log(e))
});

app.get('/images/:key', (req, res) => {
  const key = req.params.key
  getFileStream(key).pipe(res)
})

app.get("/aboutDev", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO ABOUT PAGE" });
});

app.get("/home", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO HOME PAGE" });
});

// Ryan
app.get('/getContactInfo', (req, res) => {
  findProfileByID(req.user.profile_Id, (err, success) => {
    if(err) res.send({err})
    if(success) {
      getContactInfo(success.email).then(info => {
        console.log('info: ', info, ' user: ', success)
        if(info.length>0) {
          let [infoObj] = info
          console.log('ladies and gentlemen, infoObj: ', infoObj)
          let userData = {
            profile_id: success.profile_Id,
            email: infoObj.email || '',
            name: success.name,
            address: infoObj.address || '',
            number: infoObj.phone_number || '',
            city: infoObj.city || '',
            postal: infoObj.postal_code || '',
            unit: infoObj.suite_number || '',
            aws_key: infoObj.aws_key || ''
          }
          res.send({userData})
        } else {
          let userData = {
            profile_Id: req.user.profile_Id,
            email: req.user.email,
            name: req.user.name,
          }
          res.send({userData})
        }
      }).catch(e => console.log('error on fetch getContactInfo',e))
    }
  })
})
app.get('/getImage', (req, res) => {
  getKeyFromDB(req.user.email)
    .then(url => {
      let [imgUrl] = url
      res.send({url: imgUrl.aws_key})
    })
})





/* CONTACT PAGE - INFO AND EMERGENCY DETAILS */
// called when you click save on profile info form
app.post('/editContactInfo', (req, res) => {
    editContactInfo(req.body.userData).then(result => {
      // console.log(result)
    }).catch(e=>console.log(e))
})
// runs upon loading of contact info page
app.get('/getEmergencyInfo', (req, res) => {
  getEmergencyContactData(req.user.profile_Id).then(result => {
    // console.log('emergency contact result: ', result)
      res.send({result})
    }).catch(e => res.send({error: 'error'}))
})
// runs when a new emergency contact is added
app.post('/addEmergencyContactInfo', (req, res) => {
  let data = {profile_id: req.user.profile_Id, ...req.body.contactData}
  addEmergencyContactInfo(data).then(result => {
    // console.log('result ' , result)
    res.send({result})
  }).catch(e => {
    // console.log('error ', e)
    res.send({error: e})
  })
})
// runs when you edit an emergency contact
app.post('/editEmergencyContactInfo', (req, res) => {
})

app.post('/deleteEmergencyContact', (req, res) => {

})

/* END OF CONTACT PAGE */







app.get('/getUserId', (req, res) => {
  if(req.user) res.send({id: req.user.profile_Id})
  else res.send({id: 0})
})
app.post('/forgotPass', (req, res) => {
  checkIfEmailExists(req.body.email).then(obj => {
    if(obj === undefined) {res.send({auth: false});return}
    else res.send({auth: true})
  })
})
app.post('/createAccount', (req, res) => {
  checkIfEmailExists(req.body.email).then(obj => {
    if(obj !== undefined) {
      res.send({
        auth: false
      })
      return;
    }
    const {name, email, password} = req.body
    addProfile(name, email, password).then(resp => {
      res.send({auth: true})
      return
    }).catch(e => console.error(e))
  }).catch(e => console.error(e))
  
  // console.log(req.body.email, ' ', req.body.name, ' ', req.body.password)
    // findProfile(req.body.email).then(resp => {
    //   console.log(resp)
    //   if(resp[0] === undefined) {
    //     const {name, email, password} = req.body
    //     addProfile(name, email, password).then(resp => {
    //       res.send({express: 'user successfully created'})
    //       return
    //     })
    //   } else {
    //     res.send({express: 'there is already a user who matches that email'})
    //     return
    //   }
    // })
}) 
app.post('/login', passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {

    // console.log(req.body.username, ' ', req.body.password, ' you are logged in')
    checkIfEmailExists(req.body.username).then(result => {
      res.send({auth: true, userId: result.profile_Id})
    })
  // findProfile(req.body.email).then(resp => {
  //   if(resp[0] === undefined) {
  //     res.send({express: 'no such user in the system, try creating a new user', auth: false})
  //     return
  //   }
  //   console.log(resp)
  //   if(resp[0].password !== req.body.password) {
  //     res.send({express: 'incorrect password', auth: false})
  //     return
  //   }
  //   else {
      
  //     return
  //   }
  // })
})

// Temp
app.get('/getHelp', (req, res) => {
  getHelp(req.user.profile_Id)
    .then(result => {
      if(result.length>0) {
        let numbers = result.map(contact => {
          return parseInt(contact.contact_phone)
        })
        sendMessages(req.user.name, ...numbers)
      }
      
    })
    .then(r => res.send({success: 'success'}))
    .catch(e => console.log(e))
})
app.get("/Quote", (req, res) => {
  DatabaseAccess.getAllQuotes((err, result) => {
    res.send({ express: result });
  });
});
app.all('/*', (req, res, next) => {
  console.log('url: ', req.url)
  if(req.url.includes('/auth')) {
    res.redirect('/login')
    return
  }
  if(req.url !== '/') {
    res.redirect('/')
  }
  next()
})
// Attach Routes
app.use("/", AuthRouter);

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`KALM app Listening on port ${port}`)); //Line 6
