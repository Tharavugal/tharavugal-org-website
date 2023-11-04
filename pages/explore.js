import ExploreForm from '@/components/explore/Form';
import List from '@/components/explore/List';
import Layout from '@/components/layouts/DefaultLayout';
import APIClient from '@/utils/APIClient';
import { Alert, Box, CircularProgress, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import useAlert from '@/hooks/useAlert';

export default function Explore() {
  const [state, setState] = useState({
    events: [],
    loading: false,
  });
  const showAlert = useAlert();
  const initialValues = {
    text: '',
    locations: [],
    tags: [],
    from: null,
    to: null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    sort: 'Descending',
  };

  const handleSubmit = async (values) => {
    setState({ ...state, loading: true });
    try {
      const response = await APIClient.post('/api/explore', values);
      setState({ ...state, events: response.data.events, loading: false });
    } catch (error) {
      setState({ ...state, loading: false });
      showAlert('error', 'Server Error, please try again later...');
    }
  };

  return (
    <Layout title="Explore">
      <Box textAlign="center">
        <Typography variant="h4">Explore</Typography>
      </Box>
      <Alert severity="success">
        You can explore <strong>Real-Time</strong> events here...
      </Alert>
      <Box
        sx={{
          p: { xs: 1, sm: 1, md: 2 },
          mt: 2,
          display: { xs: 'flex', sm: 'flex', md: 'grid' },
          flexDirection: { xs: 'column', sm: 'column' },
          gridTemplateColumns: '25fr 75fr',
          columnGap: 5,
        }}
      >
        <Paper sx={{ p: { xs: 1, sm: 1, md: 2 } }}>
          <ExploreForm initialValues={initialValues} onSubmit={handleSubmit} />
        </Paper>
        <Box>
          {state.events.length === 0 && !state.loading && (
            <Alert severity="info">No result...</Alert>
          )}
          {state.loading && (
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              <CircularProgress />
            </Typography>
          )}
          <Box>{!state.loading && <List events={state.events} />}</Box>
          <Alert severity="warning">
            Due to our current infrastructure limitations, we can only show a
            limited set of results here.
          </Alert>
        </Box>
      </Box>
    </Layout>
  );
}
