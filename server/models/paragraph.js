const mongoose = require('mongoose');

// delete already existing model because of this issue : https://github.com/kriasoft/react-starter-kit/issues/1418
// see this answer : https://github.com/kriasoft/react-starter-kit/issues/1418#issuecomment-334913935
// this line doesn't crash if no model exists
delete mongoose.connection.models.Paragraph;

// we use embedded Data models because it suits our needs (https://docs.mongodb.com/manual/core/data-model-design/)
const paragraphSchema = mongoose.Schema({
  articleId: String,
  order: Number,
  content: String,
});
const Paragraph = mongoose.model('Paragraph', paragraphSchema);
module.exports = Paragraph;
