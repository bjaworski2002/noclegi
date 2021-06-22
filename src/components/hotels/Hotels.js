import React, { Component } from "react"
import Hotel from "./hotel/Hotel"
import styles from './Hotels.module.css'
import PropTypes from 'prop-types'
class Hotels extends Component {
    render(){
        return(
        <div className={styles.cont}>
            <p className={styles.title}>Oferty:</p>
            <div className={styles.hotels}>
                {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel}/>)}
            </div>
        </div>
        )
    }
}
export default Hotels