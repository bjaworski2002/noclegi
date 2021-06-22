import React, {useState} from 'react'
import { Button } from 'reactstrap'
function SearchBar(props){
    const [term, setTerm] = useState('')
    const search = () => {
        props.onSearch(term)
    }
    const updateTerm = (e) => {
        setTerm(e.target.value)
    }
    return (<>
        <input
            className="form-control"
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
        <Button onClick={search} color="info" style={{color: "white"}}>Szukaj!</Button>
    </>)
}

export default SearchBar