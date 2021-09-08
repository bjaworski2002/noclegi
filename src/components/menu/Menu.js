import React from 'react'
import {Nav, NavItem} from 'reactstrap';
import styles from "./menu.module.css"
import useAuth from "../hooks/useauth/useAuth";
import {NavLink} from "react-router-dom";

export default function Menu(props){
    const [auth, setAuth] = useAuth()

    const login = (e) => {
        e.preventDefault()
        setAuth(true)
    }

    const logout = (e) => {
        e.preventDefault()
        setAuth(false)
    }
    return (
        <div>
            <nav className={styles.nav}>
                <div>
                    <NavLink exact to={"/"} className={styles.menuItem} activeClassName={styles.menuActiveItem}>Home</NavLink>

                {auth ?
                    (<>
                            <NavLink to={"/profile"} className={styles.menuItem} activeClassName={styles.menuActiveItem}>Mój Profil</NavLink>
                            <NavLink to="#" className={styles.menuItem} onClick={logout}>Wyloguj się!</NavLink>
                        </>
                    ) :
                    (
                        <NavLink to="/zaloguj" activeClassName={styles.menuActiveItem} className={styles.menuItem} /*onClick={login}*/>Zaloguj się!</NavLink>
                    )
                }
                </div>
                <div className={styles.menuItem}>
                    Bartosz Jaworski © 2021
                </div>
            </nav>
        </div>)
}