var express = require('express');
var request = require("request");
var router = express.Router();
var ctrl = require('../controllers/trump');
var app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('test.html');
// });
//router.route('/detect').post(ctrl.apiPOST);
router.post('/detect', function(req, res) {
  res.send(req.body);
});
router.route('/identify').post(ctrl.apiPOSTid);
module.exports = router;
