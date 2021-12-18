const express = require('express')
const router = express.Router()


router.get('/Add-user', (req, res) => {
    res.render('Add-user')
  })







module.exports= router