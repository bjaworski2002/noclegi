import React from 'react'

const ThemeContext = React.createContext({
    theme: "primary",
    changeTheme: () => {
    }
})

const AuthContext = React.createContext({
    isAuthenticated: false,
    login: () => {
    },
    logout: () => {
    },
})

const ReducerContext = React.createContext({
    state: {},
    dispatch: () => {
    },
})

export {
    ThemeContext,
    AuthContext,
    ReducerContext
}