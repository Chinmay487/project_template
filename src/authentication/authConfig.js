import axios from 'axios';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {NETWORK_URL} from '../links'

const firebaseConfig = {
    apiKey: "",
    appId: "",
    authDomain: "",
    messagingSenderId: "",
    projectId: "",
    storageBucket: "",
}

export const getKeys = () => {
    axios.get(`${NETWORK_URL}/auth/keys`)
    .then((response)=>{
        // console.log(response.data)
        // firebaseConfig.apiKey = response.data.apiKey,
        // firebaseConfig.appId = response.data.appId,
        // firebaseConfig.authDomain = response.data.authDomain,
        // firebaseConfig.messagingSenderId = response.data.messagingSenderId,
        // firebaseConfig.projectId = response.data.projectId,
        // firebaseConfig.storageBucket = response.storageBucket
        firebaseConfig =  {
            ...response.data
        }
    })
    .catch((error)=>{
        console.log("something went wrong")
        return null
    })
}


export const authUser = () => {
    const app = firebase.initializeApp(firebaseConfig)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(googleProvider)
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        alert("something went wrong")
    })
}




