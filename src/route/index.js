const bott = require("./bottRoute");
const user = require("./userRoute");
const express = require("express");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/bott",
    route: bott,
  },
  {
    path: "/user",
    route: user,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
