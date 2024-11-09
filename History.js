import React,{useContext} from 'react'
import {Transaction} from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const History = () => {
    const { transaction }= useContext(GlobalContext);
    console.log({transaction});
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction}/>))}
      </ul>
    </>
  )
}


