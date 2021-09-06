import React from 'react'
import styles from './Header.module.css'
import withMousePosition from "../HOC/withMousePosition";

function Header(props) {
    const paralaxStyles = {
        transform: `translate(${props.mouseX / 70}px, ${props.mouseY / 150}px)`
    }
    return (
        <header className={`${styles.header}`}>
            <div style={paralaxStyles} className={styles.headerImg}></div>
            {props.children}
        </header>)
}

export default withMousePosition(Header);