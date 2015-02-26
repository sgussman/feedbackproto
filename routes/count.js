var testclick={action: "action", name: "name",time: "time"};
var clicks=[];
clicks.push(testclick);


exports.view = function(req, res){
	res.render('count', clicks);
};

exports.update = function(req, res){
	var name = req.body.name;
	var action = req.body.action;
	var date = new Date();
	var time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	console.log(req.body);
	console.log("Name: "+name);
	console.log("Action: "+action);
	console.log("Time: "+time);
	var temp = {action: action, name: name, time: time};
	console.log("Before clicks: "+clicks);
	clicks.push(temp);
	console.log("After clicks: "+clicks);

	res.redirect('/');
}