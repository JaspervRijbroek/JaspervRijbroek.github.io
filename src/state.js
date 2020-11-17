import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === `toggleColorScheme`) {
        return Object.assign({}, state, {
            colorScheme: state.colorScheme === 'dark' ? 'light' : 'dark',
        })
    }
    return state
}

export const store = createStore(reducer, {
    colorScheme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
});