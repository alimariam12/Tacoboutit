// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    console.log("ASDF FDSA", req.user, req.User);
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });
  app.get("/review", isAuthenticated, (req, res) => {
    res.render("review");
  });
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("review");
  });
};
