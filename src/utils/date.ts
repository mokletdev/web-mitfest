export function getMonthName(month: number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month];
}

export function stringifyDate(date: Date) {
  const year = date.getFullYear(),
    month = getMonthName(date.getMonth()),
    day = date.getDate();
  return `${day} ${month} ${year}`;
}

export function stringifyTime(time: Date) {
  const hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

export function convertTimezone(date: Date, tzString: string) {
  return new Date(date.toLocaleString("en-US", { timeZone: tzString }));
}
