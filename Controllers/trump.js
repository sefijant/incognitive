var request = require('request');

exports.apiPOST = function(req, res) {
  request.post({
    headers: {'Content-Type': "application/json", 'Ocp-Apim-Subscription-Key': "580eb3f9f7f64f9aaf4afb69c25ffd40"},
    url:     'https://westus.api.cognitive.microsoft.com/face/v1.0/detect',
    json:   true,
    body:    {"url":"http://cdn.thefederalist.com/wp-content/uploads/2015/06/Trump-Fox-998x624.jpg"}
    }, function(error, response, body){
        res.send(body[0].faceId);
    });
};