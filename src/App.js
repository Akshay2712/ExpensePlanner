import React,{ useState } from "react";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

const Demo_Expenses= [
  {id:1, title: "Petrol Karchu", amount: "200", date: new Date(2021, 4, 21) },
  {id:2, title: "Movie", amount: "300", date: new Date(2021, 5, 25) },
  {id:3, title: "Food", amount: "600", date: new Date(2021, 7, 21) },
  {id:4, title: "Bills", amount: "700", date: new Date(2021, 8, 29) },
];

function App() {
  const [expenses,setExpenses]=useState(Demo_Expenses);
//expense here is returned as a paramenter when a new expense is added, but we reuturn the new expense as an argument and the previous expenses along with so that the list stays updated
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return[expense,...prevExpenses];
    });
  };

  return (
    <div>
      <h2 style={{color:'white',textAlign:'center'}}>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
