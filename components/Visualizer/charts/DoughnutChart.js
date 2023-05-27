import React from 'react';
import { Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export default function DoughnutChart({ title, data }) {
  const chartData = {
    labels: data.map((i) => i.label),
    datasets: [
      {
        label: title,
        data: data.map((i) => i.total),
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ maxHeight: '350px', display: 'flex', justifyContent: 'center' }}>
      <Doughnut data={chartData} />
    </Box>
  );
}
