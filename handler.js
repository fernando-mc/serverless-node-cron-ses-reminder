'use strict';

module.exports.sendReminder = (event, context, callback) => {
    
    var AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    var ses = new AWS.SES();
    var fs = require('fs');

    var emailHtml = fs.readFileSync('./reminder.html', 'utf-8');
    var toAndFromAdress = 'verifiedemail@yourdomain.com'
    var params = {
        Destination: {
            ToAddresses: [toAndFromAdress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8", 
                    Data: emailHtml
                }, 
                Text: {
                    Charset: "UTF-8", 
                    Data: "Remember to continue helping the Woof Garden in your Pluralsight course!"
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: "Woof Garden Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAdress],
        Source: toAndFromAdress, 
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack); 
        // successful response
        else callback(null, data);
    }); 
};
