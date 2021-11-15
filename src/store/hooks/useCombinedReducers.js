import { useReducer } from 'react'
import { initialState } from '../reducers/auth/index'
import authReducer from '../reducers/auth/index'

const useCombinedReducers = () => {
    const [authStore, auth] = useReducer(authReducer, initialState)

    return {
        store: { ...authStore},
        reducers: [auth]
    }
}

export default useCombinedReducers