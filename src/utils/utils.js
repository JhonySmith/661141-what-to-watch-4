export const sortByDate = (items, key = `date`) => [...items]
  .sort((first, second) => Date.parse(second[key]) - Date.parse(first[key]));

export const toDigit = (number) => number < 10 ? `0${number}` : number;

export const toDateTimeAttribute = (iso) => {
  const date = new Date(Date.parse(iso));

  return [date.getFullYear(), toDigit(date.getMonth() + 1), toDigit(date.getDate())].join(`-`);
};

export const getReviewDate = (iso) => {
  const date = new Date(Date.parse(iso));

  const month = date.toLocaleString(`en-US`, {
    month: `long`,
  });

  return `${month} ${toDigit(date.getDate())}, ${date.getFullYear()}`;
};

export const getRatingScore = (rating) => rating.toString().replace(`.`, `,`)
  .split(``).map((char, i, chars) => (i === 0 && i === chars.length - 1) ? char + `,0` : char).join(``);
