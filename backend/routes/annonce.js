
//const express = require("express");
//const router = express.Router();

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Contact Model
const AnnonceModel = require('../model/annonce');



//singup

router.post("/addannonce", (req, res) => {
  const {confirmation,password,email,identifiant}=req.body
  
if(confirmation === password )  return res.json({ error: "password not equal" }) 
userModel.findOne({ email }).then(user => {
    if (user) {
      return res.json({ error: "user already exist" });
    }

  const newUser = new userModel({
    identifiant,
    email,
    password

  });
// cryptage
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;

  //crypter password
      newUser.password = hash;

      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => res.send("cannot post"));
      });
  });
  
 });
});

//login

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  userModel.findOne({ email }).then(user => {
    const { id, email, identifiant } = user;
    if (!user) {
      return res.json({ error: "email is not valid" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id, email, identifiant };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token: "Bearer " + token });
          }
        );
      } else {
        res.json({ error: "password incorrect" });
      }
    });
  });
});

router.get(
  "/all",
  
  (req, res) => {
    userModel.find()
    .then(user => res.json(user))
    .catch(err => res.send("cannot get"));

  }
);

router.delete("/:id", (req, res) => {
  userModel.findOneAndDelete(req.params.id)
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

router.put("/:id", (req, res) => {
  const user = req.body;
  userModel.findOneAndUpdate({ _id: req.params.id }, { $set: { ...user } })
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});


// tester le token :bearer
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);


module.exports = router;
