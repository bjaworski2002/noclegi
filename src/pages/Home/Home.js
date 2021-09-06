import LastHotel from "../../components/lasthotel/LastHotel";
import BestHotel from "../../components/besthotel/BestHotel";
import Hotels from "../../components/hotels/Hotels";
import useWebsiteTitle from "../../components/hooks/usewebsitetitle/useWebsiteTitle";
import useStateStorage from "../../components/hooks/usestatestorage/useStateStorage";
import {useCallback, useContext, useEffect, useState} from 'react'
import {ReducerContext} from "../../components/context/Context";
import LoadingIcon from "../../components/UI/loadingicon/LoadingIcon";


export default function Home(props) {

    const defHotels = [
        {
            id: 1,
            name: 'Pensjonat',
            description: "Lorem ipsum, losowe słowa stworzone żeby stworzyć templatkę. Super!",
            rank: 8.8
        },
        {
            id: 2,
            name: 'Hotel',
            description: "Lorem ipsum, losowe słowa stworzone żeby stworzyć templatkę. Super!",
            rank: 8.2
        },
    ]

    useWebsiteTitle('Strona Główna')

    const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null)
    const reducer = useContext(ReducerContext)

    const [loading, setLoading] = useState(true)
    const [hotels, setHotels] = useState(true)

    const getBestHotel = useCallback(() => {
        if (!hotels.length) return null
        else return hotels.sort((a, b) => a.rank > b.rank ? -1 : 1)[0]
    }, [hotels])

    const openHotel = (hotel) => setLastHotel(hotel);
    const removeLastHotel = () => setLastHotel(null)

    useEffect(() => {
        setHotels(defHotels)
        setLoading(false)
    }, [])
    
    if (reducer.state.loading) {
        return <LoadingIcon/>
    }

    return loading ? <LoadingIcon/> : (
        <>
            <div className={"topCol"}>
                {lastHotel ? <LastHotel onRemove={removeLastHotel}/> : null}
                {getBestHotel() ? <BestHotel getBestHotel={getBestHotel}/> : null}
            </div>
            <Hotels onOpen={openHotel} hotels={hotels}/>
        </>
    )
}