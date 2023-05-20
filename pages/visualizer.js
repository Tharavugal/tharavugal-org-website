import Charts from '@/components/Visualizer/Charts';
import MUIAsyncSelectField from '@/components/forms/MUIAsyncSelect';
import MUIDateField from '@/components/forms/MUIDateField';
import Layout from '@/components/layouts/DefaultLayout';
import APIClient from '@/utils/APIClient';
import { Alert, Badge, Box, Button, Paper, Typography } from '@mui/material';
import { Form } from '@opentf/react-form';
import { format } from 'date-fns';
import { produce } from 'immer';
import { useState } from 'react';

export default function Visualizer() {
  const [state, setState] = useState({data: [], category: ''});

  return (
    <Layout>
      <Box textAlign="center">
        <Badge badgeContent="ALPHA" color="secondary">
          <Typography variant="h4">Visualizer</Typography>
        </Badge>
      </Box>
      <Alert severity="warning">
        Currently, a limited number of visualizations can be made.
      </Alert>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gridGap: '10px',
          my: 2,
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" textAlign="center">
            Filter
          </Typography>
          <Form
            initialValues={{
              category: '',
              from: new Date(),
              to: new Date(),
              locations: [],
            }}
            onSubmit={async (values) => {
              const data = produce(values, (draft) => {
                draft.from = format(draft.from, 'yyyy-MM-dd');
                draft.to = format(draft.to, 'yyyy-MM-dd');
                draft.timezone =
                  Intl.DateTimeFormat().resolvedOptions().timeZone;
              });
              const response = await APIClient.post('/api/visualize', data);
              setState({data: response.data.data, category: values.categories});
              console.log(response);
            }}
          >
            <Box mt={2}>
              <MUIAsyncSelectField
                name="categories"
                label="Event Category"
                url="/api/event-categories"
              />
            </Box>
            <Box mt={2}>
              <MUIDateField name="from" label="From" />
            </Box>
            <Box mt={2}>
              <MUIDateField name="to" label="To" />
            </Box>
            <Box mt={2}>
              <MUIAsyncSelectField
                name="locations"
                label="Locations"
                url="/api/event-locations"
                multiple
              />
            </Box>
            <Box mt={2}>
              <Button type="submit" variant="contained" fullWidth>
                Generate
              </Button>
            </Box>
          </Form>
        </Paper>
        <Paper>
          <Charts data={state.data} title={state.category} />
        </Paper>
      </Box>
    </Layout>
  );
}
