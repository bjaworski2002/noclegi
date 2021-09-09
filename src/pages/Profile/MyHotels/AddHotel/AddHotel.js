import {useRef, useState} from 'react'
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
    const changeFeatureHandler = e => {
        const value = e.target.value
        const isChecked = e.target.checked
        if (isChecked) {
            const newFeatures = [...form.features, value]
            setForm({...form, features: newFeatures})
        } else {
            const newFeatures = form.features.find(x => x !== value)
            setForm({...form, features: newFeatures})
        }
    }
    return (
        <div className={"card"}>
            <div className={"card-header"}>Nowy Hotel</div>
            <div className={"card-body"}>
                <p className={"text-muted"}>Uzupełnij dane hotelu</p>
                <form onSubmit={submit}>
                    <div className={"form-group"}>
                        <label>Nazwa</label>
                        <input type={"text"}
                               className={`form-control ${false ? 'is-invalid' : ''}`}
                               value={form.name}
                               onChange={e => setForm({...form, name: e.target.value})}
                        />
                        <div className={"invalid-feedback"}>Błąd</div>
                    </div>
                    <div className={"form-group"}>
                        <label>Miejscowość</label>
                        <input type={"text"}
                               className={`form-control ${false ? 'is-invalid' : ''}`}
                               value={form.city}
                               onChange={e => setForm({...form, city: e.target.value})}
                        />
                        <div className={"invalid-feedback"}>Błąd</div>
                    </div>
                    <div className={"form-group"}>
                        <label>Opis</label>
                        <textarea type={"email"}
                                  className={`form-control ${false ? 'is-invalid' : ''}`}
                                  value={form.description}
                                  onChange={e => setForm({...form, description: e.target.value})}
                        />
                        <div className={"invalid-feedback"}>Błąd</div>
                    </div>
                    <div className={"form-group"}>
                        <label>Ilość Pokoi</label>
                        <select value={form.rooms} className={"form-control"}
                                onChange={e => setForm({...form, rooms: e.target.value})}>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                        </select>
                        <div className={"invalid-feedback"}>Błąd</div>
                    </div>

                    <h3>Udogodnienia</h3>
                    <div className={"form-group"}>
                        <div className={"custom-control custom-checkbox"}>
                            <label className={"custom-control-label"}>
                                TV <input type={"checkbox"} value={"tv"} checked={form.features.find(x => x === 'tv')}
                                          onChange={changeFeatureHandler}/>
                            </label>
                        </div>
                        <div className={"custom-control custom-checkbox"}>
                            <label className={"custom-control-label"}>
                                Wifi <input type={"checkbox"} value={"wifi"}
                                            checked={form.features.find(x => x === 'wifi')}
                                            onChange={changeFeatureHandler}/>
                            </label>
                        </div>
                        <div className={"custom-control custom-checkbox"}>
                            <label className={"custom-control-label"}>
                                Parking <input type={"checkbox"}
                                               value={"parking"}
                                               checked={form.features.find(x => x === 'parking')}
                                               onChange={changeFeatureHandler}
                            />
                            </label>
                        </div>
                        <div className={"invalid-feedback"}>Błąd</div>
                    </div>
                    <h3>Zdjęcie</h3>
                    <div className={"form-group"}>
                        <input type={"file"} ref={imageRef} onChange={e => setForm({...form, image: e.target.files})}/>
                    </div>
                    <h3>Status</h3>
                    <div className={"form-group"}>
                        <div className={"custom-control custom-radio"}>
                            <label>Aktywny </label>
                            <input type={"radio"}
                                   name={"active"}
                                   value={"1"}
                                   checked={form.status === "1"}
                                   onChange={e => setForm({...form, status: e.target.value})}
                            />
                        </div>
                        <div className={"custom-control custom-radio"}>
                            <label>Ukryty </label>
                            <input type={"radio"}
                                   name={"active"}
                                   value={"0"}
                                   checked={form.status === "0"}
                                   onChange={e => setForm({...form, status: e.target.value})}
                            />
                        </div>
                        <LoadingButton loading={loading}>Dodaj!</LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    )
}