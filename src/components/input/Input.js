import {useRef} from 'react'

const InputText = (props) => {
    return (
        <div className={"form-group"}>
            <label>{props.label}</label>
            <input type={"text"}
                   className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`}
                   value={props.value}
                   onChange={e => props.onChange(e.target.value)}
            />
            <div className={"invalid-feedback"}>{props.error}</div>
        </div>
    )
}

const InputTextArea = (props) => {
    return (
        <div className={"form-group"}>
            <label>{props.label}</label>
            <textarea
                className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
            />
            <div className={"invalid-feedback"}>{props.error}</div>
        </div>
    )
}


const InputSelect = (props) => {
    return (
        <div className={"form-group"}>
            <label>{props.label}</label>
            <select value={props.value}
                    className={`form-control ${props.error && props.showError ? 'is-invalid' : ''}`}
                    onChange={e => props.onChange(e.target.value)}>
                {props.options.map(option => {
                    return <option value={option.value} key={option.value}>{option.label}</option>
                })}
            </select>
            <div className={"invalid-feedback"}>{props.error}</div>
        </div>
    )
}

const InputCheckbox = (props) => {
    const changeFeatureHandler = e => {
        const value = e.target.value
        const isChecked = e.target.checked
        if (isChecked) {
            const newValue = [...props.value, value]
            //setForm({...form, features: newFeatures})
            props.onChange(newValue)
        } else {
            const newValue = props.value.filter(x => x !== value)
            props.onChange(newValue)
        }
    }
    return (
        <>
            <h3>Udogodnienia</h3>
            <div className={"form-group"}>
                {props.options.map(option => (
                    <div className={"custom-control custom-checkbox"} key={option.value}>
                        <label className={"custom-control-label"}>
                            {option.label} <input type={"checkbox"} value={option.value}
                                                  checked={props.value.find(x => x === option.value)}
                                                  onChange={changeFeatureHandler}/>
                        </label>
                    </div>
                ))}
                <div className={"invalid-feedback"}>Błąd</div>
            </div>
        </>
    )
}

const InputFile = (props) => {
    const fileRef = useRef()
    const changeHandler = (e) => {
        const value = e.target.files[0];
        props.onChange(value)
    }
    return (
        <>
            <h3>Zdjęcie</h3>
            <div className={"form-group"}>
                <input type={"file"} ref={fileRef} onChange={changeHandler}/>
            </div>
        </>
    )
}

const InputRadio = (props) => {
    return (
        <div className={"form-group"}>
            {props.options.map(option => (
                <div className={"custom-control custom-radio"} key={option.value}>
                    <label>{option.label} </label>
                    <input type={"radio"}
                           id={`radio-${option.value}-${props.name}`}
                           name={props.name}
                           value={option.value}
                           checked={props.value === option.value}
                           onChange={e => props.onChange(e.target.value)}
                    />
                </div>
            ))}
        </div>
    )
}
export default function Input(props) {
    switch (props.type) {
        case 'text':
            return <InputText {...props} />
        case 'textarea':
            return <InputTextArea {...props} />
        case 'select':
            return <InputSelect {...props}/>
        case 'checkbox':
            return <InputCheckbox {...props}/>
        case 'file':
            return <InputFile {...props}/>
        case 'radio':
            return <InputRadio {...props}/>
    }
}
Input.defaultProps =
    {
        type: 'text',
        isValid: true,
        showError: false
    };