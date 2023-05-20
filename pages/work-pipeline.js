import Layout from '@/components/layouts/DefaultLayout';
import { Alert, Box, Typography } from '@mui/material';

export default function WorkPipeline() {
  return (
    <Layout>
      <Box textAlign="center">
        <Typography variant="h4">Work Pipeline</Typography>
      </Box>
      <Alert severity="warning">
        Currently, Work in Progress...
      </Alert>
    </Layout>
  );
}
