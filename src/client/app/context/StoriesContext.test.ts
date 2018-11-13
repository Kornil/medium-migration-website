import fetchMock from "fetch-mock";

import { storiesContext } from "./StoriesContext";

fetchMock.get(`*`, JSON.stringify({ payload: [{ hello: `world!` }] }));

const successData = {
  stories: [{ hello: "world!" }]
};

describe("ArticleContext ", () => {
  it("fetches data", async () => {
    const data = await storiesContext();

    expect(data).toEqual(successData);
  });
});
