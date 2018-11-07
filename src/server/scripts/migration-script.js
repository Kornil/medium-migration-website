var https = require("https");
var mongoose = require("mongoose");

require("dotenv").config();

const storiesUrls = require("../storiesUrls.json");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_USER);

const Schema = mongoose.Schema;

var StorySchema = new Schema({
  payload: {
    value: {
      firstPublishedAt: Number,
      mediumUrl: String,
      content: {
        bodyModel: {
          paragraphs: [Schema.Types.Mixed]
        }
      }
    }
  }
});

var BlogPost = mongoose.model("Stories", StorySchema);

const migrationScript = () => {
  const stories = storiesUrls.payload;
  stories.forEach((story, i) => {
    https.get(`${story.link}?format=json`, resp => {
      let data = "";
      resp.on("data", chunk => {
        data += chunk;
      });
      resp.on("end", () => {
        // create a blog post
        var post = new BlogPost(
          JSON.parse(data.replace("])}while(1);</x>", ""))
        );
        post.save(function(err) {
          if (!err) console.log("Success!");
        });
      });
    });
  });
};

migrationScript();
