


const express = require('express')
const { admin } = require('../controllers/admin-controllers')

const router = express.Router()

router.get('/' , admin)

module.exports = router