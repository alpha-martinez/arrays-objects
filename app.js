var name = "Alpha";
console.log(name);

var myLocation = "New York";
console.log(myLocation);

var favoriteNumber = 5;
console.log(favoriteNumber);

var teams = ["Lakers", "Warriors", "Blazers", "Nets"];
console.log(teams);


//while loops
var number = 10;
var otherNumber = 1;
while ( otherNumber < number ) {
    console.log(otherNumber);
    // other number += 1;
    otherNumber = otherNumber + 1; //
}


var numberTwo = 20;
var myOtherNumber = 10;

while (myOtherNumber < numberTwo){
    console.log(myOtherNumber);//10
    myOtherNumber += 1; //11, 12, 13, 14, 15, 16
}

var alphaFav = 5;
var tom = 15;

while (alphaFav < tom ){
    console.log(alphaFav); //5
    alphaFav += 1; //5,6,7,8
}


var mingo = 10;
var day = 35;
 
while (mingo < day){
    console.log(mingo);
    mingo += 1;//
}

//for loop

var mon = 12;
var wed = 30;

for (var i = mon; i < wed; i++) {
    console.log(i);
}


for (var i = 0; i < 10; i++) {
    console.log(i);
}

//teams
for (var i = 0; i < teams.length; i++) {
    //console.log(teams[i]) is saying teams starting at 0, print out so forth but don't do this tho
    var single = teams[i];
    console.log(single);
}


//make an array
//use a for loop to iterate through your array 
//print each element in your array

var emotions = ["happy", "sad", "frustrated", "excited", "disappointed", "neutral"];
for (var i = 0; i < emotions.length; i++) {
    var feelings = emotions[i];
    console.log(feelings);
}
