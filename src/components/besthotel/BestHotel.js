import React, {useContext, useEffect, useState} from 'react';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';
import {ThemeContext} from "../context/Context";
import moment from 'moment'
import {Link} from "react-router-dom";
import styles from "./BestHotel.module.css"
import hotelImg from "../../assets/images/hotel.jpg"

const Example2 = (props) => {

    const theme = useContext(ThemeContext)
    const [time, setTime] = useState('')
    const endTime = moment().add(20, 'minutes').add(34, 'seconds')
    let interval = null;

    useEffect(() => {
        interval = setInterval(() => {
            const leftTime = -moment().diff(endTime) / 1000
            const minutes = Math.floor(leftTime / 60)
            let seconds = Math.floor(leftTime % 60)
            seconds < 10 ? seconds = '0' + seconds : seconds = seconds
            setTime(`${minutes}:${seconds}`)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    const hotel = props.getBestHotel()

    if (!hotel) return null;

    return (
        <Toast>
            <ToastHeader>
                Najlepsza oferta!
            </ToastHeader>
            <ToastBody>
                <h4>{hotel.name}</h4>
                <h6>{hotel.rank} &#9734;</h6>
                <p>Do końca oferty pozostało: {time}</p>
                <Link to={`/hotels/${hotel.id}`} className={"btn btn-sm btn-primary"}> Zobacz! </Link>
            </ToastBody>
        </Toast>
    );
};

const Example = (props) => {

    const theme = useContext(ThemeContext)
    const [time, setTime] = useState('')
    const endTime = moment().add(20, 'minutes').add(34, 'seconds')
    let interval = null;

    useEffect(() => {
        interval = setInterval(() => {
            const leftTime = -moment().diff(endTime) / 1000
            const minutes = Math.floor(leftTime / 60)
            let seconds = Math.floor(leftTime % 60)
            seconds < 10 ? seconds = '0' + seconds : seconds = seconds
            setTime(`${minutes}:${seconds}`)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    const hotel = props.getBestHotel()

    if (!hotel) return null;

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h5>Najlepsza oferta!</h5>
                <h4>{hotel.name}</h4>
                <h6>{hotel.rank} &#9734;</h6>
                <p>Do końca oferty pozostało: {time}</p>
                <Link to={`/hotels/${hotel.id}`} className={"btn btn-sm btn-primary"}> Zobacz! </Link>
            </div>
            <img className={styles.imageContainer} src={hotelImg}/>
            {/*<div className={styles.container}>

            </div>
            <div>111</div>*/}
            {/*<img className={styles.imageContainer} src={hotelImg}/>*/}
        </div>
    );
};

export default Example;
