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


//objects
//key: value pairs

const alpha = {
    fullName: "Alpha Martinez",
    age: 23,
    myLocation: "Brooklyn",
    placesTraveled: ["Kentucky", "Ohio", "Mexico", "Poland"]
}

console.log(alpha);

//myLocation

console.log(alpha.placesTraveled[2]);

//example of how instagram data would be under
const myReallyCoolPost = {
    username: "@luna",
    likes: 20,
    comments: ["that looks pretty cool", "ayyyy i see you", "okay hacker!", "so proud of you!"],
    caption: "Day 3 of SEI",
    picture: "https://instagram.com/luna/...",
    shares: 3
}

console.log(myReallyCoolPost);

myReallyCoolPost.myLocation = "NY";
console.log(myReallyCoolPost);

//instagram post


const stayInMyHead = {
    username: "@lulu",
    likes: 30,
    comments: ["lol you got this girls", "i see you hacker", "teach me!"],
    caption: "Day 3 of SEI with Javascript",
    picture: "https://instagram.com/lulu/...",
    shares: 5
}


let sentence = "I'm cool";
let sentenceTwo = "I'm cool too";

const FourthOfJulyPost = {
    username: "@lo"
}

FourthOfJulyPost.picture = 'https://instagram.com/.....';
FourthOfJulyPost['likes'] = 15;
FourthOfJulyPost.comments = ['ok...'];
FourthOfJulyPost.caption = 'Writing code on the 4th';
console.log(FourthOfJulyPost);


//functions

function sayHello() {
    //write my code
    //write your logic
    console.log("Hello");
}

sayHello();



const sayHelloAgain = function () {
    console.log("Hello Again");
}

sayHelloAgain();


const sayHelloFinal = () => {
    console.log ("Adios");
}

sayHelloFinal();



const otherNumbers = [5, 10, 15, 20, 25, 30];

// function printNumbers(numbers) {
//     console.log(numbers);
// }

function printNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        if (num < 50) {
            console.log("This number is less than 50: " + num) 
        } else {
            console.log("This nnumber is greater than 50: " + num); 
        }

    }
}//expressions, objects, you wanna have semi colons there


//printNumbers(numbers);
printNumbers(otherNumbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //shortcut: option up and down arrow 
function addNumbers (array) {
    let result = 0; //expression

    for (i = 0; i < array.length; i++) {  //logic 
        let num = array[i]; //1, 2, 3, 4, 5...
        
        result += num; //1, 3, 6, 10, 15 ...
   }        
   return result;
   
}

addNumbers(numbers);