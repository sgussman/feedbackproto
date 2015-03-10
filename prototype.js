/*******************************************************
 * Java script for looking up an artist's latest album *
 *******************************************************/
 //Ensure javascript is connected.
 console.log("Javascript connected.");

//Instance Variables
var value;
//Add Eventlisteners to the form
document.getElementById('feedback_form').addEventListener('submit', function (e) {
	e.preventDefault();								//prevent default action
	var name = $("#name").val();						//get name
	console.log(value);
}, false);

$("button").click(function(){
	value = this.value;
});

