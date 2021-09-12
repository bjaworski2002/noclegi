import {useRef, useState} from 'react'
import Input from "../../../../components/input/Input";
import LoadingButton from "../../../../components/UI/loadingbutton/LoadingButton";
import {validate} from "../../../../helpers/Validations";

export default function AddHotel(props) {
    const imageRef = useRef()
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: {
            value: '',
            error: '',
            showError: '',
            rules: ['required', {rule: 'min', length: 4}]
        },
        city: {
            value: '',
            error: '',
            showError: '',
            rules: ['required']
        },
        rooms: {
            value: 2,
            error: '',
            showError: '',
            rules: ['required']
        },
        features: {
            value: [],
            error: '',
            showError: '',
            rules: ['required']
        },
        image: {
            value: null,
            error: '',
            showError: '',
            rules: ['required']
        },
        status: {
            value: '0',
            error: '',
            showError: '',
            rules: ['required']
        },
        description: {
            value: "",
            error: '',
            showError: '',
            rules: ['required', {rule: 'min', length: 10}]
        },
    })
    const changeHandler = (value, fieldName) => {
        const error = validate(form[fieldName].rules, value)
        setForm({...form, [fieldName]: {...form[fieldName], value, showError: true, error: error}})
    }
    const submit = e => {
        e.preventDefault()

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    return (
        <div className={"card"}>
            <div className={"card-header"}>Nowy Hotel</div>
            <div className={"card-body"}>
                <p className={"text-muted"}>Uzupełnij dane hotelu</p>
                <form onSubmit={submit}>

                    <Input label={"Nazwa"} value={form.name.value} onChange={value => changeHandler(value, 'name')}
                           error={form.name.error} showError={form.name.showError}/>
                    <Input label={"Miejscowość"} value={form.city.value}
                           onChange={value => changeHandler(value, 'city')}
                           error={form.city.error} showError={form.city.showError}/>
                    <Input label={"Opis"} value={form.description.value} type={"textarea"}
                           onChange={value => changeHandler(value, 'description')}
                           error={form.description.error} showError={form.description.showError}/>
                    <Input label={"Ilość pokoi"} value={form.rooms.value}
                           onChange={value => setForm({...form, rooms: value})}
                           options={[
                               {value: 1, label: 1},
                               {value: 2, label: 2},
                               {value: 3, label: 3},
                               {value: 4, label: 4},
                           ]}
                           type={"select"}
                           error={form.rooms.error} showError={form.rooms.showError}/>
                    <Input label={"Opis"} value={form.features.value}
                           onChange={value => changeHandler(value, 'features')}
                           options={[
                               {value: 'tv', label: 'TV'},
                               {value: 'wifi', label: 'WI-FI'},
                               {value: 'parking', label: 'Parking'}
                           ]}
                           error={form.features.error} showError={form.features.showError} type={"checkbox"}/>
                    <h4>Zdjęcie</h4>
                    <Input type={"file"} onChange={value => changeHandler(value, 'image')}/>
                    <h3>Status</h3>
                    <Input label={"radio"} value={form.status.value}
                           onChange={value => changeHandler(value, 'status')}
                           options={[
                               {value: '1', label: 'Aktywny'},
                               {value: '0', label: 'Ukryty'},
                           ]}
                           error={form.status.error} showError={form.status.showError} type={"radio"} name={"status"}/>
                    <LoadingButton loading={loading}>Dodaj!</LoadingButton>
                </form>
            </div>
        </div>
    )
}