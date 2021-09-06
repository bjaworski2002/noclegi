import React from 'react'
import {Nav, NavItem} from 'reactstrap';
import styles from "./menu.module.css"
import useAuth from "../hooks/useauth/useAuth";
import {NavLink} from "react-router-dom";

export default function Menu(props) {

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
        <div className={styles.nav}>
            <Nav className={`navbar navbar-${props.theme}`} style={{
                display: "flex",
                justifyContent: "space-around",
            }}>
                <NavItem>
                    <NavLink exact to={"/"} activeClassName={styles.menuItem}>Home</NavLink>
                </NavItem>

                {auth ?
                    (<>
                            <NavItem>
                                <NavLink to={"/profile"} activeClassName={styles.menuItem}>Mój Profil</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#" onClick={logout}>Wyloguj się!</NavLink>
                            </NavItem>
                        </>
                    ) :
                    (
                        <NavItem>
                            <NavLink to="#" onClick={login}>Zaloguj się!</NavLink>
                        </NavItem>
                    )
                }

            </Nav>
        </div>)
}
