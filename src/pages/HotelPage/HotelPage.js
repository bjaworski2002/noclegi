import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import LoadingIcon from "../../components/UI/loadingicon/LoadingIcon";

export default function HotelPage(props) {

    const {id} = useParams()
    const [hotel, setHotel] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchHotel = () => {
        setHotel({
            id: 2,
            name: 'Hotel',
            description: "Lorem ipsum, losowe słowa stworzone żeby stworzyć templatkę. Super!",
            rank: 8.2
        })
        setLoading(false)
    }
    useEffect(() => {
        setTimeout(() => {
            fetchHotel()
        }, 500)
    }, [])
    if (loading) return <LoadingIcon/>
    return (<h1>Hotel: {hotel.name}</h1>)
}
