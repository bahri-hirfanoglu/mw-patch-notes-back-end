const express = require("express"),
loginController = require('../controllers/loginController'),
router = express.Router()

router.post('/', loginController.post)

module.exports = router;
