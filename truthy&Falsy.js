//falsy value 0, '', undefine, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//truthy value
console.log(Boolean(32));
console.log(Boolean("32"));
console.log(Boolean("Hi"));
console.log(Boolean("null"));
console.log(Boolean("undefined"));
console.log(Boolean("NaN"));


// ball (Found or not)
const ball = +'0'; // null , undefine, NaN, '', 0
if(ball) {
    console.log("Found it!");
} else {
    console.log("Not Found!");
}

//eat
const haveEating = null;
if(haveEating) {
    console.log("Yes, I have!");
} else {
    console.log("No, I haven't!");
}


