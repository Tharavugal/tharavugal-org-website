import { Form } from '@opentf/react-form';
import { format } from 'date-fns';
import { produce } from 'immer';
import { Box, Button } from '@mui/material';

import MUIAsyncSelectField from '@/components/forms/MUIAsyncSelect';
import MUIDateField from '@/components/forms/MUIDateField';
import APIClient from '@/utils/APIClient';
import MUISelectField from '@/components/forms/MUISelectField';

export default function Basic({ setState }) {
  const viewOptions = ['Date', 'Week', 'Month', 'Year'];

  const formatLabelsByView = (data, view) => {
    if (view === 'Date' || view === 'Year') {
      return data;
    }
    const Week = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      7: 'Sunday',
    };

    const Month = {
      '01': 'January',
      '02': 'Feburary',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };

    if (view === 'Week') {
      return data.map((o) => ({ ...o, label: Week[o.label] }));
    }

    if (view === 'Month') {
      return data.map((o) => ({ ...o, label: Month[o.label] }));
    }
  };

  return (
    <Form
      initialValues={{
        category: '',
        from: new Date(),
        to: new Date(),
        locations: [],
        view: 'Date',
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
          data: formatLabelsByView(response.data.data, values.view),
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
        <MUISelectField name="view" label="View" options={viewOptions} />
      </Box>
      <Box mt={2}>
        <Button type="submit" variant="contained" fullWidth>
          Generate
        </Button>
      </Box>
    </Form>
  );
}
