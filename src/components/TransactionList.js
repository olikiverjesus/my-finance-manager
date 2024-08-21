import React, { useState } from 'react';

function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para adicionar despesa
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <label>
        Amount:
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </label>
      <label>
        Description:
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
