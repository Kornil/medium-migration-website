type getDateFromUnixType = (unix: number) => string;

const getDateFromUnix: getDateFromUnixType = unix => {
  const date = new Date(unix);

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${day}/${month}/${year}`;
};

export default getDateFromUnix;
