var mongoose = require("mongoose");

const Schema = mongoose.Schema;

var StorySchema = new Schema({
  firstPublishedAt: Number,
  mediumUrl: String,
  content: [Schema.Types.Mixed]
});
module.exports = mongoose.model("Stories", StorySchema);
