import { Box } from '@mui/material';
import Layout from '@/components/layouts/AdminLayout';
import Sidebar from '@/components/admin/Sidebar';
import Dashboard from '@/components/admin/dashboard';
import { connect } from '@/utils/db';

export default function Admin({ data }) {
  return (
    <Layout>
      <Box sx={{ display: 'grid', gridTemplateColumns: '250px 1fr' }}>
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Dashboard data={data} />
        </Box>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const eventsCol = client.db(DB_NAME).collection('events');
  const totalEvents = await eventsCol.estimatedDocumentCount();

  return {
    props: {
      data: {
        totalEvents,
      },
    },
  };
}
