import Layout from '@/components/layouts/DefaultLayout';
import { Alert, Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function ContributionLogs() {
  return (
    <Layout>
      <Box textAlign="center">
        <Typography variant="h4">Contribution Logs</Typography>
      </Box>
      <Alert severity="warning">
        Work in Pipeline, please follow the{' '}
        <Link href="/work-pipeline">Work Pipeline</Link> for updates.
      </Alert>
    </Layout>
  );
}
