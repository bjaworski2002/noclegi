import './App.css';
import React, {useReducer} from 'react'
import {Button} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/header/Header.js"
import Menu from "./components/menu/Menu.js"
import SearchBar from "./components/header/searchbar/Searchbar";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import {AuthContext, ReducerContext, ThemeContext} from "./components/context/Context";
import {initialState, reducer} from "./components/hooks/appreducer/AppReducer";
import Home from "./pages/Home/Home";
import HotelPage from "./pages/HotelPage/HotelPage";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)


    const header = (
        <Header>
            <SearchBar/>
            <Button onClick={() => dispatch({type: 'change-theme'})}>Zmień Kolor!</Button>
        </Header>)
    const menu = <Menu/>
    const content = (
        <div>
            <Switch>
                <Route path={"/hotels/:id"} component={HotelPage}/>
                <Route path={"/wyszukaj/:term"} component={Search}/>
                <Route path={"/profile"} component={Profile}/>
                <Route path={"/"} component={Home}/>
            </Switch>
        </div>
    )
    const footer = <Footer/>


    return (
        <Router>
            <AuthContext.Provider value={{
                isAuthenticated: state.isAuthenticated,
                login: () => dispatch({type: 'login'}),
                logout: () => dispatch({type: 'logout'}),
            }}>
                <ThemeContext.Provider value={{
                    theme: state.theme,
                    changeTheme: () => dispatch({type: 'change-theme'})
                }}>
                    <ReducerContext.Provider value={{
                        state: state,
                        dispatch: dispatch
                    }}>
                        <Layout
                            header={header}
                            menu={menu}
                            content={content}
                            footer={footer}
                        />
                    </ReducerContext.Provider>
                </ThemeContext.Provider>
            </AuthContext.Provider>
        </Router>
    )
};

export default App;
