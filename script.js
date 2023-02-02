let select1 = document.getElementById('start-date');
const displayParagraph = document.getElementById('sign-back-date');
const displayParagraphCanada = document.getElementById('cad-sign-back-date');


let march6 = {
    start: "Monday, March 6th, 2023",
    signback: "Friday, February 17th, 2023",
    cadsignback: "February 10th, 2023"
}

let march13 = {
    start: "Monday, March 13th, 2023",
    signback: "February 24th, 2023",
    cadsignback: "Friday, February 17th, 2023"
}

let march20 = {
    start: "Monday, March 20th, 2023",
    signback: "Friday, March 3rd, 2023",
    cadsignback:"February 24th, 2023"
}

let march27 = {
    start: "Monday, March 27th, 2023",
    signback: "Friday,  March 10th, 2023",
    cadsignback:"Friday, March 3rd, 2023"
}

let april3 = {
    start: "Monday, April 3rd, 2023",
    signback: "Friday, March 17th, 2023",
    cadsignback:"Friday,  March 10th, 2023"
}

let april0 = {
    start: "Monday, April 10th, 2023",
    signback: "Friday, March 24th, 2023",
    cadsignback:"Friday, March 17th, 2023"
}

let april17 = {
    start: "Monday, April 17th, 2023",
    signback: "Friday, March 31st, 2023",
    cadsignback:"Friday, March 24th, 2023"
}

let april24 = {
    start: "Monday, April 24th, 2023",
    signback: "Friday, April 7th, 2023",
    cadsignback:"Friday, March 31st, 2023"
}

let may1 = {
    start: "Monday, May 1st, 2023",
    signback: "Friday, April 14th, 2023",
    cadsignback:"Friday, April 7th, 2023"
}
let may8 = {
    start: "Monday, May 8th, 2023",
    signback: "Friday, April 21st, 2023",
    cadsignback:"Friday, April 14th, 2023"
}
let may15 = {
    start: "Monday, May 15th, 2023",
    signback: "Friday, April 28th, 2023",
    cadsignback:"Friday, April 21st, 2023"
}
let may22 = {
    start: "Monday, May 22nd, 2023",
    signback: "Friday, May 5th, 2023",
    cadsignback:"Friday, April 28th, 2023"
}
let may30 = {
    start: "Tuesday, May 30th, 2023",
    signback: "Friday, May 12th, 2023",
    cadsignback:"Friday, May 5th, 2023"
}
let june5 = {
    start: "Monday, June 5th, 2023",
    signback: "Friday, May 19th, 2023",
    cadsignback:"Friday, May 12th, 2023"
}
let june12 = {
    start: "Monday, June 12th, 2023",
    signback: "Friday, May 26th, 2023",
    cadsignback:"Friday, May 19th, 2023"
}
let june20 = {
    start: "Tuesday, June 20th, 2023",
    signback: "Friday, June 2nd, 2023",
    cadsignback:"Friday, May 26th, 2023"
}
let june26 = {
    start: "Monday, June 26th, 2023",
    signback: "Friday, June 9th, 2023",
    cadsignback:Friday, June 2nd, 2023"
}






let dates = [march6, march13, march20, march27, april3, april0, april17, april24, may1, may8, may15, may22, may30, june5, june12, june20, june26]

for (let obj of dates) {
    let option = document.createElement("option");
    option.text = obj.start;
    option.value = JSON.stringify(obj);
    select1.add(option);
  }


  const displaySignback = () => {
    let selected1 = document.getElementById('start-date').value;
    let desiredDate = JSON.parse(selected1);
    displayParagraph.innerHTML = `USA: ${desiredDate.signback}`
    displayParagraphCanada.innerHTML = `CANADA: ${desiredDate.cadsignback}`



  }