import { createContext, useContext } from "react"
import { initialState } from "../reducers/auth"

export const defaultStore = {
    store: { ...initialState},
    dispatch: () => {}
};

export const StoreContext = createContext(defaultStore)
export default () => {
    return useContext(StoreContext)
}