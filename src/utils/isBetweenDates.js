export const isBetweenDates = (dateString, fromString, toString) => {
  const date = new Date(dateString);
  const fromDate = new Date(fromString);
  const toDate = new Date(toString);

  if (
    date.getTime() <= toDate.getTime() &&
    date.getTime() >= fromDate.getTime()
  ) {
    return true;
  } else {
    return false;
  }
};
