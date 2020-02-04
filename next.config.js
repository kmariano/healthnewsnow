const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    avayaAccountSID: process.env.AVAYA_ACCOUNT_SID,
    avayaAccountToken: process.env.AVAYA_ACCOUNT_TOKEN,
    googleAPIKey: process.env.GOOGLE_API_KEY,
    googleSearchCX: process.env.GOOGLE_SEARCH_CX
  },
  serverRuntimeConfig: {
    avaya: {
      accountSID: process.env.AVAYA_ACCOUNT_SID,
      accountToken: process.env.AVAYA_ACCOUNT_TOKEN
    },
    google: {
      firestore: {
        projectId: "health-news-now",
        credentials: {
          client_email: process.env.GOOGLE_FIRESTORE_USER_EMAIL,
          private_key: process.env.GOOGLE_FIRESTORE_PRIVATE_KEY
        }
      },
      search: {
        apiKey: process.env.GOOGLE_API_KEY,
        searchCX: process.env.GOOGLE_SEARCH_CX
      }
    }
  }
});
