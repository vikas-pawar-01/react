import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', date: new Date(2022, 3, 23), title: 'Toilet Paper', amount: 700.49 },
  { id: 'e2', date: new Date(2021, 2, 28), title: 'New TV', amount: 555.49 },
  { id: 'e3', date: new Date(2020, 2, 10), title: 'Car Insurance', amount: 800.11 },
  { id: 'e4', date: new Date(2020, 9, 10), title: 'New Desk (Wooden)', amount: 200.55 }
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
      setExpenses((prevState) => {
          return [expense, ...prevState];
      });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;