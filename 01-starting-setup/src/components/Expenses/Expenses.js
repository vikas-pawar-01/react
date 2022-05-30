import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler} />

            <ExpensesChart expenses={filteredExpenses} />

            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;