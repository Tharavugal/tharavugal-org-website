import Layout from '@/components/layouts/DefaultLayout';
import { Box, Paper, Typography } from '@mui/material';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <Layout>
      <Box textAlign="center">
        <Typography variant="h4">About Us</Typography>
      </Box>
      <Paper sx={{ p: 5, mt: 2 }}>
        <Typography variant="body1">
          Tharavugal.org is a non-profit web application providing real-time
          events based on a timeline with visualizations, research, and other
          tools.
        </Typography>

        <Typography variant="body1" mt={2}>
          Please <Link href="/contact-us">contact us</Link> for more info.
        </Typography>
      </Paper>
    </Layout>
  );
}
