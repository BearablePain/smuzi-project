const router = require('express').Router();
// const error = require('../middleware/error');
// const {checkSession, checkVerification, cookiesCleaner} = require('..error/middleware/check');

router.get('/', function (req, res) {
  res.render('index');
});

module.exports = router
