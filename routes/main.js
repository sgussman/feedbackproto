var prompt="Waiting for instructor's prompt.";
var number = 0;
exports.view = function(req, res){
	res.render('prototype', {prompt: prompt, promptNumber: number});
};

exports.firePrompt = function(req, res){
	prompt = req.body.prompt;
	number = req.body.promptNumber;
	console.log(number);
}