var express = require('express');
var request = require("request");
var router = express.Router();
var ctrl = require('../controllers/trump');

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('test.html');
});
router.route('/detect').post(ctrl.apiPOST);
// router.post('/detect', function(req, res) {
//   res.send(req.body);
// });
router.route('/identify').post(ctrl.apiPOSTid);
router.route('/emo').post(ctrl.apiPOSTemo);
module.exports = router;
