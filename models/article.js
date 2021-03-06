
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },

  link: {
    type: String,
    required: true
  },

  snippet: {
    type: String,
    required: true
  },
  
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },

  articleCreated: {
    type: Date,
    default: Date.now
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;