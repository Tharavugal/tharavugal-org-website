import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Alert, Box, Chip, Paper, Typography } from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import Layout from '@/components/layouts/DefaultLayout';
import { setAppState, useAppState } from '@/store';
import APIClient from '@/utils/APIClient';
import { format } from 'date-fns';

export default function EventView() {
  const isLoading = useAppState((s) => s.loading);
  const [state, setState] = useState({
    event: null,
    error: false,
  });
  const router = useRouter();

  useEffect(() => {
    async function fetchData(slug) {
      if (!slug) {
        return;
      }

      setAppState((s) => ({ ...s, loading: true }));

      try {
        const response = await APIClient.get(
          '/api/events/' + router.query.slug
        );
        if (response.data.event) {
          setState({
            event: response.data.event,
            error: false,
          });
        } else {
          setState({
            ...state,
            error: 'The requested event could not be found.',
          });
        }
        setAppState((s) => ({ ...s, loading: false }));
      } catch (error) {
        setState({ error: error.message });
        setAppState((s) => ({ ...s, loading: false }));
      }
    }
    fetchData(router.query.slug);
  }, [router.query]);

  if (state.error) {
    return (
      <Layout>
        <Alert severity="error">{state.error}</Alert>
      </Layout>
    );
  }

  if (!state.event) {
    return '';
  }

  return (
    <Layout>
      <Box>
        <Typography variant="h3">{state.event.title}</Typography>
        <Paper sx={{ mt: 2, p: 2 }}>
          <Box>
            {state.event.verified ? (
              <Chip
                icon={<CheckCircleOutlinedIcon />}
                label="Verified"
                color="success"
                size="small"
              />
            ) : (
              <Chip
                icon={<CancelOutlinedIcon />}
                label="Not Verified"
                color="error"
                size="small"
              />
            )}
          </Box>
          <Box mt={1}>
            <table>
              <tbody>
                <tr>
                  <td>Location:</td>
                  <td>{state.event.locations.join(', ')}</td>
                </tr>
                <tr>
                  <td>Start Date Time:</td>
                  <td>
                    {format(
                      new Date(state.event.startedAt),
                      'yyyy-MM-dd hh:mm:ss aa'
                    )}{' '}
                    {state.event.startTz}
                  </td>
                </tr>
                <tr>
                  <td>End Date Time:</td>
                  <td>
                    {format(
                      new Date(state.event.endedAt),
                      'yyyy-MM-dd hh:mm:ss aa'
                    )}{' '}
                    {state.event.endTz}
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
}
