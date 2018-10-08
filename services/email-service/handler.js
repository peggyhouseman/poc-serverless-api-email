
'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

/*
module.exports.sendEmail = (event, context, callback) => {
  callback(null, { message: 'Go Serverless! Simulating sending emails successful.', event });
};
*/

module.exports.sendEmail = (event, context, callback) => {
  callback(null, { statusCode: 200, body:JSON.stringify({ message: 'Go Serverless! Simulating sending emails successful.', event})});
}
