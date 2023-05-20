import { Form } from '@opentf/react-form';
import { format } from 'date-fns';
import { produce } from 'immer';
import { Box, Button } from '@mui/material';

import MUIAsyncSelectField from '@/components/forms/MUIAsyncSelect';
import MUIDateField from '@/components/forms/MUIDateField';
import APIClient from '@/utils/APIClient';

export default function Basic({ setState }) {
  return (
    <Form
      initialValues={{
        category: '',
        from: new Date(),
        to: new Date(),
        locations: [],
      }}
      onSubmit={async (values) => {
        setState((s) => ({ ...s, isLoading: true }));
        const data = produce(values, (draft) => {
          draft.from = format(draft.from, 'yyyy-MM-dd');
          draft.to = format(draft.to, 'yyyy-MM-dd');
          draft.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        });
        const response = await APIClient.post('/api/visualize', data);
        setState({
          data: response.data.data,
          category: values.categories,
          isLoading: false,
        });
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
  );
}
