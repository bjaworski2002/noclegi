import {useContext, useEffect, useRef, useState} from 'react'
import {Button} from 'reactstrap'
import {ThemeContext} from "../../context/Context";
import {withRouter} from "react-router-dom";

function SearchBar(props) {
    const [term, setTerm] = useState('')
    const theme = useContext(ThemeContext)
    const inputRef = useRef(null)
    const search = () => {
        props.history.push(`/wyszukaj/${term}`)
    }
    const updateTerm = (e) => {
        setTerm(e.target.value)
    }
    useEffect(() => {
        //inputRef.current.focus()
    }, [])

    return (<>
        <input
            ref={inputRef}
            className={"search form-control"}
            style={{
                width: '200px',
            }}
            value={term}
            onChange={updateTerm}
            onKeyDown={e => {
                e.key === "Enter" && search()
            }}
            placeholder="Szukaj...."
        />
        <Button onClick={search} color={`${theme.theme}`} style={{color: `white`}}>Szukaj!</Button>
    </>)
}

export default withRouter(SearchBar)