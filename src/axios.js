import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-hotel-app-7c7c8-default-rtdb.europe-west1.firebasedatabase.app'
})
export default instance;