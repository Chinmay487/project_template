import axios from 'axios';
import { NETWORK_URL } from '../links';

export const initiatePayment = () => {
    const idToken = window.localStorage.getItem("idToken")
    axios.get(`${NETWORK_URL}/payment/initiate`)
    .then((response)=>{
        return response.data
    }
    )
    .catch((error)=>{
        return null
    })
}