function nextDate(dayInput, monthInput, yearInput) {
  let day = parseInt(dayInput);
  let month = parseInt(monthInput);
  let year = parseInt(yearInput);

  day++;
  if (day > 31) {
    day = 1;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }
  return day + "/" + month + "/" + year;
}

function result(readline) {
  let result = "";

  let day = 0;
  let month = 0;
  let year = 0;

  readline.question("Enter day: ", (dayInput) => {
    day = parseInt(dayInput);
    if (day > 0 && day <= 31) {
      readline.question("Enter month: ", (monthInput) => {
        month = parseInt(monthInput);
        if (month > 0 && month <= 12) {
          readline.question("Enter year: ", (yearInput) => {
            year = parseInt(yearInput);
            if (year > 0) {
              result = nextDate(day, month, year);
              console.log("Next date is: " + result);
              readline.close();
            } else {
              console.log("***Invalid year***");
              readline.close();
            }
          });
        } else {
          console.log("***Invalid month***");
          readline.close();
        }
      });
    } else {
      console.log("***Invalid day***");
      readline.close();
    }
  });
}

function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let test;

  result(readline);
}
main();
