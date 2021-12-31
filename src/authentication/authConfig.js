import firebase from "firebase/compat/app";
import "firebase/compat/auth";


export const authUser = (app) => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(googleProvider)
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        alert("something went wrong")
    })
}




