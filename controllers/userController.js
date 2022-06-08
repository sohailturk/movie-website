const User = require("../models/User");
const jwt = require("jsonwebtoken");
const expiryAge = 24 * 60 * 60 * 1000;

//auth controllers

//generate token for authentication
const generateToken = async (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: expiryAge,
  });
  return token;
};

//sending user a form to signup

exports.signupView = (req, res) => {
  res.render("users/signup");
};

//registering user to database and generating token

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body.user);
    await user.save();

    //generating a new token
    const token = await generateToken(user._id);
    //sending token to browser as part of cookie
    res.cookie(
      "authToken",
      token,
      {},
      { signed: true, expiryAge, httpOnly: true }
    );
    res.redirect("/films");
    //redirecting user to home page
    res.redirect("/films");
  } catch (error) {
    res.status(500).send(error);
  }
};

//login form view
exports.loginView = (req, res) => {
  res.render("users/login");
};

//logging users in

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body.user;
    const user = await User.authUser(email, password);
    //generating a new token
    const token = await generateToken(user._id);
    //sending token to browser as part of cookie
    res.cookie(
      "authToken",
      token,
      {},
      { signed: true, expiryAge, httpOnly: true }
    );
    res.redirect("/films")
  } catch (error) {
    res.status(500).send(error.message);
  }
};
