import React from "react"
import Hotel from "./hotel/Hotel"
import styles from './Hotels.module.css'

function Hotels(props) {
    const count = props.hotels.length
    return (
        <div className={styles.cont}>
            <p className={styles.title}>Inne oferty ({count}):</p>
            <div className={styles.hotels}>
                {props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} onOpen={props.onOpen}/>)}
            </div>
        </div>
    )
}

export default React.memo(Hotels)