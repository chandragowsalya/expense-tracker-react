import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
    const { transaction }= useContext(GlobalContext);
    const amount = transaction.map(transaction=> transaction.amount);
    const income = amount.
    filter(item => item>0).
    reduce(((pre,curr)=>pre+=curr),0).toFixed(2);
    
    const expense = amount.
    filter(item => item<0).
    reduce(((pre,curr)=>pre+=curr),0).toFixed(2);
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+Rs.{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-Rs.{Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  )
}



