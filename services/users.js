const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();

export const create = async ({ name, phoneNumber, city, state }) => {
  //Check to see if the phone number already exists
  //return an error if it does
  const userCollection = firestore.collection("users");
  const userQuery = firestore
    .collection("users")
    .where("phoneNumber", "==", phoneNumber);

  const userQuerySnapshot = await userQuery.limit(1).get();

  if (!userQuerySnapshot.empty) {
    const user = userQuerySnapshot.docs[0];
    return {
      id: user.id,
      ...user.data()
    };
  }

  const newUserDocReference = await userCollection.add({
    name,
    phoneNumber,
    city,
    state,
    topics: []
  });
  const newUser = await newUserDocReference.get();
  return { id: newUser.id, ...newUser.data() };
};
