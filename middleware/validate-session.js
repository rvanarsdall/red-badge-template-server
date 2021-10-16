const jwt = require("jsonwebtoken");
const { User } = require("../models");

const validateSession = (req, res, next) => {
  // Build your validation for token here
};
module.exports = validateSession;
