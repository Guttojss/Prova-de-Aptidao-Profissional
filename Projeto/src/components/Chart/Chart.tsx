'use client';

import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Associar } from '@/models/associar';

ChartJS.register(Tooltip, CategoryScale, LinearScale, BarElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const Chart: FC<{ userBookings: Associar[] }> = ({ userBookings }) => {
  const labels = userBookings.map(booking => booking.associacoes.name);
  const amountSpent = userBookings.map(booking => booking.totalPrice);

  return (
    <Bar
      options={options}
      data={{
        labels,
        datasets: [
          {
            label: 'Amount spent',
            data: amountSpent,
            borderWidth: 1,
            backgroundColor: '#F27405',
            hoverBackgroundColor: '#F2C641',
          },
        ],
      }}
    />
  );
};

export default Chart;
