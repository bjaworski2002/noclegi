import {useContext} from 'react'
import {AuthContext} from "../../context/Context";

export default function useAuth() {

    const authContext = useContext(AuthContext)

    const auth = authContext.isAuthenticated;

    const setAuth = (value) => {
        console.log(value)
        if (value) {
            authContext.login()
        } else {
            authContext.logout()
        }
    }
    return [auth, setAuth]
}