import ProfileDetails from "./ProfileDetails/ProfileDetails";
import MyHotels from "./MyHotels/MyHotels";
import {NavLink, Route, Switch, useRouteMatch} from "react-router-dom";
import React from "react";

export default function Profile(props) {
    const {path, url} = useRouteMatch()

    return (
        <div className={"card border-1 m-4"}>
            <div className={"card-header"}>
                <h2>Mój profil</h2>
            </div>
            <div className={"card-body"}>
                <ul className={"nav nav-tabs"}>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={`${url}/edytuj`}>Profil</NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} to={`${url}/hotele`}>Hotele</NavLink>
                    </li>
                </ul>
                <div className={"pt-4"}>
                    <Switch>
                        <Route path={`${url}/hotele`} component={MyHotels}/>
                        <Route path={`${url}`} component={ProfileDetails}/>
                    </Switch>
                </div>
            </div>
        </div>)
}