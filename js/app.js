'use strict';

$(document).ready(function(){
	// Ask the user for number
	var j = Math.round(Number(prompt("Enter a whole number to Fizz Buzz")));

	function fizzBuzz(j){
		for(var i=1; i < j+1; i++){
			var text = "";
			if (i % 3 === 0){
				text = "fizz";
			};
			if (i % 5 === 0){
				text += "buzz";
			};
			if (text === ""){
				text = i;
			};
			$("#fizz-buzz").append("<p>" + text);
		};
	};

	// Fizz Buzz it
	fizzBuzz(j);
});