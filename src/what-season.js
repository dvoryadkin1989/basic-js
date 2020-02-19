function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Invalid input param " + date);
  }
  const month = date.getMonth();
  if (month < 2 || month === 11) {
    return "winter"
  }
  if (month < 5) {
    return "spring"
  }
  if (month < 8) {
    return "summer"
  }
  return "fall"
}

module.exports = getSeason;