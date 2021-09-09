import {Redirect, Route} from "react-router-dom";
import {ReducerContext} from "../context/Context";
import {useContext} from 'react'

export default function AuthenticatedRoute(props) {
    const context = useContext(ReducerContext)
    return context.state.isAuthenticated ? <Route {...props} /> : <Redirect to={"/zaloguj"}/>
}