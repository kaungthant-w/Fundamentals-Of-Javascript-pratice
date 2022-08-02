//switch statement

const days = document.querySelector(".dayswtich"); 
const day = "thursday";

switch(day) {
    case "monday":
        // console.log("Meeting Bootcamp day. Studying Day");
        days.textContent = "Meeting Bootcamp day. Studying Day👩‍💻";
    break;
    case "tuesday":
        // console.log("Prepare Theory videos.");
        days.textContent = "Prepare Theory videos.👩‍💻";
    break;
    case "wenesday":
    case "thursday":
        // console.log("Write sample code.");
        days.textContent = "Write sample code.👨‍🏫";
    break;
    case "friday":
        days.textContent = "Record videos.👩‍💻";
        // console.log("Record videos");
    break;
    case "saturday":      
    case "sunday":
        // console.log("Not a valid day!");
        days.textContent = "Not a valid day!👩‍💻";
    break;
    default:
        days.textContent = "empty day!";
}

// if else statement
const dayif = document.querySelector(".dayif");
if(day ==="monday") {
    dayif.textContent = "Meeting Bootcamp day. Studying Day👩‍💻";
} else if(day === "tuesday") {
    dayif.textContent = "Prepare Theory videos.👩‍💻";
} else if(day === "wenesday" || day == "thursday"){
    dayif.textContent = "Write sample code.👨‍🏫";
} else if( day === "friday") {
    dayif.textContent = "Record videos.👩‍💻";
} else if(day === "saturday" || day === "sunday") {
    dayif.textContent = "Not a valid day!👩‍💻";
} else {
    dayif.textContent = "empty day!";
}