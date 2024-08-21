import React from 'react';

function TransactionList() {
  // Supondo que você tenha uma lista de transações
  const transactions = [
    { id: 1, name: 'Salário', amount: 6000, month: '2024-08' },
    { id: 2, name: 'Alimentação', amount: -800, month: '2024-08' },
  ];

  return (
    <div>
      <h2>Histórico de Transações</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.name} ({transaction.month}): R$ {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
