import firebase from "firebase/compat/app";
import "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  getAdditionalUserInfo,
} from "firebase/auth";

import "firebase/compat/app";
import { checkAuthTimeout,getFirebaseKeys } from "../user";


// const saveUserdata = () => {
//   firebase
//       .auth()
//       .currentUser.getIdToken(/* forceRefresh */ true)
//       .then((idToken) => {
//         console.log(idToken);
//         const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
//         window.localStorage.setItem("idToken", idToken);
//         window.localStorage.setItem("expiration", expirationDate);
//         checkAuthTimeout(expirationDate);
//         window.location.reload();
//       })
//       .catch((error) => {
//         // console.log(error);
//       });
// }


export const loginUserWithGoogle = async() => {
    // console.log("Process Start");
    const firebaseKeys = await getFirebaseKeys()
    firebase.initializeApp(firebaseKeys);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        // console.log(result)
        // console.log("saving idToken");
        const details = getAdditionalUserInfo(result);
        console.log(details.profile.email)
        console.log(details.profile.picture);
        console.log(details.profile.name);
        const idToken = result._tokenResponse.idToken;
        // console.log(idToken);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        window.localStorage.setItem("idToken", idToken);
        window.localStorage.setItem("expiration", expirationDate);
        window.localStorage.setItem("pic",details.profile.picture);  
        window.localStorage.setItem("userName",details.profile.name);
        window.localStorage.setItem("userEmail",details.profile.email);
        // console.log("idtoken saved");
        // saveUserdata();
        // checkAuthTimeout(3600);
        window.location.reload();
        // console.log(details.profile.name);
        // saveInfo();
        // getToken();
      })
      .catch((error) => {
        console.log(error);
      });
  };
