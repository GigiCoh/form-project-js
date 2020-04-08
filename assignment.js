onclick();

function onclick(){
	let name=String;
	let agecom,age=Number;
	
	name=prompt("What's your name?");
	agecom=prompt("How old were you when you first used a computer?");
	age=prompt('How old are you now?');


	let ans=(age-agecom);

	document.getElementById("answer").innerHTML=(name+ ",you have used computers for " + ans +" years.");

}

