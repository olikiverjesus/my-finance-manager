import React, { useState } from 'react';

function IncomeForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para adicionar o ganho
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do Ganho"
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
        placeholder="Mês do Ganho"
      />
      <button type="submit">Adicionar Ganho</button>
    </form>
  );
}

export default IncomeForm;
