import { useState } from 'react';
import { Alert, Badge, Box, Divider, Paper, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Charts from '@/components/Visualizer/Charts';
import Filters from '@/components/Visualizer/Filters';
import Layout from '@/components/layouts/DefaultLayout';

export default function Visualizer() {
  const [state, setState] = useState({
    data: [],
    category: '',
    isLoading: false,
  });

  return (
    <Layout>
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
          <Filters setState={setState} />
        </Paper>
        <Paper sx={{ mt: { xs: 2, md: 0 }, minHeight: { xs: '300px' } }}>
          <Charts
            data={state.data}
            title={state.category}
            isLoading={state.isLoading}
          />
        </Paper>
      </Box>
    </Layout>
  );
}
