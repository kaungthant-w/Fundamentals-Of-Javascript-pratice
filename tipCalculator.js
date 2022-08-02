//bill 270, 40, 430
const values = function(value) {
    const bill = document.querySelector(".bill");
    const tip = value >=50 && value <=300 ? value *0.15 :value *0.15;

    bill.textContent =`The bills was ${value}, the tips was ${tip} and the total value ${value+tip} .`;
}

// values(270);
// values(40);
values(430);