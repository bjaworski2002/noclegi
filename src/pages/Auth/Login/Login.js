import {useState} from 'react'
import useAuth from "../../../components/hooks/useauth/useAuth";
import {useHistory} from "react-router-dom";
import LoadingButton from "../../../components/UI/loadingbutton/LoadingButton";
import axiosAuth from "../../../axiosAuth";

export default function Login(props) {

    const [auth, setAuth] = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [valid, setValid] = useState(null)
    const [error, setError] = useState('')
    const history = useHistory()

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axiosAuth.post('/accounts:signInWithPassword', {
                email,
                password,
                returnSecureToken: true,
            })
            console.log(res)
            setLoading(false)
            setAuth({
                email: res.data.email,
                token: res.data.token,
                userId: res.data.idToken
            })
            history.push('/')
        } catch (ex) {
            setError(ex.response.data.error.message)
            console.log(ex.response)
            setLoading(false)
        }
    }
    if (auth) {
        history.push('/')
    }
    return (
        <div className={"p-4"}>
            <h2>Logowanie</h2>
            {valid === false ? (<div className={"alert alert-danger"}>
                Niepoprawne dane logowania
            </div>) : null}
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
                {error ? (<div className={"alert alert-danger"}>{error}</div>) : null}
                <LoadingButton loading={loading}/>
            </form>
        </div>
    )
}