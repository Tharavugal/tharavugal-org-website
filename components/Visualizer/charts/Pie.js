import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

export default function PieChart({ title, data }) {
  const chartData = {
    labels: data.map((i) => i.label),
    datasets: [
      {
        label: title,
        data: data.map((i) => i.total),
      },
    ],
  };

  return (
    <Box sx={{ maxHeight: '350px', display: 'flex', justifyContent: 'center' }}>
      <Pie data={chartData} />
    </Box>
  );
}
