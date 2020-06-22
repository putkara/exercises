"use strict";


const currentDay = new Date();
const eventDay = new Date(2021, 2, 11);

const bookEventDay = function (date, bookedDay) {
    if (date > bookedDay) {
        console.log(`We don't have tickets`);
    } else {
        console.log(`We  have tickets ${bookedDay}`);

    }
}

bookEventDay(currentDay, eventDay);