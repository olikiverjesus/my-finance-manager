import React from 'react';

function MonthlySummary() {
  // Dados de exemplo
  const summary = {
    income: 1000,
    expense: 200,
    balance: 800,
  };

  return (
    <div>
      <h2>Monthly Summary</h2>
      <p>Income: ${summary.income}</p>
      <p>Expense: ${summary.expense}</p>
      <p>Balance: ${summary.balance}</p>
    </div>
  );
}

export default MonthlySummary;
