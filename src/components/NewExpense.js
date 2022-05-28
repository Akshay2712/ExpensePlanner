import ExpenseForm from './ExpenseForm';
import React,{ useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isediting,setIsediting]=useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    //setIsediting(false);
  };

  const startEditingHandler=()=>{
    setIsediting(true);
  }

  const stopEditingHandler=()=>{
    setIsediting(false);
  }

  return (
    <div className='new-expense'>
      {!isediting && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isediting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;