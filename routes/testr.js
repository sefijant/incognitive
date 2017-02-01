var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test.html');
});
router.post('/check', function(req, res, next) {
    var pid ="";
    request({
        uri: "https://westus.api.cognitive.microsoft.com/face/v1.0/detect",
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            'Ocp-Apim-Subscription-Key': "580eb3f9f7f64f9aaf4afb69c25ffd40"
        },
        form: {
            url:req.data.url
        }
    }, function(error, response, body) {
        pid = body.faceId;
        res.send(pid);
        console.log(body);
    });

});

module.exports = router;
