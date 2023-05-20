import { Box, Paper } from '@mui/material';
import { useRouter } from 'next/router';

import Layout from '../components/layouts/DefaultLayout';
import Events from '@/components/Events';
import { connect } from '@/utils/db';

import styles from './index.module.css';
import SearchForm from '@/components/SearchForm';
import Tools from '@/components/tools';
import Resources from '@/components/Resources';

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
        sx={{
          display: 'grid',
          gridTemplateColumns: '70fr 30fr',
          columnGap: 2,
        }}
      >
        <Events data={data.events} styles={styles} />
        <Box>
          <Paper>
            <Tools />
          </Paper>
          <Paper sx={{ mt: 2 }}>
            <Resources />
          </Paper>
        </Box>
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
      {
        $project: {
          records: 1,
        },
      },
      {
        $sort: {
          _id: -1,
        },
      },
    ])
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
