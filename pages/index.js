import { Box, Divider, Paper, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Layout from '../components/layouts/DefaultLayout';
import Events from '@/components/Events';
import { connect } from '@/utils/db';

export default function Home({ data }) {
  return (
    <Layout>
      <Box
        sx={{ display: 'grid', gridTemplateColumns: '70fr 30fr', columnGap: 2 }}
      >
        <Events data={data.events} />
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <ChevronRightIcon /> Tools
          </Typography>
          <Divider />
        </Paper>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const eventsCol = client.db(DB_NAME).collection('events');
  const events = await eventsCol
    .find(
      { status: 'Published' },
      {
        projection: {
          _id: 0,
          title: 1,
          slug: 1,
          locations: 1,
          startedAt: 1,
          startTz: 1,
        },
      }
    )
    .sort({ updatedAt: -1 })
    .limit(10);

  return {
    props: {
      data: {
        events: JSON.parse(JSON.stringify(await events.toArray())),
      },
    },
  };
}
