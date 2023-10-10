import { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Layout from '@/components/layouts/DefaultLayout';
import SearchForm from '@/components/SearchForm';
import APIClient from '@/utils/APIClient';
import Link from 'next/link';
import { format } from 'date-fns';

export default function Search({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState({});
  const router = useRouter();

  async function fetchData(query) {
    if (!query) {
      return;
    }
    setIsLoading(true);
    const response = await APIClient.get('/api/search?q=' + query);
    setSearchData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData(router.query.q);
  }, [router.query.q]);

  const renderRealTimeEvents = () => {
    if (searchData.events && Object.keys(searchData.events).length > 0) {
      return (
        <>
          <Typography variant="h6">Real-Time Events:</Typography>
          <Box sx={{ ml: 2 }}>
            {searchData.events.map((ev, i) => (
              <Box key={i} sx={{ p: 1, mt: 1, border: '1px solid lightgray' }}>
                <Box component={Link} href={'/events/' + ev.slug}>
                  {ev.title}
                </Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Date: {format(new Date(ev.startedAt), 'yyyy-MM-dd')}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      );
    }
  };

  const renderFoodIngredients = () => {
    if (
      searchData.foodIngredients &&
      Object.keys(searchData.foodIngredients).length > 0
    ) {
      return (
        <>
          <Typography variant="h6">Food Ingredients:</Typography>
          <Box sx={{ ml: 2 }}>
            {searchData.foodIngredients.map((fi, i) => (
              <Box key={i} sx={{ p: 1, mt: 1, border: '1px solid lightgray' }}>
                <Box component={Link} href={'/food-ingredients/' + fi.slug}>
                  {fi.name}
                </Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {fi.foodType}
                </Typography>
              </Box>
            ))}
          </Box>
        </>
      );
    }
  };

  return (
    <Layout title="Search">
      <SearchForm
        isLoading={isLoading}
        initialValues={{ searchText: router.query.q }}
        onSubmit={(values) => fetchData(values.searchText)}
      />
      <Paper sx={{ p: { xs: 1, sm: 1, md: 2 }, minHeight: '300px' }}>
        <Box>{renderRealTimeEvents()}</Box>
        <Box sx={{ mt: 2 }}>{renderFoodIngredients()}</Box>
      </Paper>
    </Layout>
  );
}
