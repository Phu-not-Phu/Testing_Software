function result(readline) {
  let result = "";

  let day = 0;
  let month = 0;
  let year = 0;

  readline.question("Enter year: ", (yearInput) => {
    year = parseInt(yearInput);
    if (year > 0) {
      readline.question("Enter month: ", (monthInput) => {
        month = parseInt(monthInput);
        if (month > 0 && month <= 12) {
          readline.question("Enter day: ", (dayInput) => {
            day = parseInt(dayInput);
            if (day > 0 && day <= 31) {
              result = day + "/" + month + "/" + year;
              console.log("Today is: " + result);
              readline.close();
            } else {
              console.log("***Invalid day***");
              readline.close();
            }
          });
        } else {
          console.log("***Invalid month***");
          readline.close();
        }
      });
    } else {
      console.log("***Invalid year***");
      readline.close();
    }
  });
}

function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  result(readline);
}
main();
