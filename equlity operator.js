// == or ===

//true or false
const num1 = 10;
console.log(num1==0);

const num2 = 4;
console.log(num2==4);


//age
const age = 19;
if(age == 19) {
 console.log("This is for you");
}else{
    console.log("Please Wait until 18 years old..");
}    

//permit or not
const permitCount = 20;
const enterPeople = 20;
if(enterPeople <= permitCount) {
    alert(`Please Holp on!. You're ${enterPeople} people.`);
} else {
    alert(`We allow ${permitCount} people.Please get out ${enterPeople-permitCount}!`);
}

const name = prompt("What's your name?");
console.log(`Your name is ${name}`);
console.log(typeof name);


const count = prompt("How many it is?");
if(count) {
    console.log(count);
    console.log(typeof count);
}