var fs = require('fs');

exports.view = function(req, res){
	res.render('instructor');
};

exports.submit = function(req, res){
	var data = req.body.action+"   "+req.body.name+"   "+req.body.promptNumber+"\n<br>\n"+req.body.additionalInfo+'\n<br>';
	fs.appendFile('public/feedback.txt', data, function(err) {
		if (err) {
			console.log("There was an error!");
			throw err;
		}
		console.log("Wrote to file!");
		res.render('prototype');
	});
}