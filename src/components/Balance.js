import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const { transactionList } = useContext(GlobalContext);
    const total = transactionList.reduce((acc, item) => (acc + item.amount), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
};