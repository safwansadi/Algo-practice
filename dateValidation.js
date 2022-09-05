function dateIsValid(dateStr) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  const date = new Date(dateStr);

  const timestamp = date.getTime();

  console.log(timestamp);

  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(dateStr);
}

console.log(dateIsValid(undefined)); // 👉️ true
// console.log(dateIsValid("2022-01-35")); // 👉️ false
// console.log(dateIsValid("hello")); // 👉️ false
