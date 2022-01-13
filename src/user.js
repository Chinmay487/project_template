import firebase from "firebase/compat/app";
import axios from "axios";
import { NETWORK_URL } from "./links";

// firebase.initializeApp()

const getFirebaseKeys = async () => {
  const keys = await axios.get(`${NETWORK_URL}/auth/keys`);
  // console.log(response.data)
  return keys.data;
};

const getUserData = async () => {
  const firebaseKey = await getFirebaseKeys();
  const app = firebase.initializeApp(firebaseKey);
  const user = firebase.auth().currentUser;

  // if (user !== null){
  //     const idToken = await user.getIdToken(/* forceRefresh */ true)
  //     return {
  //         name : user.displayName,
  //         email : user.email,
  //         photoUrl : user.photoURL,
  //         idToken : idToken
  //     }
  // }
  return user;
};

// getFirebaseKeys()

export { getFirebaseKeys, getUserData };
