import React from 'react';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';
import TransactionList from './TransactionList';

function App() {
  return (
    <div className="App">
      <h1>Gerenciador de Finanças</h1>
      <IncomeForm />
      <ExpenseForm />
      <TransactionList />
    </div>
  );
}

export default App;
