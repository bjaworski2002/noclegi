import Input from "../../../components/input/Input";
import LoadingButton from "../../../components/UI/loadingbutton/LoadingButton";
import {useState} from 'react'
import {validate} from "../../../helpers/Validations";
import axios from "../../../axios";

export default function Register(props) {
    const [loading, setLoading] = useState(false)

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
    const valid = !Object.values(form).map(input => input.error).filter(error => error).length;

    const submit = async e => {
        e.preventDefault()
        setLoading(true)
        const res = await axios.get('/users.json')
        console.log(res)

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }
    const changeHandler = (value, fieldName) => {
        const error = validate(form[fieldName].rules, value)
        setForm({...form, [fieldName]: {...form[fieldName], value, showError: true, error: error}})
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
                    <LoadingButton loading={loading} disabled={!valid}>Dodaj!</LoadingButton>
                </form>
            </div>
        </div>

    )
}