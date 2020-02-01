const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    avayaAccountSID: process.env.AVAYA_ACCOUNT_SID,
    avayaAccountToken: process.env.AVAYA_ACCOUNT_TOKEN,
    googleAPIKey: process.env.GOOGLE_API_KEY,
    googleSearchCX: process.env.GOOGLE_SEARCH_CX
  }
});
