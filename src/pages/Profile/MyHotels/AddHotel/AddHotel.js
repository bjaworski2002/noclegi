import {useRef, useState} from 'react'
import Input from "../../../../components/input/Input";
import LoadingButton from "../../../../components/UI/loadingbutton/LoadingButton";

export default function AddHotel(props) {
    const imageRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        city: '',
        rooms: 2,
        features: [],
        image: null,
        status: "0",
        description: ""
    })

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

                    <Input label={"Nazwa"} value={form.name} onChange={value => setForm({...form, name: value})}
                           error={"true"} isError={false}/>
                    <Input label={"Miejscowość"} value={form.city} onChange={value => setForm({...form, city: value})}
                           error={"true"} isError={false}/>
                    <Input label={"Opis"} value={form.description} type={"textarea"}
                           onChange={value => setForm({...form, description: value})}
                           error={"true"} isError={false}/>
                    <Input label={"Ilość pokoi"} value={form.rooms}
                           onChange={value => setForm({...form, rooms: value})}
                           options={[
                               {value: 1, label: 1},
                               {value: 2, label: 2},
                               {value: 3, label: 3},
                               {value: 4, label: 4},
                           ]}
                           type={"select"}
                           error={"true"} isError={false}/>
                    <Input label={"Opis"} value={form.features}
                           onChange={value => setForm({...form, features: value})}
                           options={[
                               {value: 'tv', label: 'TV'},
                               {value: 'wifi', label: 'WI-FI'},
                               {value: 'parking', label: 'Parking'}
                           ]}
                           error={"true"} isError={false} type={"checkbox"}/>
                    <h4>Zdjęcie</h4>
                    <Input type={"file"} onChange={value => setForm({...form, image: value})}/>
                    <h3>Status</h3>
                    <Input label={"radio"} value={form.status}
                           onChange={value => setForm({...form, status: value})}
                           options={[
                               {value: '1', label: 'Aktywny'},
                               {value: '0', label: 'Ukryty'},
                           ]}
                           error={"true"} isError={false} type={"radio"} name={"status"}/>
                    <LoadingButton loading={loading}>Dodaj!</LoadingButton>
                </form>
            </div>
        </div>
    )
}