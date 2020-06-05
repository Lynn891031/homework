let topicsArray =　[
    "牛排",
    "拉麵",
    "不想吃",
    "咖哩飯",
    "不想吃",
    "漢堡"
];

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);