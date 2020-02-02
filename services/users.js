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

export const findById = async userId => {
  const documentPath = `users/${userId}`;
  const userDocSnapShot = await firestore.doc(documentPath).get();

  if (userDocSnapShot.exists) {
    return {
      id: userDocSnapShot.id,
      ...userDocSnapShot.data()
    };
  }
  return null;
};

export const setTopics = async ({ userId, topics }) => {
  try {
    const documentPath = `users/${userId}`;
    console.log("Document Path", documentPath);
    const userDocReference = await firestore.doc(documentPath);
    await userDocReference.set({ topics }, { merge: true });

    const userDocSnapShot = await userDocReference.get();
    // console.log("Document Snapshot", userDocSnapShot.data());
    return {
      id: userDocSnapshot.id,
      ...userDocSnapShot.data()
    };
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};
