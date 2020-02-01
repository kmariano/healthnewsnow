var cpaas = require("@avaya/cpaas");
var enums = cpaas.enums;

export default async (req, res) => {
  var connector = new cpaas.SmsConnector({
    accountSid: process.env.avayaAccountSID,
    authToken: process.env.avayaAccountToken
  });

  //send sms message
  connector
    .sendSmsMessage({
      to: "+16025866240",
      from: "+15208001174",
      body: "Hello This is a Health Notification text",
      statusCallback: "http://mycallback.url.com",
      statusCallbackMethod: enums.HttpMethod.GET,
      allowMultiple: true
    })
    .then(function(data) {
      res.status(200).json(data);
    });
};
