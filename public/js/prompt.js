var count = 1;
$("#add-prompt").click(function() {
	count++;
	var html = "<div class='col-md-3'>"
		html+= "<form class='prompt_form' method='post' action='/'>";
		html+= "<input type='hidden' class='prompt-number-field' value='"+count+"'>";
		html+= "<label>Prompt: </label><textarea class='form-control promptbox' name='prompt'></textarea>";
		html+= "<br/>";
		html+= "<button class='btn btn-lg' name='action' type='submit' value='fire!'>Fire!</button>";
		html+= "</form>";
		html+= "</div>";
	$("#prompt-row").append(html);
	addPromptListeners();
});

function addPromptListeners(){
	$(".prompt-form").off();
	$(".prompt-form").submit(promptListener);
}

function promptListener(e){
	e.preventDefault();
	var val = $(this).serialize();
	$.post('/', val);
	$(this).find("button").prop("disabled", true);
	setTimeout(function(){
		$.get('/getCount', callback);
	}, 6000);
}

addPromptListeners();

var callback = function(res){
	console.log(res);
	$("#total").html(res.total);
	$("#red").html(res.red);
	$("#yellow").html(res.yellow);
	$("#green").html(res.green);
}