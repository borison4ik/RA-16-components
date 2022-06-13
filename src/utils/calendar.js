function createCalendar(day) {
  const daysArray = [];
  for (let i = 0; i < 6; i += 1) {
    const weekArr = [];
    for (let j = 0; j < 7; j += 1) {
      weekArr[j] = day.add(1, 'day').clone();
    }
    daysArray[i] = weekArr;
  }
  return daysArray;
}

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isToday(m1, m2) {
  return m1.isSame(m2, 'day');
}
function isActualMonth(m1, m2) {
  return m1.isSame(m2, 'month');
}

export { createCalendar, capitalise, isToday, isActualMonth };
