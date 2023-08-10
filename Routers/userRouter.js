const express = require("express");
const {
  getAlluser,
  updateuser,
  deleteuser,
  getuser,
} = require("../controller/usercontroller.js");
const {
  signup,
  login,
  isAuthorised,
  protectRoute,
  forgetpassword,
  resetpassword,
  logout,
} = require("../controller/authcontroller.js");
// const { reset } = require("nodemon");
const userRouter = express.Router();

// const app = express();

userRouter
.route("/signup")
.post(signup);

userRouter
.route("/login")
.post(login);

userRouter
.route("/logout")
.get(logout)

//editable function
userRouter
.route("/:id")
.patch(updateuser)
.delete(deleteuser);

//profile pae
userRouter.use(protectRoute);
userRouter
.route("/userprofile")
.get(getuser);

userRouter
.route("/forgetpassword")
.post(forgetpassword)

userRouter
.route("/resetpassword/:id")
.post(resetpassword)


//admin specific funtion
userRouter.use(isAuthorised(['admin']));
userRouter
.route("/")
.get(getAlluser);

// userRouter
//   .route("/getcookies")
//   .get(getcookies);

// userRouter
//   .route("/setcookies")
//   .get(setcookies);

module.exports = userRouter;
