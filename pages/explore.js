import ExploreForm from '@/components/explore/Form';
import List from '@/components/explore/List';
import Layout from '@/components/layouts/DefaultLayout';
import APIClient from '@/utils/APIClient';
import { Alert, Box, Paper, Typography } from '@mui/material';
import { useState } from 'react';

export default function Explore() {
  const [state, setState] = useState({ events: [], loading: false });

  const handleSubmit = async (values) => {
    setState({ ...state, loading: true });
    const response = await APIClient.post('/api/explore', values);
    setState({ events: response.data.events, loading: false });
  };

  return (
    <Layout title="Explore">
      <Box textAlign="center">
        <Typography variant="h4">Explore</Typography>
      </Box>
      <Alert severity="success">
        You can explore <strong>Real-Time</strong> events here...
      </Alert>
      <Paper
        sx={{
          p: { xs: 1, sm: 1, md: 2 },
          mt: 2,
          display: 'grid',
          gridTemplateColumns: '25fr 75fr',
          columnGap: 5,
        }}
      >
        <Box>
          <ExploreForm
            initialValues={{ text: '', locations: [], tags: [] }}
            onSubmit={handleSubmit}
          />
        </Box>
        <Box>
          {state.events.length === 0 && !state.loading && (
            <Alert severity="info">No result...</Alert>
          )}
          {state.loading && (
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Loading...
            </Typography>
          )}
          <Box>{!state.loading && <List events={state.events} />}</Box>
        </Box>
      </Paper>
    </Layout>
  );
}
