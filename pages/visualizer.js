import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { produce } from 'immer';
import { Alert, Badge, Box, Divider, Paper, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Charts from '@/components/Visualizer/Charts';
import Filters from '@/components/Visualizer/Filters';
import Layout from '@/components/layouts/DefaultLayout';
import APIClient from '@/utils/APIClient';

export default function Visualizer() {
  const router = useRouter();
  const [state, setState] = useState({
    data: [],
    category: '',
    isLoading: false,
    chartType: 'Bar Chart',
    initialValues: {
      category: '',
      from: new Date(),
      to: new Date(),
      locations: [],
      view: 'Date',
    },
  });

  useEffect(() => {
    if (router.query.q) {
      const parsedQuery = JSON.parse(atob(router.query.q));
      setState({
        ...state,
        chartType: parsedQuery.chartType,
        initialValues: {
          category: parsedQuery.category,
          from: new Date(parsedQuery.from),
          to: new Date(parsedQuery.to),
          locations: parsedQuery.locations,
          view: parsedQuery.view,
        },
      });
      const data = produce(parsedQuery, (draft) => {
        draft.from = format(new Date(draft.from), 'yyyy-MM-dd');
        draft.to = format(new Date(draft.to), 'yyyy-MM-dd');
        draft.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      });
      fetchData(data);
    }
  }, [router.query]);

  const formatLabelsByView = (data, view) => {
    if (view === 'Date' || view === 'Year') {
      return data;
    }
    const Week = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      7: 'Sunday',
    };

    const Month = {
      '01': 'January',
      '02': 'Feburary',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };

    if (view === 'Week') {
      return data.map((o) => ({ ...o, label: Week[o.label] }));
    }

    if (view === 'Month') {
      return data.map((o) => ({ ...o, label: Month[o.label] }));
    }
  };

  async function fetchData(data) {
    setState((s) => ({ ...s, isLoading: true }));
    const response = await APIClient.post('/api/visualize', data);

    setState((s) => ({
      ...s,
      data: formatLabelsByView(response.data.data, data.view),
      category: data.category,
      isLoading: false,
    }));
  }

  return (
    <Layout title="Visualizer">
      <Box textAlign="center">
        <Badge badgeContent="ALPHA" color="secondary">
          <Typography variant="h4">Visualizer</Typography>
        </Badge>
      </Box>
      <Alert severity="warning">
        Currently, a limited number of visualizations can be made.
      </Alert>
      <Box
        sx={{
          display: { md: 'grid' },
          gridTemplateColumns: '300px 1fr',
          gridGap: '10px',
          my: 2,
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <ChevronRightIcon /> Filters
          </Typography>
          <Divider />
          <Filters
            initialValues={state.initialValues}
            onChange={(data) => fetchData(data)}
          />
        </Paper>
        <Paper sx={{ mt: { xs: 2, md: 0 }, minHeight: { xs: '300px' } }}>
          <Charts
            chartType={state.chartType}
            data={state.data}
            title={state.category}
            isLoading={state.isLoading}
          />
        </Paper>
      </Box>
    </Layout>
  );
}
