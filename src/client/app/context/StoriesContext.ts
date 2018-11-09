import createContextFactory from "./createContext";

export interface StoryInterface {
  link: string;
  title: string;
  publishedAt: number;
}

export const storiesContext = async () => {
  const mediumKey = "medium_data";
  let stories: [] | StoryInterface[] = [];

  const mediumData = localStorage.getItem(mediumKey);
  if (mediumData) {
    stories = JSON.parse(mediumData);
  } else {
    try {
      const response: Response = await fetch("/medium-api");

      const { payload }: { payload: StoryInterface[] } = await response.json();
      stories = payload;
      localStorage.setItem(mediumKey, JSON.stringify(payload));
    } catch (error) {
      // TODO add notifications component
    }
  }
  return {
    stories
  };
};

const StoriesContext = createContextFactory("Stories", { stories: [] });

export default StoriesContext;
