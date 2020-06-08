"use strict";

const isWeekend = function (date1) {
   const week = new Date(date1);

   if (week.getDay() === 6 || week.getDay() === 0) {
      console.log("It's weekend!!");
   } else {
      console.log("It's not weekend");
   }
}
isWeekend('2020-2-11');