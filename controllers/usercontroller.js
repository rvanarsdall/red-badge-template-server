const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { User } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();


router.post("/create", async function (req, res) {
  try{

  }catch(e){
    res.status(500).json({message: e.message})
  }
 
});

router.post("/login", async function (req, res) {
  try{

  }catch(e){
    res.status(500).json({message: e.message})
  }
});

module.exports = router;
