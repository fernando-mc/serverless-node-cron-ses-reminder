'use strict';

// AWS Boto setup

// AWS SES setup

// AWS Email template setup
// Handlebars?

// 

module.exports.run = (event, context) => {
  const time = new Date();
  console.log(`The serverless SES reminder cron function "${context.functionName}" ran at ${time}`);
  // send email with populated fields

};

