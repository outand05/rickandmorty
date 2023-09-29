  const express = require("express")
const getCharById = require("./../controllers/getCharById")
const getCharDetails = require("./../controllers/getCharDetails")
const login = require("./../controllers/login")

const router = express.Router()
router.get("/onsearch/:id", getCharById)
router.get("/detail/:detailId", getCharDetails)
router.get('/login', login)

module.exports = router