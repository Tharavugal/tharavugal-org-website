import Layout from '@/components/layouts/DefaultLayout';
import { Alert, Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function Documents() {
  return (
    <Layout title="Documents">
      <Box textAlign="center">
        <Typography variant="h4">Documents</Typography>
      </Box>
      <Alert severity="warning">
        Work in Pipeline, please follow the{' '}
        <Link href="/work-pipeline">Work Pipeline</Link> for updates.
      </Alert>
    </Layout>
  );
}
