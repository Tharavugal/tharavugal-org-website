import Layout from '@/components/layouts/DefaultLayout';
import { Alert, Box, Typography } from '@mui/material';

export default function Documents() {
  return (
    <Layout>
      <Box textAlign="center">
        <Typography variant="h4">Documents</Typography>
      </Box>
      <Alert severity="warning">
        Work in Pipeline, please follow the{' '}
        <a href="/work-pipeline">Work Pipeline</a> for updates.
      </Alert>
    </Layout>
  );
}
