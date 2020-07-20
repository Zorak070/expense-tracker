import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial states
const initialState = {
    transactionList: []
};

//Context create
export const GlobalContext = createContext(initialState);

//Context Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_ITEM",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_ITEM",
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactionList: state.transactionList,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}