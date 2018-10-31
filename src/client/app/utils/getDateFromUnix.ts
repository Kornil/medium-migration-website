const Months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

type getDateFromUnixType = (unix: number) => string;

const getDateFromUnix: getDateFromUnixType = unix => {
  const date = new Date(unix);

  const year = date
    .getFullYear()
    .toString()
    .substr(-2);
  const month = date.getMonth();
  const day = date.getDate();

  return `${day} ${Months[month]} ${year}`;
};

export default getDateFromUnix;
