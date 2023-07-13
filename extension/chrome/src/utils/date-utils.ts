export const normalizeDate = (
  inputDate: string,
  agencyName: string
): string => {
  const date = new Date(inputDate);

  switch (agencyName) {
    case 'KLM':
      return `${date.getFullYear()}${addLeadingZero(
        date.getMonth() + 1
      )}${addLeadingZero(date.getDate())}`;
    case 'AIRFRANCE':
      return `${date.getFullYear()}${addLeadingZero(
        date.getMonth() + 1
      )}${addLeadingZero(date.getDate())}`;
    case 'QATAR':
      return `${date.getFullYear()}-${addLeadingZero(
        date.getMonth() + 1
      )}-${addLeadingZero(date.getDate())}`;
  }

  return inputDate;
};

const addLeadingZero = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};
