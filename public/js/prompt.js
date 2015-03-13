var count = 1;
$("#add-prompt").click(function() {
	count++;
	var html = "<form class='prompt_form' method='post' action='/'>";
		html+= "<input type='hidden' class='prompt-number-field' value='"+count+"'>";
		html+= "<label>Prompt: </label><textarea class='promptbox' name='prompt'></textarea>";
		html+= "<br>";
		html+= "<button name='action' type='submit' value='fire!'>Fire!</button>";
		html+= "<br>";
		html+= "</form>";
	$("#prompt-container").append(html);
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
	}, 60000);
}

addPromptListeners();

var callback = function(res){
	console.log(res);
	$("#total").innerHTML = res.total;
	$("#red").innerHTML = res.red;
	$("#yellow").innerHTML = res.yellow;
	$("#green").innerHTML = res.green;
}