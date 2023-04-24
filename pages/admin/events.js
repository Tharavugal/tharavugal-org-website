import { Box, Typography } from '@mui/material';
import Layout from '@/components/layouts/AdminLayout';
import Sidebar from '@/components/admin/Sidebar';

export default function Events() {
  return (
    <Layout>
      <Box sx={{ display: 'grid', gridTemplateColumns: '250px 1fr' }}>
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Typography variant="h3">Events</Typography>
        </Box>
      </Box>
    </Layout>
  );
}
