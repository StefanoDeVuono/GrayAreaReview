var student = {
  name: 'Brandon',
  favouriteArtSpace: 'Gray Area',
  mealsToday: [
    'eggs and yogurt',
    'fajitas',
    'sandwich'
  ]
};

// console.log(student.mealsToday.sandwich);
// console.log(student.mealsToday[2]);

var Earthling = function(){
  this.planet = 'Earth';
};

var Human = function(){
  this.thumbs = 'a lot of us do';
};

Human.prototype = new Earthling();

var Student = function(name, mealsArray){
  this.name = name;
  this.mealsToday = mealsArray;
};

Student.prototype = new Human();

Student.prototype.favouriteArtSpace = 'Gray Area';


var jeff = new Student('Jeff', ['chicken', 'oatmeal cream pie']);

console.log(jeff.mealsToday[1]);

Student.prototype.getLastMeal = function(){
  var numberOfMeals = this.mealsToday.length;
  var lastMeal = this.mealsToday[numberOfMeals - 1];
  return lastMeal;
};
