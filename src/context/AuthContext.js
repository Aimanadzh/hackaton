import axios from 'axios';
import React, { useReducer } from 'react';
import { AUTH_API } from '../helpers/constants';


export const authContext = React.createContext();
    const INIT_STATE = {}


const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case '...':
            default: return state
    }
}


const AuthContextProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, INIT_STATE)

    async function registerUser (e, history) {
        e.preventDefault()

        const newUser = {
            email: e.target[0].value,
            password: e.target[2].value
        }

        try{
            const { data } = await axios.post(`${AUTH_API}/api/auth/login`, user)
            history.push('/')
            console.log(data)
        }catch(err){
            console.log(err.response)
        }

    }

    return ( 
        <authContext.Provider value={{
            registerUser,
            loginUser
            }}>
            {children}
        </authContext.Provider>
    )

}


export default AuthContextProvider;


