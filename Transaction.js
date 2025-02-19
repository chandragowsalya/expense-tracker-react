import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount<0 ? '-': '+';
  return (
    <div>
      <ul className="list">
        <li className={sign =='-'? "minus":"plus"}>
          {transaction.text} <span>{sign}Rs.{Math.abs(transaction.amount)}</span><button className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
      </ul>
    </div>
  )
}


