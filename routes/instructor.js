var fs = require('fs');

exports.view = function(req, res){
	res.render('instructor');
};

exports.submit = function(req, res){
	var data = req.body.name+"   "+req.body.action+"   "+req.body.promptNumber+"\n"+req.body.additionalInfo;
	fs.writeFile('public/feedback', data, function(err) {
		if (err) {
			console.log("There was an error!");
			throw err;
		}
		console.log("Wrote to file!");
		res.render('prototype');
	});
}