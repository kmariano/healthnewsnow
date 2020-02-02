const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();

export const createUser = ({ name, phoneNumber, city, state }) => {
  //Check to see if the phone number already exists
  //return an error if it does
  const userCollection = firestore.collection("users");
  const userQuery = firestore
    .collection("users")
    .where("phoneNumber", "==", phoneNumber);
  userQuery.get().then(existingUser => {
    if (existingUser.exists) {
      return existingUser;
    } else {
      userCollection
        .add({ name, phoneNumber, city, state, topics: [] })
        .then(newUser => {
          return newUser;
        });
    }
  });
};
