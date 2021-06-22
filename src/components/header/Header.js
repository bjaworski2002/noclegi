import React from 'react'
import styles from './Header.module.css'
import SearchBar from "./searchbar/Searchbar";

function Header(props){
    return (
    <header className={`${styles.header}`}>
        <SearchBar onSearch={props.onSearch}/>
    </header>)
}

export default Header;