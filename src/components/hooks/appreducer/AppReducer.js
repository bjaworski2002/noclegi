export const initialState = {
    theme: 'primary',
    hotels: [],
    isAuthenticated: false,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'change-theme':
            return {...state, theme: state.theme === 'primary' ? state.theme = 'success' : state.theme = 'primary'}
        case 'login':
            return {...state, isAuthenticated: true}
        case 'logout':
            return {...state, isAuthenticated: false}
        default:
            throw new Error(`nie ma takiej akcji! ${action.type}`)
    }
}
