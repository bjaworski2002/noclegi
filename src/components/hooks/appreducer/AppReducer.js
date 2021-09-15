export const initialState = {
    theme: 'primary',
    hotels: [],
    user: JSON.parse(window.localStorage.getItem('token-data')) ?? null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'change-theme':
            return {...state, theme: state.theme === 'primary' ? state.theme = 'success' : state.theme = 'primary'}
        case 'login':
            return {...state, user: action.user}
        case 'logout':
            return {...state, user: null}
        default:
            throw new Error(`nie ma takiej akcji! ${action.type}`)
    }
}
