import { useRouter } from 'next/router';
import { Box, Paper, Alert } from '@mui/material';

import Layout from '@/components/layouts/DefaultLayout';
import Events from '@/components/Events';
import { connect } from '@/utils/db';

import styles from './index.module.css';
import SearchForm from '@/components/SearchForm';
import Tools from '@/components/tools';
import Resources from '@/components/Resources';
import FeaturedVisualizations from '@/components/FeaturedVisualizations';
import RecentDiscussions from '@/components/RecentDiscussions';
import RecentEntities from '@/components/RecentEntities';

export default function Home({ data }) {
    const router = useRouter();

  return (
    <Layout title="Home">
      <SearchForm
        onSubmit={(values) => {
          router.push('/search?q=' + values.searchText);
        }}
      />
      <Box
        sx={{
          display: { md: 'grid' },
          gridTemplateColumns: '70fr 30fr',
          columnGap: 2,
        }}
      >
        <Events data={data.events} styles={styles} />
        <Box>
          <Paper sx={{ mt: 0 }}>
            <Tools />
          </Paper>
          <Paper sx={{ mt: 2 }}>
            <FeaturedVisualizations />
          </Paper>
          <Paper sx={{ mt: 2 }}>
            <RecentDiscussions />
          </Paper>
          <Paper sx={{ mt: 2 }}>
            <RecentEntities />
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
  const cursor = eventsCol.aggregate([
    {
      $match: {
        status: 'Published',
      },
    },
    {
      $sort: {
        startedAt: -1,
      },
    },
    {
      $limit: 10,
    },
    // {
    //   $group: {
    //     _id: {
    //       $dateToString: {
    //         date: '$startedAt',
    //         format: '%G-%m-%d',
    //         timezone: '$startTz',
    //       },
    //     },
    //     records: {
    //       $push: {
    //         title: '$title',
    //         slug: '$slug',
    //         locations: '$locations',
    //         startedAt: '$startedAt',
    //         startTz: '$startTz',
    //       },
    //     },
    //   },
    // },
    // {
    //   $project: {
    //     records: 1,
    //   },
    // },
    {
      $project: {
        title: 1,
        slug: 1,
        locations: 1,
        startedAt: 1,
        startTz: 1,
      },
    },
  ]);

  const events = JSON.parse(JSON.stringify(await cursor.toArray()));
  return {
    props: {
      data: {
        events,
      },
    },
  };
}
