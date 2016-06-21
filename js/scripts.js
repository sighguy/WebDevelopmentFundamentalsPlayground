//Javascript Review File

console.log("Happy!");

var age = 16;
var myBirthYear = 2000;
var graduationYear = 2018;
var cityBirth = "Gary, Indiana";
var p = ".";
var ss = " ";

//string concatenation
console.log(age);
console.log("I am" + " " + age + ".")
console.log("I was born in" + ss + cityBirth);


//manipulating the DOM (document object module)
document.getElementById("my-age").innerHTML = age;
document.getElementById("my-Birth-Year").innerHTML = myBirthYear;



//arrays

var abc  = "abcdefghijklmnopqrstuvwxyz";
var abcArray = ["a","b","c","d","e"];
var numberArray = [1, 2, 3, 4, 5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

//another way to create an array
var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "Sprite";
typesOfSoda[2] = "Pepsi";

console.log(abcArray)
console.log(numberArray)
console.log(typesOfSoda)

//for loops
for(var i = 0; i < 10; i++){
	console.log(i)
}


var friends = ["Joshua", "Austin", "Bryce", "Jeremiah", "Nigel", "Darrien", "Jake", "James"]
for(var i = 0;i < friends.length;i++){
	if(friends[i].charAt(0)=="J"){
		console.log(freinds[i]);
	}
}

//objects

var beachBag = {
	//properties
	numBottles		: 3,
	colorOfTowel	: "Green",
	isWet			: false,
	//functions
	zipUp			: function(){
		console.log("***zipper sound***");
	}
}
console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();


//Make an object called "nerd"
//give five properties hasGlasses
//give one function

var nerd = {
	//properties
	hasGlasses        : true, 
	tightyWhitiies	  : true,	
	noFriends 		  : true,
	nickName		  : "worthlessNoob_cake",
	veryUgly		  : true,
	//functions
	crying			  : function(){
		console.log("Sniff, sniff....");
	}
}
nerd.crying();
console.log(nerd.nickName);

var player = {
	//properties
	name 				: " ",
	life				: 1000,
	damage				: 10,
	hasSword    		: true,
	hasSniperRifle		: false,
	hasArmour			: true,

	//functions
	attack 				: function(target){
		console.log(this.name + " attacks " + target + this.damage);
	},

	swatWithSword		: function(target){
		var damage = 25 * this.watch;
		console.log(this.name + " did" + damage + " damage to " + target)
	},

	shootSniperRifle		: function(target){
		var damage = 1500;
		console.log(this.name + " did" + damage + " damage to " + target) 
	}
} 


var animal = {
	//properties
	living		: true,
	eat			: true,
	run			: true,
	jump		: true,
	eyes		: 2,
	cute		: true,

	//functions
	noise 			: function(){
		console.log("Grrrrrrrrrrrrrrrrr....")
	}
}

animal.noise();


var snake = Object.create(animal);

console.log(snake.eyes);
snake.legs = 0
console.log(snake.legs);
snake.breath = function(){
	console.log("SSSSSSSSSsssssssssss.......s.s.s...");
}
snake.breath();

var rabbit = Object.create(animal);

rabbit.ears = "Huge";
console.log(rabbit.ears);


var cow = Object.create(animal);
cow.utter = soft
cow.milk = tasty
cow.sound = function(){
	console.log("MOOOOOOOOOOOOOOOOOOOOOOOOOOO");
}