import { Box, Divider, Paper, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';

import Layout from '../components/layouts/DefaultLayout';
import Events from '@/components/Events';
import { connect } from '@/utils/db';

import styles from './index.module.css';
import SearchForm from '@/components/SearchForm';

export default function Home({ data }) {
  const router = useRouter();

  return (
    <Layout>
      <SearchForm
        onSubmit={(values) => {
          router.push('/search?q=' + values.searchText);
        }}
      />
      <Box
        sx={{ display: 'grid', gridTemplateColumns: '70fr 30fr', columnGap: 2 }}
      >
        <Events data={data.events} styles={styles} />
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
  const cursor = eventsCol
    .aggregate([
      {
        $match: {
          status: 'Published',
        },
      },
      {
        $group: {
          _id: {
            $dateToString: {
              date: '$startedAt',
              format: '%G-%m-%d',
              timezone: '$startTz',
            },
          },
          records: {
            $push: {
              title: '$title',
              slug: '$slug',
              locations: '$locations',
              startedAt: '$startedAt',
              startTz: '$startTz',
            },
          },
        },
      },
    ])
    .sort({ startedAt: -1 })
    .limit(10);

  const events = JSON.parse(JSON.stringify(await cursor.toArray()));
  return {
    props: {
      data: {
        events,
      },
    },
  };
}
