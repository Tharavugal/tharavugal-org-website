import { useEffect, useState } from 'react';
import { Alert, AlertTitle, Box, Paper } from '@mui/material';
import { useRouter } from 'next/router';

import Layout from '@/components/layouts/DefaultLayout';
import SearchForm from '@/components/SearchForm';
import APIClient from '@/utils/APIClient';
import Event from '@/components/Events/Event';

export default function Search({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const router = useRouter();

  async function fetchData(text) {
    if (!text) {
      return;
    }
    setIsLoading(true);
    const arr = text.split('in');
    const data = {
      title: arr[0].trim(),
      locations: arr[1] ? arr[1].trim().split(' ') : [],
    };
    const response = await APIClient.post('/api/search-events', data);
    setEvents(response.data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData(router.query.q);
  }, [router.query.q]);

  return (
    <Layout title="Search">
      <SearchForm
        isLoading={isLoading}
        initialValues={{ searchText: router.query.q }}
        onSubmit={(values) => fetchData(values.searchText)}
      />
      <Box mt={2}>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          You can search using keywords like <strong>
            `road accident`
          </strong>, <strong>`child abuse`</strong>, etc.
          <br />
          You can also search keywords with locations like,{' '}
          <strong>road accidents in chennai</strong>
          <br />
          For search in multiple locations, use <strong>space</strong> to
          separate it, like <strong>fire accidents in chennai banglore</strong>
        </Alert>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
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
