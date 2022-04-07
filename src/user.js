import firebase from "firebase/compat/app";
import axios from "axios";
import { NETWORK_URL } from "./links";

const getFirebaseKeys = async () => {
  const keys = await axios.get(`${NETWORK_URL}/auth/keys`);
  return keys.data;
};

const logoutUser = () => {
  // alert("calling logout")
  getFirebaseKeys()
    .then((keys) => {
      // console.log("logging Out")
      firebase.initializeApp(keys);
      window.localStorage.removeItem("idToken");
      window.localStorage.removeItem("expiration");
      window.localStorage.removeItem("pic");
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.reload();
        })
        .catch("firebase error");
    })
    .catch((error) => {
      console.log("something went wrong");
    });
};

const checkAuthTimeout = (expirationDate) => {
  // alert("in check auth timeout");
  setTimeout(
      () => {
        logoutUser()
      },
      expirationDate * 1000
  )
}

const setCurrentAuthState = () => {
  const idToken = window.localStorage.getItem("idToken")
  if(idToken === undefined){
    return logoutUser()
  } else {
    const expirationDate = new Date(localStorage.getItem('expiration'));
    if(expirationDate <= new Date()){
      return logoutUser()
  } else {
      const remainingTime = (expirationDate.getTime() - new Date().getTime())/1000
      return checkAuthTimeout(remainingTime);
  }

  }
}

export { getFirebaseKeys, logoutUser,setCurrentAuthState,checkAuthTimeout };
