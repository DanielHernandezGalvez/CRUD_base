import { Children, createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useReducer( AppReducer, initialState)
    return (

        <Context.Provider value={{ total: 100 }}>
            {children}
        </Context.Provider>
    )
}