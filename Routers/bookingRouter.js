const express = require("express");
const { protectRoute } = require("../controller/authcontroller");
const { createSession } = require("../controller/bookingcontroller");
const bookingRouter = express.Router();

bookingRouter.post('/createSession', protectRoute);
bookingRouter.get('/createSession', function (req, res) {
  res.sendFile("");
});

module.exports = bookingRouter;
