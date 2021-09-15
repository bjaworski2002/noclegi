import Input from "../../../components/input/Input";
import LoadingButton from "../../../components/UI/loadingbutton/LoadingButton";
import {useState} from 'react'
import {validate} from "../../../helpers/Validations";
import axiosAuth from "../../../axiosAuth";
import useAuth from "../../../components/hooks/useauth/useAuth";
import {useHistory} from "react-router-dom";

export default function Register(props) {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [auth, setAuth] = useAuth()
    const [form, setForm] = useState({
        email: {
            value: '',
            error: '',
            showError: '',
            rules: ['required', 'email']
        },
        password: {
            value: '',
            error: '',
            showError: '',
            rules: ['required']
        },
    })
    const [error, setError] = useState('')
    const valid = !Object.values(form).map(input => input.error).filter(error => error).length;

    const submit = async e => {
        try {
            e.preventDefault()
            setLoading(true)
            const res = await axiosAuth.post('/accounts:signUp', {
                email: form.email.value,
                password: form.password.value,
                returnSecureToken: true,
            })
            setAuth({
                email: res.data.email,
                token: res.data.token,
                userId: res.data.idToken
            })
            history.push('/')
        } catch (ex) {
            console.log(ex.response)
            setError(ex.response.data.error.message)
            setLoading(false)
        }
    }
    const changeHandler = (value, fieldName) => {
        const error = validate(form[fieldName].rules, value)
        setForm({...form, [fieldName]: {...form[fieldName], value, showError: true, error: error}})
    }
    if (auth) {
        history.push('/')
    }
    return (
        <div className={"card"}>
            <div className={"card-header"}>Rejestracja</div>
            <div className={"card-body"}>
                <p className={"text-muted"}>Uzupełnij dane </p>
                <form onSubmit={submit}>
                    <Input label={"Email"} value={form.email.value} onChange={value => changeHandler(value, 'email')}
                           error={form.email.error} showError={form.email.showError}/>
                    <Input label={"Haslo"} value={form.password.value} type={"password"}
                           onChange={value => changeHandler(value, 'password')}
                           error={form.password.error} showError={form.password.showError}/>
                    {error ? (<div className={"alert alert-danger"}>{error}</div>) : null}
                    <LoadingButton loading={loading} disabled={!valid}>Dodaj!</LoadingButton>
                </form>
            </div>
        </div>

    )
}