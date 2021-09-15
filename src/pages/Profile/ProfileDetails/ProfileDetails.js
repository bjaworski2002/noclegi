import {useEffect, useState} from "react";
import LoadingButton from "../../../components/UI/loadingbutton/LoadingButton";
import validateEmail from "../../../helpers/Validations"
import useAuth from "../../../components/hooks/useauth/useAuth";
import axiosAuth from "../../../axiosAuth";

export default function ProfileDetails(props) {
    const [auth, setAuth] = useAuth()
    const [email, setEmail] = useState(auth.email)
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const [success, setSuccess] = useState(false)
    const buttonDisabled = Object.values(errors).filter(x => x).length;

    const submit = async (e) => {
        e.preventDefault()

        const data = {
            idToken: auth.token,
            email: email,
            returnSecureToken: true,
        }
        if (password) {
            data.password = password
        }
        try {
            const res = await axiosAuth.post('accounts:update', data)
            setAuth({
                email: res.data.email,
                token: res.data.token,
                userId: res.data.idToken
            })
            setSuccess(true)
        } catch (ex) {

        }
        setLoading(false)
    }

    const emailHandler = useEffect(() => {
        if (validateEmail(email)) {
            setErrors({...errors, email: ''})
        } else {
            setErrors({...errors, email: 'Niepoprawny Email'})
        }
    }, [email])

    const passwordHandler = useEffect(() => {
        if (password.length >= 4 || !password) {
            setErrors({...errors, password: ''})
        } else {
            setErrors({...errors, password: 'Wymagane 4 znaki!'})
        }
    }, [password])
    return (
        <form onSubmit={submit}>
            {success ? (<div className={"alert alert-success"}>Dane zapisane</div>) : null}
            <div className={"form-group"}>
                <label>Email</label>
                <input type={"email"} name={"email"}
                       className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <div className={"invalid-feedback"}>{errors.email}</div>
            </div>
            <div className={"form-group"}>
                <label>Hasło</label>
                <input type={"password"}
                       name={"password"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder={"***** ***"}
                       className={`form-control ${errors.password ? 'is-invalid' : 'is-valid'}`}
                />
                <div className={"invalid-feedback"}>{errors.password}</div>
            </div>
            <LoadingButton loading={loading} disabled={buttonDisabled}/>
        </form>
    )
}