var cpaas = require("@avaya/cpaas");
var enums = cpaas.enums;
var connector = new cpaas.SmsConnector({
  accountSid: process.env.avayaAccountSID,
  authToken: process.env.avayaAccountToken
});

export default async (req, res) => {
  if (req.method === "POST") {
    const { to, message } = req.body;
    connector
    .sendSmsMessage({
      to,
      from: "+15208001174",
      body: message,
      statusCallback: "http://mycallback.url.com",
      statusCallbackMethod: enums.HttpMethod.GET,
      allowMultiple: true
    })
    .then(function(data) {
      res.status(200).json(data);
    });
  }
};
