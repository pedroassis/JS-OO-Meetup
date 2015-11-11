
function Person(){
	this.name = "Some Name";
	
	this.talk = function () {
		console.log("I can talk! " + this.name);
	};
}

function Employee() {
	
	Person.call(this);
	
	this.name = "New Name";
}

console.log(new Employee().talk());