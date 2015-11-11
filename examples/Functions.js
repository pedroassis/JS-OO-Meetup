
var anonymous = function(){
	console.warn("Anonymous function called");
};

anonymous(); // prints "Anonymous function called"

function NamedFunction() {
	return "I was called";
}

NamedFunction(); // returns "I was called"
NamedFunction.call(); // returns "I was called"

console.log(anonymous.name); // ""
console.log(NamedFunction.name); // "NamedFunction"



