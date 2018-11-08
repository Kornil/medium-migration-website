var https = require("https");
var mongoose = require("mongoose");

require("dotenv").config();

const storiesUrls = require("../storiesUrls.json");

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.DB_USER,
  { useNewUrlParser: true }
);

var Story = require("../StorySchema");

const migrationScript = () => {
  const stories = storiesUrls.payload;
  stories.forEach((story, i) => {
    https.get(`${story.link}?format=json`, resp => {
      let data = "";
      resp.on("data", chunk => {
        data += chunk;
      });
      resp.on("end", () => {
        const parsedData = JSON.parse(data.replace("])}while(1);</x>", ""));
        const result = {
          mediumUrl: parsedData.payload.value.mediumUrl,
          content: parsedData.payload.value.content.bodyModel.paragraphs,
          firstPublishedAt: parsedData.payload.value.firstPublishedAt
        };
        var story = new Story(result);
        Story.findOne({ mediumUrl: result.mediumUrl })
          .then(existingStory => {
            if (existingStory) {
              Story.findOneAndUpdate({ mediumUrl: result.mediumUrl }, story);
              console.log("Story updated!");
            } else {
              story.save(function(err) {
                if (!err) console.log("Story added!");
              });
            }
          })
          .catch(err => console.log(err));
      });
    });
  });
};

migrationScript();
