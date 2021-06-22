import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from "./menu.module.css"

function Menu () {
    return (<div className={styles.nav}>
        <Nav pills style={{
            display: "flex",
            justifyContent: "space-around"
        }}>
            <NavItem>
                <NavLink href="#" active>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Search</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Essa</NavLink>
            </NavItem>
        </Nav>
    </div>)
}

export default Menu