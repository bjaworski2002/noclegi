import {useState} from 'react'
import useAuth from "../../../components/hooks/useauth/useAuth";
import {useHistory} from "react-router-dom";
import LoadingButton from "../../../components/UI/loadingbutton/LoadingButton";

export default function Login(props) {

    const [auth, setAuth] = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        console.log(email, password)
        setLoading(true)
        setTimeout(() => {
            setAuth(true)
            history.push('/')
        }, 500)
    }

    return (
        <div className={"p-4"}>
            <h2>Logowanie</h2>
            <form onSubmit={submit}>
                <div className={"form-group"}>
                    <label>Email</label>
                    <input type={"email"} name={"email"} className={"form-control"} value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={"form-group"}>
                    <label>Hasło</label>
                    <input type={"password"}
                           name={"password"}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder={"***** ***"}
                           className={"form-control"}
                    />
                </div>
                <LoadingButton loading={loading}/>
            </form>
        </div>
    )
}