const winner = document.querySelector(".driver");
const avgDophin = (96+108+89)/3;
const avgKoalas = (88+91+100)/3;

console.log(avgDophin, avgKoalas);

if(avgDophin > avgKoalas && avgDophin >= 100 ) {
    console.log(`Dolphins is grather than Koalas`);
    winner.textContent = "Dolphins is grather than Koalas";
} else if(avgDophin < avgKoalas && avgDophin >= 100 ) {
    winner.textContent = "Koalas is grather Dolphin";
    console.log(`Koalas is grather Dolphin`);
} else if( avgDophin == avgKoalas && avgDophin >= 100 && avgKoalas >= 100) {
    console.log("Both win the tropped");
    winner.textContent = "Both win the tropped";
} else {
    console.log("No one wins the trophy😥");
    winner.textContent = "No one wins the trophy😥";

}