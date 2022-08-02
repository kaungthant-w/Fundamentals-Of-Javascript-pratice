const age =  23;
const allowDrive = 18;
const driver = document.querySelector(".driver");
age >= 18 ? console.log("You can drive anywhere!"):console.log("Please Wait for age");

const man = age >= 18 ? driver.textContent="You can drive anywhere!":driver.textContent=`Please Wait for ${allowDrive-age} years.`;

const something = "Do you like ";
const Me = age <= 18 ? driver.textContent = `${something} water?` : driver.textContent =`${something} wine?`;
