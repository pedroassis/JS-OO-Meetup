
var Animal = {
	type : "Animal",
	talk : function () {
		console.log("Animal sound!?");
	}
};

function Person(){
	this.name = "Some Name";
	
	this.talk();
	
	this.talk = function () {
		console.log("I can talk!");
	};
}

Person.prototype = Animal;

var somePerson = new Person();

console.log(somePerson.type); // "Animal"

Animal.type = "Another Type";

console.log(somePerson.type); // "Another Type"

console.log(somePerson.talk()); // "I can talk!"