today = new Date();
const left = new Date(today.getFullYear(), 11, 30);
if (today.getMonth() == 11 && today.getDate() > 30) {
    left.setFullYear(left.getFullYear() + 1);
}
let oneDay = 1000 * 60 * 60 * 24;
console.log(oneDay);
console.log(Math.ceil((left.getTime() - today.getTime()) / (oneDay)) +
    " days left!");
    