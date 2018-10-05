import getDateFromUnix from "./getDateFromUnix";

const input = 1530736049131;
const result = "04/07/2018";

it("formats unix timestamp into dd/mm/yyyy", () => {
  const output = getDateFromUnix(input);

  expect(output).toMatch(result);
});
