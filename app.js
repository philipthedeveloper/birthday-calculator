// DAYS OF BIRTH IN HUMAN FORMAT
// let DetailsOfBirth = '2002/09/09';
// GET FULL DETAILS
function allDetails() {
  const inputText = document.querySelector("#DOB");
  const DetailsOfBirth = inputText.value;
  if (DetailsOfBirth.trim().length < 10) {
    alert("Enter valid birth details...");
    inputText.value = "";
    return;
  }
  const dateOfBirthDetails = document.querySelector("#date-of-birth-details");
  let yearOfBirth = Number(DetailsOfBirth.slice(0, 4));
  let monthOfBirth = Number(DetailsOfBirth.slice(5, 7));
  let dateOfBirth = Number(DetailsOfBirth.slice(8, 10));
  if (isNaN(yearOfBirth) || isNaN(monthOfBirth) || isNaN(dateOfBirth)) {
    alert("Enter valid birth details...");
    inputText.value = "";
    return;
  }

  // CONVERTED THE HUMAN FORMAT TO THE MACHINE FORMAT
  //   let realDate = new Date();
  //   realDate.setYear(yearOfBirth);
  //   realDate.setMonth(monthOfBirth - 1);
  //   realDate.setDate(dateOfBirth);
  //   realDate.setHours(0);
  //   realDate.setMinutes(0);
  //   realDate.setSeconds(0);
  //   realDate.setMilliseconds(0);
  let realDate = new Date(`${yearOfBirth}/${monthOfBirth}/${dateOfBirth}`);

  // THE DATE OF BIRTH IN COMPUTER FORMAT
  let realYearOfBirth = realDate.getFullYear();
  let realMonthOfBirth = realDate.getMonth();
  let realDateOfBirth = realDate.getDate();
  let realMilliSecondsOfBirth = Date.parse(realDate);
  let realDayOfBirth = realDate.getDay();
  // console.log(dateOfBirth);

  // TODAY'S DATE;
  let todayDate = new Date();
  let currentYear = todayDate.getFullYear();
  let currentMonth = todayDate.getMonth();
  let currentDate = todayDate.getDate();
  let currentDay = todayDate.getDay();
  let currentMilliSeconds = Date.parse(todayDate);

  // WHEN YOUR NEXT BIRTHDAY IS SUPPOSED TO BE;
  let nextBirthday = new Date();
  nextBirthday.setYear(currentYear);
  nextBirthday.setMonth(realMonthOfBirth);
  nextBirthday.setDate(realDateOfBirth);
  nextBirthday.setHours(0);
  nextBirthday.setMinutes(0);
  nextBirthday.setSeconds(0);
  nextBirthday.setMilliseconds(0);

  if (currentMonth > realMonthOfBirth) {
    nextBirthday.setYear(currentYear + 1);
  } else if (
    currentMonth == realMonthOfBirth &&
    currentDate > realDateOfBirth
  ) {
    nextBirthday.setYear(currentYear + 1);
  } else if (
    currentMonth == realMonthOfBirth &&
    currentDate < realDateOfBirth
  ) {
    nextBirthday.setYear(currentYear);
  } else if (
    currentMonth == realMonthOfBirth &&
    currentDate == realDateOfBirth
  ) {
    nextBirthday.setYear(currentYear + 1);
  }

  // GET OUT THE NEXT BIRTHDAY
  let nextYOB = nextBirthday.getFullYear();
  let nextMOB = nextBirthday.getMonth();
  let nextDOB = nextBirthday.getDate();
  let nextDayOB = nextBirthday.getDay();
  let nextMilliSeconds = Date.parse(nextBirthday);

  // let yearsOld = '';
  // let monthsOld = '';
  // if (currentMonth < realMonthOfBirth) {
  //     console.log('Your birthday is approaching');
  //     yearsOld = `${(currentYear - realYearOfBirth) - 1}years`;
  //     console.log(yearsOld);
  //     monthsOld = `${12 - (realMonthOfBirth - currentMonth)}months`;
  //     console.log(monthsOld);
  // } else if(currentMonth > realMonthOfBirth) {
  //     console.log('You did your birthday sometimes ago')
  //     yearsOld = `${(currentYear - realYearOfBirth)}years`;
  //     console.log(yearsOld);
  //     monthsOld = `${currentMonth - realMonthOfBirth}months`;
  //     console.log(monthsOld);
  // }

  // THE MILLISECONDS LEFT TO YOUR BIRTHDAY
  let totalMiliLeft = nextMilliSeconds - currentMilliSeconds;
  let totalDays = totalMiliLeft / 86400000;
  let totalDaysLeft = Math.floor(totalDays);
  let totalHours = (totalDays - totalDaysLeft) * 24;
  let totalHoursLeft = Math.floor(totalHours);
  let totalMinutes = (totalHours - totalHoursLeft) * 60;
  let totalMinutesLeft = Math.floor(totalMinutes);
  let totalSeconds = (totalMinutes - totalMinutesLeft) * 60;
  let totalSecondsLeft = Math.floor(totalSeconds);
  let totalMilliSeconds = (totalSeconds - totalSecondsLeft) * 1000;

  // let millis = currentMilliSeconds - realMilliSecondsOfBirth;
  // let currentSeconds = currentMilliSeconds / 1000;
  // let currentMinutes = currentSeconds / 60;
  // let currentHours = currentMinutes / 60;
  // let currentDays = currentHours / 24;
  // let totalLeftToBirthDay = `There are ${totalDaysLeft}days : ${totalHoursLeft}hours : ${totalMinutesLeft}minutes : ${totalSecondsLeft}seconds left to your birthday`
  // console.log(totalLeftToBirthDay);

  // LIST OF DAYS IN A MONTH
  let daysInEachMonth = [];
  if (nextYOB % 4 == 0) {
    daysInEachMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  // console.log(daysInEachMonth);

  // console.log(totalDaysLeft)
  // console.log(currentMonth);
  // console.log(nextMOB);
  let i = currentMonth + 1;
  let count = 0;
  if (currentMonth > nextMOB) {
    let cond = nextMOB + 12;
    while (i < cond) {
      count += 1;
      i++;
    }
  } else if (currentMonth < nextMOB) {
    let cond = nextMOB;
    while (i < cond) {
      count += 1;
      i++;
    }
  } else if (currentMonth == nextMOB && currentDate > nextDOB) {
    let cond = nextMOB + 12;
    while (i < cond) {
      count += 1;
      i++;
    }
  } else if (currentMonth == nextMOB && currentDate < nextDOB) {
    let cond = nextMOB;
    while (i < cond) {
      count += 1;
      i++;
    }
  } else if (currentMonth == nextMOB && currentDate == nextDOB) {
    let cond = nextMOB + 12;
    while (i < cond) {
      count += 1;
      i++;
    }
  }

  i = currentMonth + 1;
  if (currentMonth > nextMOB) {
    for (; i < daysInEachMonth.length; i++) {
      totalDaysLeft = totalDaysLeft - daysInEachMonth[i];
    }
    for (let i = 0; i < nextMOB; i++) {
      totalDaysLeft = totalDaysLeft - daysInEachMonth[i];
    }
  } else if (currentMonth < nextMOB) {
    for (; i < nextMOB; i++) {
      totalDaysLeft = totalDaysLeft - daysInEachMonth[i];
    }
  } else if (currentMonth == nextMOB && currentDate > nextDOB) {
    for (; i < daysInEachMonth.length; i++) {
      totalDaysLeft = totalDaysLeft - daysInEachMonth[i];
    }
    for (let i = 0; i < nextMOB; i++) {
      totalDaysLeft = totalDaysLeft - daysInEachMonth[i];
    }
  } else if (currentMonth == nextMOB && currentDate == nextDOB) {
    for (; i < daysInEachMonth.length; i++) {
      totalDaysLeft = totalDaysLeft - daysInEachMonth[i];
    }
    for (let i = 0; i < nextMOB; i++) {
      totalDaysLeft = totalDaysLeft - daysInEachMonth[i];
    }
  }
  // console.log(totalDaysLeft)
  let totalLeftToBirthDay = `There are ${count}months : ${totalDaysLeft}days : ${totalHoursLeft}hours : ${totalMinutesLeft}minutes : ${totalSecondsLeft}seconds left to your birthday`;
  // console.log(DetailsOfBirth);
  dateOfBirthDetails.innerHTML = `<li> ${totalLeftToBirthDay} </li>`;
  // setInterval(allDetails, 1000)
}

// console.log(totalDaysLeft)
