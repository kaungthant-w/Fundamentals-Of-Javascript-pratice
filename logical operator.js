// && , ||

const hasDriverLicense = true;
const hasVision = true;

if(hasDriverLicense && hasVision) {
    console.log("You can drive anywhere!");
} else {
    console.log("Wait for drive license");
}


const driver = document.querySelector(".driver");
const vision = document.querySelector(".vision");

[driver, vision].map(colors => colors.style.color="green");

if(hasDriverLicense && hasVision) {
    driver.append("🚗 You can drive anywhere!");
    vision.append("👨‍✈️ You age must have over 18,Alright");
} else {
    driver.style.color = "red";
    driver.append("Wait for drive license! ⚠");
}


