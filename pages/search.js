import { useEffect, useState } from 'react';
import { Alert, Box, Paper } from '@mui/material';
import { useRouter } from 'next/router';

import Layout from '@/components/layouts/DefaultLayout';
import SearchForm from '@/components/SearchForm';
import APIClient from '@/utils/APIClient';
import Event from '@/components/Events/Event';

export default function Search({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const router = useRouter();

  async function fetchData(q) {
    if (!q) {
      return
    }
    setIsLoading(true);
    const response = await APIClient.get('/api/search-events?q=' + q);
    setEvents(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData(router.query.q);
  }, [router.query.q]);

  return (
    <Layout>
      <SearchForm
        isLoading={isLoading}
        initialValues={{ searchText: router.query.q }}
        onSubmit={(values) => fetchData(values.searchText)}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ p: 2, width: '50%', minHeight: '300px' }}>
          {events.length === 0 && (
            <Alert severity="info">No events found.</Alert>
          )}
          {events.map((e, i) => (
            <Event key={i} data={e} />
          ))}
        </Paper>
      </Box>
    </Layout>
  );
}
