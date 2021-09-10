import './App.css';
import React, {lazy, Suspense, useReducer} from 'react'
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
import NotFound from "./pages/404/404";
import Login from "./pages/Auth/Login/Login";
import AuthenticatedRoute from "./components/HOC/AuthenticatedRoute";
import ErrorBoundary from "./components/HOC/ErrorBoundary";
import AddHotel from "./pages/Profile/MyHotels/AddHotel/AddHotel";

const Profile = lazy(() => import("./pages/Profile/Profile"))

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
            <Suspense fallback={<p>Loading</p>}>
                <Switch>
                    <AuthenticatedRoute path={"/profile/hotele/dodaj"} isAuthenticated={state.isAuthenticated}
                                        component={AddHotel}/>
                    <AuthenticatedRoute path={"/profile"} isAuthenticated={state.isAuthenticated} component={Profile}/>
                    <Route path={"/hotels/:id"} component={HotelPage}/>
                    <Route path={"/wyszukaj/:term?"} component={Search}/>
                    <Route path={"/zaloguj"} component={Login}/>
                    <Route path={"/"} exact component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </Suspense>
        </div>
    )
    const footer =
        <Footer/>


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
                        <ErrorBoundary>
                            <Layout
                                header={header}
                                menu={menu}
                                content={content}
                                footer={footer}
                            />
                        </ErrorBoundary>
                    </ReducerContext.Provider>
                </ThemeContext.Provider>
            </AuthContext.Provider>
        </Router>
    )
};

export default App;
