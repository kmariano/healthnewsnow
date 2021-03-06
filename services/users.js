import getConfig from "next/config";
const { Firestore } = require("@google-cloud/firestore");
const { serverRuntimeConfig } = getConfig();

const options = {
  projectId: serverRuntimeConfig.google.firestore.projectId,
  credentials: serverRuntimeConfig.google.firestore.credentials
};
const firestore = new Firestore(options);

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
    const userDocSnapShot = await firestore.doc(documentPath).get();
    if (userDocSnapShot.exists) {
      const userDocReference = await firestore.doc(documentPath);
      await userDocReference.set({ topics }, { merge: true });

      const updatedUserDocSnapShot = await userDocReference.get();

      return {
        id: userId,
        ...updatedUserDocSnapShot.data()
      };
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};
