import { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import BarChart from './charts/Bar';
import AreaChart from './charts/Area';
import LineChart from './charts/Line';
import PieChart from './charts/Pie';
import DoughnutChart from './charts/DoughnutChart';

export default function Charts({ chartType, title, data, isLoading }) {
  const [state, setState] = useState({ chartType });

  useEffect(() => {
    if (state.chartType !== chartType) {
      setState((s) => ({ ...s, chartType }));
    }
  }, [chartType]);

  if (isLoading) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Alert severity="info">No data</Alert>
      </Box>
    );
  }

  const renderChart = () => {
    switch (state.chartType) {
      case 'Area Chart':
        return <AreaChart title={title} data={data} />;
      case 'Bar Chart':
        return <BarChart title={title} data={data} />;
      case 'Line Chart':
        return <LineChart title={title} data={data} />;
      case 'Pie Chart':
        return <PieChart title={title} data={data} />;
      case 'Doughnut Chart':
        return <DoughnutChart title={title} data={data} />;
      default:
        break;
    }
  };

  return (
    <Box p={2}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="chart-type-label">Chart Type</InputLabel>
          <Select
            labelId="chart-type-label"
            value={state.chartType}
            label="Chart Type"
            onChange={(e) => setState({ ...state, chartType: e.target.value })}
          >
            <MenuItem value="Area Chart">Area Chart</MenuItem>
            <MenuItem value="Bar Chart">Bar Chart</MenuItem>
            <MenuItem value="Doughnut Chart">Doughnut Chart</MenuItem>
            <MenuItem value="Line Chart">Line Chart</MenuItem>
            <MenuItem value="Pie Chart">Pie Chart</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>{renderChart()}</Box>
    </Box>
  );
}
