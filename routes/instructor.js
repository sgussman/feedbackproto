var fs = require('fs');
var totalClicks = 0;
var greenClicks = 0;
var yellowClicks = 0;
var redClicks = 0;

exports.view = function(req, res){
	res.render('instructor');
};

exports.submit = function(req, res){
	var data = req.body.action+"   "+req.body.name+"   "+req.body.promptNumber+"\n<br>\n"+req.body.additionalInfo+'\n<br>';
		totalClicks++;
	var action = req.body.action;
	if (action=="green"){
		greenClicks++
	} else if (action=="yellow"){
		yellowClicks++;
	} else if (action=="red"){
		redClicks++;
	}
	fs.appendFile('public/feedback.txt', data, function(err) {
		if (err) {
			console.log("There was an error!");
			throw err;
		}
		console.log("Wrote to file!");
		res.render('prototype');
	});
}

exports.count = function(req, res){
	console.log("Doing the count thing.");
	var data = "none";
		if (redClicks >= yellowClicks && redClicks >= greenClicks){
			data = "red";
		} else if (yellowClicks >= redClicks && yellowClicks >= greenClicks){
			data = "yellow";
		} else if (greenClicks >= yellowClicks && greenClicks >= redClicks){
			data = "green";
		}

		if (greenClicks == yellowClicks && redClicks == greenClicks){
			data = "none";
		}
		totalClicks = 0;
		greenClicks = 0;
		redClicks = 0;
		yellowClicks = 0;
		res.send({light:data});
}