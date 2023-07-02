import Layout from '@/components/layouts/DefaultLayout';
import { Box, Paper, Typography } from '@mui/material';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <Layout title="About Us">
      <Box textAlign="center">
        <Typography variant="h4">About Us</Typography>
      </Box>
      <Paper sx={{ p: 5, mt: 2 }}>
        <Typography variant="body1">
          Tharavugal.org is a non-profit web application & social platform,
          with the members of the organization primarily providing real-time
          events based on a timeline and other information.
        </Typography>
        <Typography variant="body1" mt={1}>
          Based on the available data, the web app provides tools for
          visualizations, research, and others.
        </Typography>

        <Typography variant="body1" mt={2}>
          Some of the significant features include:
        </Typography>

        <ul>
          <li>Open source</li>
          <li>Ad free (Always)</li>
          <li>Research-Oriented</li>
          <li>
            Privacy focused (
            <Link href="/privacy-policy">Click here to learn more</Link>)
          </li>
        </ul>

        <Typography variant="body1" mt={2}>
          Please <Link href="/contact-us">contact us</Link> for more info.
        </Typography>
      </Paper>
    </Layout>
  );
}
