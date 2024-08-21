import React from 'react';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import TransactionList from './components/TransactionList';
import MonthlySummary from './components/MonthlySummary';
import ExpenseChart from './components/ExpenseChart';

function App() {
  return (
    <div className="App">
      <h1>My Finance Manager</h1>
      <IncomeForm />
      <ExpenseForm />
      <TransactionList />
      <MonthlySummary />
      <ExpenseChart />
    </div>
  );
}

export default App;
