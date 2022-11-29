// import { parse } from "csv-parse";
const { parse } = require("csv-parse");
const fs = require("fs");

const csvData = [];

fs.createReadStream("mix1.csv").pipe(
  parse({
    delimiter: ";",
  })
    .on("data", function (dataRow) {
      csvData.push(dataRow);
    })
    .on("end", function () {
      let nvariables = csvData.length; //строки
      let nobjects = csvData[0].length; //столбцы

      var numberArray = [];
      csvData.forEach((ele) => {
        ele.forEach((data) => numberArray.push(+data));
      });

      const newArr = [];
      while (numberArray.length) newArr.push(numberArray.splice(0, nobjects));

      console.log(newArr);

      // Print the array of numbers
    })
);
