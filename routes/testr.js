var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test.html');
});
router.post('/check', function(req, res, next) {
    var options = {  
        url: 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '580eb3f9f7f64f9aaf4afb69c25ffd40'
        },
        json: {'url':'http://cdn.thefederalist.com/wp-content/uploads/2015/06/Trump-Fox-998x624.jpg'}
};

request(options, function(err, res, body) {  
    res.send(body);
});
    // var pid ="";
    // request({
    //     url: "https://westus.api.cognitive.microsoft.com/face/v1.0/detect",
    //     method: "POST",
    //     headers: {
    //         'Content-Type': "application/json",
    //         'Ocp-Apim-Subscription-Key': "580eb3f9f7f64f9aaf4afb69c25ffd40"
    //     },
    //     form: {
    //         url:req.data.url
    //     }
    // }, function(error, response, body) {
    //     pid = body.faceId;
    //     res.send(pid);
    //     console.log(body);
    // });

});

module.exports = router;
