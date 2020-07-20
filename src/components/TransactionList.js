import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransactionItem } from './TransactionItem';

export const TransactionList = () => {

    const { transactionList } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactionList.map(item => (
                    <TransactionItem item={item} key={item.id} />
                ))}
            </ul>
        </>
    )
}
