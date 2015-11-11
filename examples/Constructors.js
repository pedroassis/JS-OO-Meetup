
function Class() {
	this.myName = "Default name";
}

var instance = new Class();

console.log("Instance name", instance.myName); // "Default name"

Class();

console.log("window name", window.myName); // "Default name"

console.log("same window name", myName); // "Default name"