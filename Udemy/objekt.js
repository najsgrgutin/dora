var osoba = {};
osoba.ime="Dorijan";
osoba.prezime="Grgic";
osoba.dob = 20;

var prop = "ajme";
osoba[prop] = "ajoj"

console.log(osoba);

var someObject = {
	friends : [
		{name:"Dorijan"},
		{name:"Luka"},
		{name:"Ivan"}
	],
	color : "cyan",
	isEvil : true
};

console.log(someObject);
console.log(someObject.friends[0].name);

var comments = {
	detail : ["ja", "man"]
};

comments.print = function(){
	this.detail.forEach(function(el){
		console.log(el);
	});
}

comments.print();