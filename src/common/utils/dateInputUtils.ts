/**
 * Takes a string from a date input and converts it into a JavaScript date object
 *
 * @param dateString the date from a form date input
 * @returns a JavaScript Date object
 */
export const inputStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split("/");

  return new Date(`${year}-${month}-${day}`);
};

/**
 * Takes a JavaScript Date object and converts it to a string formatted yyyy-MM-dd
 *
 * @param date a JavaScript Date object
 * @returns a date string, formatted to yyyy-MM-dd
 */
export const dateToInputString = (date: Date): string => {
  const dateISOString = date.toISOString();

  return dateISOString.split("T")[0];
};
