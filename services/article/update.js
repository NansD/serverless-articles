const queryString = require('querystring');
const sanitize = require('mongo-sanitize');
const Article = require('../../models/article');
require('../db');

module.exports.update = async (event, context) => {
  let statusCode = 200;
  let article;
  const message = 'article update endpoint called, article successfully updated';
  const _id = (event.pathParameters && event.pathParameters.hasOwnProperty('_id'))
    ? sanitize(event.pathParameters._id)
    : false;
  const formData = sanitize(queryString.parse(event.body));
  console.log(_id, formData);
  if (!_id) {
    statusCode = 400;
  } else {
    article = await Article.findOneAndUpdate({ _id: formData._id }, formData, { new: true });
  }

  return {
    statusCode,
    body: JSON.stringify({
      message,
      article,
    }),
  };
};
