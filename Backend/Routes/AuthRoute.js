const { Signup, Login } = require('../Controllers/AuthController')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
// Removed invalid route. Add a valid route below if needed, for example:
// router.post('/somepath', someHandlerFunction)

module.exports = router;