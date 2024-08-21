import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title } from 'chart.js';

// Registrando componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title);

function ExpenseChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Expenses',
        data: [30, 45, 25, 70, 50, 90],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Expense Chart</h2>
      <Line data={data} />
    </div>
  );
}

export default ExpenseChart;
