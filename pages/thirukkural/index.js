import Layout from '@/components/layouts/DefaultLayout';
import { Masonry } from '@mui/lab';
import { Alert, Box, Divider, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Thirukkural() {
  return (
    <Layout title="Thirukkural">
      <Box textAlign="center">
        <Typography variant="h4">Thirukkural</Typography>
      </Box>
      <Alert severity="warning">
        Work in Pipeline, please follow the{' '}
        <Link href="/work-pipeline">Work Pipeline</Link> for updates.
      </Alert>

      <Box mt={2}>
        <Paper sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <ChevronRightIcon /> Browse
          </Typography>
          <Divider />

          <Box mt={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Box
              component={Link}
              href="/thirukkural/virtue"
              sx={{
                border: '1px groove lightgrey',
                p: 2,
                textDecoration: 'none',
                m: 2,
              }}
            >
              VIRTUE
            </Box>
            <Box
              component={Link}
              href="/thirukkural/wealth"
              sx={{
                border: '1px groove lightgrey',
                p: 2,
                textDecoration: 'none',
                m: 2,
              }}
            >
              WEALTH
            </Box>
            <Box
              component={Link}
              href="/thirukkural/love"
              sx={{
                border: '1px groove lightgrey',
                p: 2,
                textDecoration: 'none',
                m: 2,
              }}
            >
              LOVE
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box mt={2}>
        <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          <Paper sx={{ minHeight: '50px', p: 2, textAlign: 'center' }}>
            <Typography variant="h3">1,330</Typography>
            <Typography color="primary">Kurals</Typography>
          </Paper>
          <Paper sx={{ minHeight: '50px', p: 2, textAlign: 'center' }}>
            <Typography variant="h3">133</Typography>
            <Typography color="primary">Chapters</Typography>
          </Paper>
          <Paper sx={{ minHeight: '50px', p: 2, textAlign: 'center' }}>
            <Typography color="primary">Sections</Typography>
            <Box sx={{ textAlign: 'left' }}>
              <ul>
                <li>Virtue</li>
                <li>Wealth</li>
                <li>Love</li>
              </ul>
            </Box>
          </Paper>
          <Paper sx={{ minHeight: '50px', p: 2, textAlign: 'center' }}>
            <Typography color="primary">Total unique words</Typography>
            <Typography variant="h3">_</Typography>
          </Paper>
          <Paper sx={{ minHeight: '50px', p: 2, textAlign: 'center' }}>
            <Typography color="primary">List of Unique words</Typography>
            <Typography variant="h3">_</Typography>
          </Paper>
          <Paper sx={{ minHeight: '50px', p: 2, textAlign: 'center' }}>
            <Typography color="primary">Most repeated word</Typography>
            <Typography variant="h3">_</Typography>
          </Paper>
          <Paper sx={{ minHeight: '50px', p: 2, textAlign: 'center' }}>
            <Typography color="primary">Least repeated word</Typography>
            <Typography variant="h3">_</Typography>
          </Paper>
        </Masonry>
      </Box>
    </Layout>
  );
}
