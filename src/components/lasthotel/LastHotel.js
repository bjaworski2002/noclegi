import {Button, Toast, ToastBody, ToastHeader} from "reactstrap";
import {ThemeContext} from "../context/Context";
import {useContext} from 'react'
import useStateStorage from "../hooks/usestatestorage/useStateStorage";

export default function LastHotel(props) {

    const [hotel, setHotel] = useStateStorage('last-hotel', null)
    //const hotel = {name: 'Test', rating: 6.0}
    const theme = useContext(ThemeContext)
    const clickNoHandler = () => {
        props.onRemove()
    }
    return (
        <div className="p-3 my-2 rounded">
            <Toast>
                <ToastHeader>
                    <b>Ostatnio oglądałeś ten hotel. Zainteresoawny?</b>
                </ToastHeader>
                <ToastBody>
                    <h4>{hotel.name}</h4>
                    <h6>8,8 &#9734;</h6>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button color={`${theme.theme}`} style={{color: `white`, margin: '1em'}}> Tak! </Button>
                        <Button onClick={clickNoHandler} color={`${theme.theme}`}
                                style={{color: `white`, margin: '1em'}}> Nie </Button>
                    </div>
                </ToastBody>
            </Toast>
        </div>
    );
}
