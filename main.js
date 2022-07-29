// TESTING THE JS FILE FOR PROPER LINKING
// const generatorBtn = document.querySelector('#generator-btn');

// generatorBtn.addEventListener('click', function () {
//    document.write('Hello');
// })

// THE JS FILE IS PROPERLY CONNECTED

// PROBLEM PHASE ONE: SHOWING THE TIME
    // Grap the h2 element
    // Create a function that get the current time
    //  Add the hour, minutes, seconds to the h2 element
    // Make it reoccur every 1 seconds.

// Grapping the h2 element
const timeCounter = document.querySelector('#time-counter');
// create a function that get Current time
function currentTime(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    if(currentHour === 0 && currentMinutes === 0 && currentSeconds === 0){
        todaysDate();
    }
    if(currentHour > 12){
        currentHour = currentHour - 12;
    }
    if(currentMinutes < 10){
        currentMinutes = '0' + currentMinutes;
    }
    if(currentSeconds < 10){
        currentSeconds = '0' + currentSeconds;
    }
    // Add the hour, minutes, seconds to the h2 element
    timeCounter.innerHTML = `The time is: ${currentHour} : ${currentMinutes} : ${currentSeconds}`
}

// Make it reoccure every one seconds
setInterval(currentTime, 1000);

// PROBLEM PHASE TWO: SHOWING TODAYS DATE:
    // Grap the h2 elment to display the date
    // create a function that get the current date
    // add the date to the h2 element
    // invoke it immediately the page loads

// Grap the h2 element
const todayDate = document.querySelector('#today-date');

// Create a function that get the current date
let Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function todaysDate() {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth();
    let currentDay = currentTime.getDay();
    let currentDate = currentTime.getDate();
    for (let i = 0; i < Months.length; i++){
        if (i === currentDay) {
            currentDay = Days[i];
        }
        if (i === currentMonth) {
            currentMonth = Months[i];
        }
    }
    
    todayDate.innerHTML = `Today Date is: ${currentDay} ${currentDate}th, ${currentMonth}, ${currentYear}`;
};
todaysDate();