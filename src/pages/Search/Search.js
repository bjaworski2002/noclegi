import {useParams} from "react-router-dom";

export default function Search(props) {
    const {term} = useParams()
    const searchHandler = (term) => {
        /*console.log("Wyszukano!", term)
        const newHotels = [...defHotels]
            .filter(x => x.name.toLowerCase().includes(term.toLowerCase()))
        console.log(newHotels)
        dispatch({type: 'set-hotels', hotels: newHotels});*/
    }
    return (<div>Wyniki dla frazy "{term}"</div>)
}