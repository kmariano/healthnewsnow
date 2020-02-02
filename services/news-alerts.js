const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();
/**
 *
 * News Alert
 *    userId
 *    topic
 *    searchResults [SearchResult]
 *
 * SearchResult
 *    source: ''
 *    text: ''
 *
 */
export const findNewsAlertByUserId = async userId => {};

export const getUserAlerts = async userId => {};
