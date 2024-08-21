import React, { useState } from 'react';

function ExpenseForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para adicionar a despesa
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome da Despesa"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Valor"
      />
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        placeholder="Mês da Despesa"
      />
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
}

export default ExpenseForm;
